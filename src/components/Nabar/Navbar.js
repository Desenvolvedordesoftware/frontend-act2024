import React,{useEffect} from 'react';
import './Navbar.style.css';import {
    Typography,
} from '@mui/material';
import {codCompany} from "../../function/FunctionR"

const Navbar = ({ tipoMenu, handleMenu }) => {

   let company = "";
   let neighborhood = "";

   

    return (
        <div className="navbar">
            <button className="btn-menu" onClick={() => handleMenu()}>   
            <i class="fa-solid fa-list"></i>
            </button>
            <div style={{display:"table-column", alignContent:"center", alignItems:"center"}} >
            <Typography style={{ color: "#02b3d4", fontSize:"12px" }} ><i class="fa-solid fa-globe"></i> {company} </Typography>
            <Typography style={{ color: "#02b3d4", fontSize:"12px" }} > {neighborhood} </Typography>
            </div>
            <img src="/images/logoACT.jpg" className="user-ciclo" alt="user" />
        </div>
    );
};

export default Navbar;