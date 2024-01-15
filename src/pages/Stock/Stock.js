import ContentPage from "../../components/Content/ContentPage";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Menu from "../../components/Menu/Menu";
import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";
import ListProducts from "./Products/ListProducts";

const Stock = () => {
    return (
        <> <Menu>
        <ContentPage caminho={[{nome: "Estoque", link: "/stock"}]}>
                <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >
                            <ListProducts/>
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
        </Menu> </>
    );
};

export default Stock;