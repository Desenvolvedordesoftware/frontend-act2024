import React, { useState } from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
import { url } from "../../function/FunctionR";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import ListBox from "./Box/ListBox";
import ListToPay from "./BillsToPay/ListToPay";
import ListToReceive from "./BillsToReceive/ListToReceive";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Financial = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const CodCompany = usersStorage.map((user) => user.CodCompany);
    const [box, setBox] = useState([]);
    const [totalDinheiro, setTotalDinheiro] = React.useState([0]);
    const [totalPix, setTotalPix] = React.useState([0]);
    const [totalCredito, setTotalCredito] = React.useState([0]);
    const [totalDebito, setTotalDebito] = React.useState([0]);
    const [totalAprazo, setTotalAprazo] = React.useState([0]);
    const [totalChAp, setTotalChAp] = React.useState([0]);

    const [totalSaidas, setTotalSaidas] = React.useState([0]);
    const [totalEntradas, setTotalEntradas] = React.useState([0]);

    function adicionaZero(numero) {
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    }
    let dataAtual = new Date();
    let dataAtualFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "-" + adicionaZero(dataAtual.getDate().toString()));

    const [data, setData] = useState(dataAtualFormatada);
    const [openL, setOpenL] = React.useState(false);

    const handleClose = () => {
        setOpenL(false);
    };
    const handleOpen = () => {
        setOpenL(true);
    };

    const getBox = async () => {
        handleOpen();
        setBox([]);
        setTotalDinheiro(0);
        setTotalPix(0);
        setTotalCredito(0);
        setTotalDebito(0);
        setTotalAprazo(0);
        setTotalChAp(0);
        setTotalEntradas(0);
        setTotalSaidas(0);

        try {
            const res = await axios.get(url + "/box/" + CodCompany + "/" + data);
            if (res.data.length === 0) {
                setBox([]);
                handleClose();
                return toast.warn("Não foi encotrado movimentações!");
            } else {
                setBox(res.data.stmt.sort((a, b) => (a.box > b.box ? 1 : -1)));
                handleClose();
            }
        } catch (error) {
            toast.error(error);
        };
        
        await axios.get(url + "/box/sumbox/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

            response.data.map((dados) => {
                setTotalDinheiro(dados.venda_dinheiro === null ? 0 : dados.venda_dinheiro);
                setTotalPix(dados.venda_pix === null ? 0 : dados.venda_pix);
                setTotalCredito(dados.venda_cartaocred === null ? 0 : dados.venda_cartaocred);
                setTotalDebito(dados.venda_cartaodeb === null ? 0 : dados.venda_cartaodeb);
                setTotalAprazo(dados.venda_crediario === null ? 0 : dados.venda_crediario);
                setTotalChAp(dados.venda_chequeap === null ? 0 : dados.venda_chequeap);

                setTotalEntradas(dados.total_entrada === null ? 0 : dados.total_entrada);
                setTotalSaidas(dados.total_saida === null ? 0 : dados.total_saida);
            })
        })
            .catch(async function (response) {
                toast.error(response);
            });
     handleClose();
    };

    return (
        <div style={{overflow:"auto"}}>
            <Menu>
                <ContentPage caminho={[{ nome: "Financeiro", link: "/financial" }]}>
                    <Box >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={4} >
                                <ListBox
                                    box={box} setBox={setBox} getBox={getBox}
                                    setData={setData} data={data}
                                    totalDinheiro={totalDinheiro}
                                    totalPix={totalPix}
                                    totalCredito={totalCredito}
                                    totalDebito={totalDebito}
                                    totalAprazo={totalAprazo}
                                    totalChAp={totalChAp}
                                    totalEntradas={totalEntradas}
                                    totalSaidas={totalSaidas}
                                    openL={openL}
                                />
                                <ListToPay />
                                <ListToReceive />
                            </Grid>
                        </Grid>
                    </Box>
                </ContentPage>
            </Menu> 
          <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </div>
    );
};

export default Financial;