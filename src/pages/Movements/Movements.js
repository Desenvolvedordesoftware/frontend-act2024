import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";

const Movements = () => {
    return (
        <>
        <Menu>
        <ContentPage caminho={[{nome: "Movimentos", link: "/movements"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                        <PageUnderConstruction
                        Text={" Ordem de Serviço"}
                        />
                        <PageUnderConstruction
                        Text={"NFe - Nota Fiscal Eletrônica"}
                        />
                        <PageUnderConstruction
                        Text={"Vendas"}
                        />
                        <PageUnderConstruction
                        Text={"Notas de Vendas"}
                        />
                        <PageUnderConstruction
                        Text={"Orçamentos"}
                        />   
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
        </Menu>
        </>
    );
};

export default Movements;