import ContentPage from "../../components/Content/ContentPage";
import {
    Button,
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Menu from "../../components/Menu/Menu";

const Register = () => {
    return (
        <> <Menu>
        <ContentPage titulo="Cadastro" caminho={[{ nome: "Cadastro", link: "/register" }]}>
           <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Clientes
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Fornecedores
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Plano de contas
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Funcionários
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Marca / Fabricante
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Transportadora
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Pagamentos
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Serviços
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Operadores de caixa
                            </Button>
                        </Grid>
                    </Grid>
                </Box>    
        </ContentPage>
        </Menu> </>
    );
};

export default Register;