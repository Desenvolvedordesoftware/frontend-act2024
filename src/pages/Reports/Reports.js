import ContentPage from "../../components/Content/ContentPage";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Menu from "../../components/Menu/Menu";
import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";

const Reports = () => {
    return (
        <div style={{overflow:"auto"}}> 
        <Menu>
        <ContentPage caminho={[{nome: "Relatórios", link: "/reports"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        <Grid xs={12} sm={6} md={4} >
                            <PageUnderConstruction
                            Text={"Clientes"}
                            />
                        </Grid>    
                        <Grid xs={12} sm={6} md={4} >
                            <PageUnderConstruction
                            Text={"Fornecedores"}
                            />
                        </Grid>
                        <Grid xs={12} sm={6} md={4} >
                            <PageUnderConstruction
                            Text={"Ordem de Serviço"}
                            />
                        </Grid>    
                        <Grid xs={12} sm={6} md={4} >   
                            <PageUnderConstruction
                            Text={"Produtos"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >    
                            <PageUnderConstruction
                            Text={"DRE"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >    
                            <PageUnderConstruction
                            Text={"Etiquetas"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >    
                            <PageUnderConstruction
                            Text={"Fluxo de Caixa"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >     
                            <PageUnderConstruction
                            Text={"Caixa"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >     
                            <PageUnderConstruction
                            Text={"Vendas"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >     
                            <PageUnderConstruction
                            Text={"Contas a Receber"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >    
                            <PageUnderConstruction
                            Text={"Contas a Pagar"}
                            />
                        </Grid>    
                         <Grid xs={12} sm={6} md={4} >     
                            <PageUnderConstruction
                            Text={"Rel. Tec. Serviço"}
                            />
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
        </Menu> 
        </div>
    );
};

export default Reports;