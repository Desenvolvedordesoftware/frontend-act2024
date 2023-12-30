import ContentPage from "../../components/Content/ContentPage";
import { useEffect, useState } from "react";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import ListBox from "./Box/ListBox";
import ListToPay from "./BillsToPay/ListToPay";
import ListToReceive from "./BillsToReceive/ListToReceive";
import { url } from "../../function/FunctionR";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Financial = () => {
    const [box, setBox] = useState([]);

    const getBox = async () => {
        try {
          const res = await axios.get(url+"/box");
          setBox(res.data.sort((a, b) => (a.box > b.box ? 1 : -1)));
        } catch (error) {
          toast.error(error);
        }
    };
    
      useEffect(() => {
        getBox();
      }, [setBox]);

    return (
        <ContentPage titulo="Financeiro"  caminho={[{nome: "Financeiro", link: "/financial"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >
                          <ListBox box={box} setBox={setBox}/>
                          <ListToPay/>
                          <ListToReceive/>
                        </Grid>
                    </Grid>
            </Box>
                
             <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </ContentPage>
    );
};

export default Financial;