import React, { useState } from "react";
import { Container, From, Img, ImgLogo } from "./styles";
import useAuth from '../../hooks/useAuth';
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
  debugger   
        if (!email | !senha) {
            toast.warn("Preecha todos os campos!");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
        <Container >
            <Img src="./images/Welcome1.png" />
            <From>
               <ImgLogo src="./images/LogoEmpresa.png" />
                <h1>Faça o seu Login</h1>
                <Input
                    type="email"
                    placeholder="Digite seu E-mail!"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="Digite sua Senha!"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <Button Text="Entrar" onClick={handleLogin}/>
                <div>
                    <p>Não possui conta? <Link style={{color:"#02b3d4"}} to="/home">&nbsp;WhatSapp</Link></p>
                    
                </div>
            </From>
           <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </Container>
    );
};

export default Login;