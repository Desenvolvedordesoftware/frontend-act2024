import * as React from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import { url } from "../../function/FunctionR";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import ChartSalesDay from './ChartSalesDay';
import ChartSalesMonthColun from './ChartSalesMonthColun';

import {
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";

const Home = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const CodCompany = usersStorage.map((user) => user.CodCompany);
    const [totalDinheiro, setTotalDinheiro] = React.useState([0]);
    const [totalPix, setTotalPix] = React.useState([0]);
    const [totalCredito, setTotalCredito] = React.useState([0]);
    const [totalDebito, setTotalDebito] = React.useState([0]);
    const [totalAprazo, setTotalAprazo] = React.useState([0]);
    const [totalChAp, setTotalChAp] = React.useState([0]);

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
    let dataIFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "-" +  "01");
    let dataFFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "-" +  adicionaZero(dataAtual.getDate().toString()));

    const dataI = React.useState(dataIFormatada);
    const dataF = React.useState(dataFFormatada);
    
    async function getSalesForm() {
        handleOpen();
        await axios.get(url + "/box/sumbox/" + CodCompany + "/" + dataI + "/" + dataF).then(async function (response) {

            response.data.map((dados) => {
                setTotalDinheiro(dados.venda_dinheiro === null ? 0 : dados.venda_dinheiro);
                setTotalPix(dados.venda_pix === null ? 0 : dados.venda_pix);
                setTotalCredito(dados.venda_cartaocred === null ? 0 : dados.venda_cartaocred);
                setTotalDebito(dados.venda_cartaodeb === null ? 0 : dados.venda_cartaodeb);
                setTotalAprazo(dados.venda_crediario === null ? 0 : dados.venda_crediario);
                setTotalChAp(dados.venda_chequeap === null ? 0 : dados.venda_chequeap);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
     handleClose();
    }

    React.useEffect(() => {
        getSalesForm();
    }, []);

    return (
        <>
            <Menu>
                <ContentPage caminho={[{ nome: "Dashboard", link: "/" }]}>
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
                                    totalChAp={totalChAp}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} >
                               
                                <ChartSalesMonthColun 
                                    totalDinheiro={totalDinheiro}
                                    totalPix={totalPix}
                                    totalCredito={totalCredito}
                                    totalDebito={totalDebito}
                                    totalAprazo={totalAprazo}
                                    totalChAp={totalChAp}
                                     />
                             
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