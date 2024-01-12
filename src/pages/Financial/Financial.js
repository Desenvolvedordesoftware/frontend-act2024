import React, { useState, useEffect } from 'react';
import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
import { url } from "../../function/FunctionR";
import { CodCompany } from '../../contexts/auth';
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
    const [box, setBox] = useState([]); 
    const [totalDinheiro, setTotalDinheiro] = React.useState([]);
    const [totalPix, setTotalPix] = React.useState([]);
    const [totalCredito, setTotalCredito] = React.useState([]);
    const [totalDebito, setTotalDebito] = React.useState([]);
    const [totalAprazo, setTotalAprazo] = React.useState([]);

    const [totalSaidas, setTotalSaidas] = React.useState([]);

    function adicionaZero(numero){
      if (numero <= 9) 
          return "0" + numero;
      else
          return numero; 
      }
      let dataAtual = new Date(); 
      let dataAtualFormatada = (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "-" + adicionaZero(dataAtual.getDate().toString()));

    const [data, setData] = useState(dataAtualFormatada);

    
    const getBox = async () => {
        try {
          const res = await axios.get(url+"/box/"+CodCompany+"/"+data);
        if(res.data.length === 0){
            console.log(box);
            setBox([])
            return toast.warn("Não foi encotrado movimentações!");
        }else{
            setBox(res.data.stmt.sort((a, b) => (a.box > b.box ? 1 : -1)));
        }
        } catch (error) {
          toast.error(error);
        }
        await axios.get(url + "/box/salesformdin/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalDinheiro(dados.DINHEIRO === null ? 0 : dados.DINHEIRO);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
      await axios.get(url + "/box/salesformpix/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalPix(dados.PIX === null ? 0 : dados.PIX);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
      await axios.get(url + "/box/salesformccr/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalCredito(dados.C_CREDITO === null ? 0 : dados.C_CREDITO);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
      await axios.get(url + "/box/salesformcde/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalDebito(dados.C_DEBITO === null ? 0 : dados.C_DEBITO);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
      await axios.get(url + "/box/salesformapz/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalAprazo(dados.APRAZO === null ? 0 : dados.APRAZO);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
      await axios.get(url + "/box/salesexits/" + CodCompany + "/" + data + "/" + data).then(async function (response) {

          response.data.map((dados) => {

              setTotalSaidas(dados.SAIDAS === null ? 0 : dados.SAIDAS);
          })
      })
          .catch(async function (response) {
              toast.error(response);
          });
    };
    
      useEffect(() => {
        getBox();
      },[]);

    return (
    <>
      <Menu>
        <ContentPage titulo="Financeiro"  caminho={[{nome: "Financeiro", link: "/financial"}]}>
            <Box >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                          <ListBox 
                          box={box} setBox={setBox} getBox={getBox} 
                          setData={setData} data={data} 
                          totalDinheiro={totalDinheiro}
                          totalPix={totalPix}
                          totalCredito={totalCredito}
                          totalDebito={totalDebito}
                          totalAprazo={totalAprazo}
                          totalSaidas={totalSaidas}
                          />
                          <ListToPay/>
                          <ListToReceive/>
                        </Grid>
                    </Grid>
            </Box>
        </ContentPage>
        </Menu>
        </>
    );
};

export default Financial;