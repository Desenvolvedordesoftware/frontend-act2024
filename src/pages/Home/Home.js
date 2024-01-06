import * as React from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ChartSalesDay from './ChartSalesDay';

import {
    Typography,
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";

const Home = () => {
    return (
        <>
            <Menu>
                <ContentPage titulo="Dashboard" caminho={[{ nome: "Dashboard", link: "/" }]}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Grid container direction="column" padding={1} spacing={2}>

                            <Grid container item direction="row" spacing={2}>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Entradas</Typography>
                                        <Typography style={{ color: "#000" }} >R$ 4.786.45</Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Saídas</Typography>
                                        <Typography style={{ color: "red" }} >R$ 2.286.35</Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "10px" }}>
                                        <Typography style={{ color: "#02b3d4" }} >Saldo</Typography>
                                        <Typography style={{ color: "#161b" }} >R$ 2.500,10</Typography>
                                    </Div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <Div style={{ overflow: "auto", padding: "10px" }}>
                        <Grid container item direction="row" spacing={1} marginLeft={-5}>
                            <Grid item xs={12} sm={6} md={4} >
                                <h1 style={{ color: "#02b3d4", marginLeft: "35px", fontSize:"16px" }} >Vendas por forma de pagamento</h1>
                                <ChartSalesDay />
                            </Grid>
                        </Grid>
                    </Div>
                </ContentPage>
            </Menu>

            <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </>
    );
};

export default Home;