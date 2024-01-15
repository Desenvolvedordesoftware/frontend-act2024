import ContentPage from "../../components/Content/ContentPage";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Menu from "../../components/Menu/Menu";
import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";

const Register = () => {
    return (
        <> <Menu>
        <ContentPage caminho={[{ nome: "Cadastro", link: "/register" }]}>
           <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                            <PageUnderConstruction
                            Text={"Clientes"}
                            />
                            <PageUnderConstruction
                            Text={"Fornecedores"}
                            />
                            <PageUnderConstruction
                            Text={"Plano de contas"}
                            />
                            <PageUnderConstruction
                            Text={"Funcionários"}
                            />
                            <PageUnderConstruction
                            Text={"Marca / Fabricante"}
                            />
                            <PageUnderConstruction
                            Text={"Transportadora"}
                            />
                            <PageUnderConstruction
                            Text={"Pagamentos"}
                            />
                            <PageUnderConstruction
                            Text={"Serviços"}
                            />
                            <PageUnderConstruction
                            Text={"Operadores de caixa"}
                            />
                        </Grid>
                    </Grid>
                </Box>    
        </ContentPage>
        </Menu> </>
    );
};

export default Register;