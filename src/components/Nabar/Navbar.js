import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {url} from "../../function/FunctionR";
import './Navbar.style.css';
import {
    Typography,
} from '@mui/material';

const Navbar = ({tipoMenu, handleMenu }) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const CodCompany = usersStorage.map((user) => user.CodCompany);
    const [companyF, setCompanyF] = useState();

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
                    setCompanyF( dados.FANTASIA);
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
        <div className="navbar">
            <button className="btn-menu" onClick={() => handleMenu()}>   
             {tipoMenu === 'aberto' ? <i class="fa-regular fa-circle-xmark"></i> :  <i class="fa-solid fa-list"></i>}
            </button>
            <div style={{display:"flex", alignContent:"center", alignItems:"center", gap:"4px" }} >
            <Typography style={{ color: "#02b3d4", fontSize:"12px" }} ><i class="fa-solid fa-globe"></i> {companyF} </Typography>
            </div>
            <img src="/images/logoACT.png" className="user-ciclo" alt="user" />
        </div>
    );
};

export default Navbar;