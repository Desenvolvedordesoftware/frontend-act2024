import * as React from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ChartSalesDay from './ChartSalesDay';
import ChartSalesYear from './ChartSalesYear';

import {
    Container,
    Typography,
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";

const Home = () => {
    return (
        <>
        <Menu>
        <ContentPage titulo="Dashboard" caminho={[{ nome: "Dashboard", link: "/" }]}>
            <div style={{display:"flex", justifyContent:"space-between" }}>
                <Grid container direction="column" padding={1} spacing={2}>

                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Entradas</Typography>
                                <Typography style={{ color: "#000" }} variant='h6'>R$ 4.786.45</Typography>
                            </Div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Saídas</Typography>
                                <Typography style={{ color: "red" }} variant='h6'>R$ 2.286.35</Typography>
                            </Div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div  style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Saldo</Typography>
                                <Typography style={{ color: "#161b" }} variant='h6'>R$ 2.500,10</Typography>
                            </Div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            
            <Div style={{overflow:"auto" }}>
                <Container style={{ marginLeft:"0"}}>
                    <Grid >

                        <Grid container item direction="row" spacing={1} marginLeft={-3} padding={0}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por ano</Typography>
                                 <ChartSalesYear/>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} >
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por forma de pagamento</Typography>
                                <ChartSalesDay />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Div>
        </ContentPage>
        </Menu>
        
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </>
    );
};

export default Home;