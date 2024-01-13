import * as React from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import { url } from "../../function/FunctionR";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import ChartSalesDay from './ChartSalesDay';
import ChartSalesMonthColun from './ChartSalesMonthColun';

import {
    Typography,
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";

export const Th = styled.div`

  @media (max-width: 700px) {
    ${(props) => props.onlyWeb && "display: none"}  
  }
`;

const Home = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const CodCompany = usersStorage.map((user) => user.CodCompany);
    const [totalDinheiro, setTotalDinheiro] = React.useState([]);
    const [totalPix, setTotalPix] = React.useState([]);
    const [totalCredito, setTotalCredito] = React.useState([]);
    const [totalDebito, setTotalDebito] = React.useState([]);
    const [totalAprazo, setTotalAprazo] = React.useState([]);

    const [totalSaidas, setTotalSaidas] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
    setOpen(false);
    };
    const handleOpen = () => {
    setOpen(true);
    };

    function adicionaZero(numero) {
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    }
    let dataAtual = new Date();
    let dataIFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "-" + "01");
    let dataFFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "-" + "31");

    const dataI = React.useState(dataIFormatada);
    const dataF = React.useState(dataFFormatada);
    
    async function getSalesFormDin() {
        setTotalDinheiro([0]);
        setTotalPix([0]);
        setTotalCredito([0]);
        setTotalDebito([0]);
        setTotalAprazo([0]);
    
        setTotalSaidas([0]);

        await axios.get(url + "/box/salesformdin/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalDinheiro(dados.DINHEIRO === null ? 0 : dados.DINHEIRO);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
        await axios.get(url + "/box/salesformpix/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalPix(dados.PIX === null ? 0 : dados.PIX);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
        await axios.get(url + "/box/salesformccr/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalCredito(dados.C_CREDITO === null ? 0 : dados.C_CREDITO);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
        await axios.get(url + "/box/salesformcde/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalDebito(dados.C_DEBITO === null ? 0 : dados.C_DEBITO);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
        await axios.get(url + "/box/salesformapz/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalAprazo(dados.APRAZO === null ? 0 : dados.APRAZO);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
        await axios.get(url + "/box/salesexits/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {

                setTotalSaidas(dados.SAIDAS === null ? 0 : dados.SAIDAS);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
            handleClose();
    }

    React.useEffect(() => {
        getSalesFormDin();
        handleOpen();
    }, []);
 
   let Entradas = parseFloat(totalDinheiro) +
   parseFloat(totalPix) +
   parseFloat(totalCredito) +
   parseFloat(totalDebito) +
   parseFloat(totalAprazo);

   let Saidas = parseFloat(totalSaidas);

   let Saldo = Entradas - Saidas;


    return (
        <>
            <Menu>
                <ContentPage caminho={[{ nome: "Dashboard", link: "/" }]}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Grid container direction="column" padding={1} spacing={2}>

                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Entradas</Typography>
                                        <Typography style={{ color: "#000" }} >
                                            {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                    Entradas
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Saídas</Typography>
                                        <Typography style={{ color: "red" }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                    Saidas
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Saldo</Typography>
                                        <Typography style={{ color: "#161b" }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                    Saldo
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                    </div>
                    <Div style={{ overflow: "auto", padding: "10px" }}>
                        <Grid container item direction="row" spacing={1} marginRight={-5}>
                            <Grid item xs={12} sm={12} md={4} >
                                <h1 style={{ color: "#02b3d4", marginLeft: "35px", fontSize: "16px" }} >Vendas por forma de pagamento</h1>
                                <ChartSalesDay
                                    totalDinheiro={totalDinheiro}
                                    totalPix={totalPix}
                                    totalCredito={totalCredito}
                                    totalDebito={totalDebito}
                                    totalAprazo={totalAprazo}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} >
                                <Th onlyWeb>
                                <ChartSalesMonthColun 
                                    totalDinheiro={totalDinheiro}
                                    totalPix={totalPix}
                                    totalCredito={totalCredito}
                                    totalDebito={totalDebito}
                                    totalAprazo={totalAprazo} />
                                </Th>
                            </Grid>
                        </Grid>
                    </Div>
                </ContentPage>
            </Menu>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5}}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </>
    );
};

export default Home;