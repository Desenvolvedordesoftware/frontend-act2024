import * as React from 'react';
import ContentPage from "../../components/Content/ContentPage";
import { url } from "../../function/FunctionR";
import axios from "axios";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Menu from "../../components/Menu/Menu";
import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";
import ListProducts from "./Products/ListProducts";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Stock = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));
    const CodCompany = usersStorage.map((user) => user.CodCompany);
    const [box, setBox] = React.useState([]);
    const [loc, setLoc] = React.useState();

    const getBox = async () => {
        try {
            const res = await axios.get(url + "/stock/productslist/" + CodCompany + "/?loc=" + (loc === undefined ? '%': loc));
            console.log(res)
            if (res.data.length === 0) {
                setBox([])
                return toast.warn("Não foi encotrado produto!");
            } else {
                setBox(res.data);
            }
        } catch (error) {
            toast.error(error);
        }
        
        console.log(box)
    }

    return (
        <div style={{ overflow: "auto" }}>
            <Menu>
                <ContentPage caminho={[{ nome: "Estoque", link: "/stock" }]}>
                    <Box>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={6} md={4} >
                                <ListProducts
                                    box={box}
                                    setBox={setBox}
                                    getBox={getBox}
                                    setLoc={setLoc}
                                    loc={loc}
                                />
                                <PageUnderConstruction
                                    Text={"Nota Fiscal de Entrada"}
                                />
                                <PageUnderConstruction
                                    Text={"Baixar Estoque"}
                                />
                                <PageUnderConstruction
                                    Text={"Grupos e Subgrupos"}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </ContentPage>
            </Menu>
            <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </div>
    );
};

export default Stock;