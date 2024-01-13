import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {url} from "../../function/FunctionR";
import Navbar from "../Nabar/Navbar";
import "./Menu.style.css";
import { Page } from "../../styles/stylesHome";
import useAuth from "../../hooks/useAuth";import {
    Typography,
} from '@mui/material';

const Menu = ({ children }) => {
    const { signout } = useAuth();
    const [open, setOpen] = useState('fechado');
    const [company, setCompany] = useState();
    const [cnpj, setCnpj] = useState();

    const handleMenu = () => {
        (open === 'aberto') ? setOpen('fechado') : setOpen('aberto');
    };

    const dadosCompany = async () => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const CodCompany = usersStorage.map((user) => user.CodCompany);
       
            try {
               const res = await axios.get(url+"/settings/company/"+CodCompany);
   
               if (res.data.length === 0) {
                  return toast.warn("Falha!");
               } else {
                  var lista = [];
   
                  res.data.map((dados) => {
                     lista.push(
                        [(dados.id),
   
                        ]
                     )
                     setCnpj(dados.CNPJ);
                     setCompany( dados.NOME);
                  })
   
               }
            } catch (error) {
               toast.error(error);
            }
    }

    useEffect(() => {
     dadosCompany();
     return;
    },[]);

    return (
        <>
            <div className={`menu ${open}`} >
            <Typography className="logo" style={{ color: "#02b3d4", fontSize:"12px" }} ><i class="fa-solid fa-globe"></i> {company} </Typography>
            <Typography className="logo" style={{ color: "#02b3d4", fontSize:"10px" }} >CNPJ: {cnpj} </Typography>
                <Page >
                <ul className="conteudo-menu">
                    {/* Menu sem Dropdow */}
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/home" onClick={handleMenu} >
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/register" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Cadastro</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/stock" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Estoque</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/movements" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Movimentos</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/financial" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Financeiro</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/reports" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Relatótios</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/settings" onClick={handleMenu}>
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Configurações</span>
                        </NavLink>
                    </li>
 {/* Menu com Dropdow 
                    <ItemMenu title="Configurações" icon="fa-solid fa-gear">
                        <li>
                            <NavLink className="link-menu" to="/settings">
                                <i class="fa-solid fa-user-plus"></i>
                                <span>Empresa</span>
                            </NavLink>
                        </li>
                    </ItemMenu>

 */}                   <li className="item-menu">
                        <NavLink className="link-menu" to="/" onClick={() => [signout(), handleMenu]}>
                        <i class="fa-solid fa-right-from-bracket"></i>
                            <span>Sair</span>
                        </NavLink>
                    </li>
                </ul>
                </Page>
             <div style={{ 
                marginLeft:"10px", 
                marginTop:"70%"}}>
                <Typography style={{ color: "#02b3d4", fontSize:"12px" }} ><i class="fa-solid fa-globe"></i>ACThauros</Typography>
                <Typography style={{ color: "#02b3d4", fontSize:"12px" }} >Sistemas de Gestão Comercial</Typography>
                <Typography style={{ color: "#02b3d4", fontSize:"12px" }} >Versão: 0.1.98</Typography>
                
             </div>
            </div>

            <div className={`site ${open}`}>
                <Navbar
                    tipoMenu={open}
                    handleMenu={handleMenu}
                />

                {children}
            </div>
        </>
    );
};

export default Menu;