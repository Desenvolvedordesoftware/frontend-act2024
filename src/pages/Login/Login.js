import React, { useState } from "react";
import { Container, From, Img, ImgLogo } from "./styles";
import useAuth from '../../hooks/useAuth';
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Login = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
 
        if (!email | !senha) {
            toast.warn("Preecha todos os campos!");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }else{
            navigate("/home");
        }
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
                    <p>Não possui conta? <Link style={{color:"#02b3d4"}} >WhatSapp</Link></p>
                    <FloatingWhatsApp 
                      phoneNumber='94992565280'
                      avatar='./images/LogoEmpresa.png'
                      accountName='ACThauros'
                      statusMessage='Sistemas de Gestão Comercial'
                      chatMessage='Agradece seu contato. Como podemos ajudar?'
                      placeholder='Digite uma mensagem'
                      
                    />
                </div>
                 <h6>Versão: 0.1.98</h6>
            </From>
           <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </Container>
    );
};

export default Login;