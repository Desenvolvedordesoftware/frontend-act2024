import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Nabar/Navbar";
import ItemMenu from "./ItemMenu";
import "./Menu.style.css";
import { Page } from "../../styles/stylesHome";

const Menu = ({ children }) => {

    const [open, setOpen] = useState('fechado');

    const handleMenu = () => {
        (open === 'aberto') ? setOpen('fechado') : setOpen('aberto');
    };

    return (
        <>
            <div className={`menu ${open}`} >
                <h1 className="logo">ACThauros</h1>
                <h1 className="logo">Sistemas de Gestão Comercial</h1>
                <Page >
                <ul className="conteudo-menu">
                    {/* Menu sem Dropdow */}
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/register">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Cadastro</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/stock">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Estoque</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/movements">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Movimentos</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/financial">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Financeiro</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/reports">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span>Relatótios</span>
                        </NavLink>
                    </li>
                    <li className="item-menu">
                        <NavLink className="link-menu" to="/settings">
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
                        <NavLink className="link-menu" to="/login">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span>Sair</span>
                        </NavLink>
                    </li>
                </ul>
                </Page>
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