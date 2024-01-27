import * as React from 'react';
import { Div } from "../../styles/stylesHome";
import {
  Typography,
  Grid,
} from '@mui/material';

export default function ChartSalesMonthColun({ totalDinheiro, totalPix, totalCredito, totalDebito, totalAprazo, totalChAp }) {

  let Dinheiro = parseFloat(totalDinheiro) ; 
  let Pix = parseFloat(totalPix);
  let Credito = parseFloat(totalCredito);
  let Debito = parseFloat(totalDebito);
  let Aprazo = parseFloat(totalAprazo);
  let ChAp = parseFloat(totalChAp);
  let TotalG = Dinheiro+ Pix+ Credito+ Debito+ Aprazo+ ChAp;


  return (
    <div style={{ gap: "5px" }} > 
      <Typography style={{ color: "#02b3d4" }} >Resumo do caixa</Typography>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <Grid container direction="column" padding={1} spacing={2}>

                            <Grid container item direction="row" spacing={1}>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px" }} >Vendas Dinheiro</Typography>
                                        <Typography style={{ color: "#000", fontSize:"12px" }} >
                                            {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  Dinheiro
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >Vendas Pix</Typography>
                                        <Typography style={{ color: "000", fontSize:"12px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  Pix
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4" , fontSize:"12px" }} >Vendas C. Credito</Typography>
                                        <Typography style={{ color: "#000", fontSize:"12px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  Credito
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >Vendas C. Debito</Typography>
                                        <Typography style={{ color: "#000", fontSize:"12px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  Debito
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >Vendas Aprazo</Typography>
                                        <Typography style={{ color: "#000", fontSize:"12px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  Aprazo
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >Vendas Deposito/Transf</Typography>
                                        <Typography style={{ color: "#000", fontSize:"12px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  ChAp
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                                <Grid item xs={12} sm={8} md={4}>
                                    <Div style={{ padding: "8px" }}>
                                        <Typography style={{ color: "#02b3d4", fontSize:"12px"  }} >Total Vendas</Typography>
                                        <Typography style={{ color: "#000", fontSize:"16px"  }} >
                                        {Intl.NumberFormat('pt-br',
                                                {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                }).format(
                                                  TotalG
                                                )}
                                        </Typography>
                                    </Div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    
                    </div>
  );
}
