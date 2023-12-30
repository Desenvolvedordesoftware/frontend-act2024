import ContentPage from "../../components/Content/ContentPage";
import {
    Button,
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Reports = () => {
    return (
        <ContentPage titulo="Relatórios" caminho={[{nome: "Relatórios", link: "/reports"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Clientes
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Fornecedores
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Ordem de Serviço
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Produtos
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                DRE
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Etiquetas
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Fluxo de Caixa
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Caixa
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Vendas
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Contas a Receber
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Contas a Pagar
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Rel. Tec. Serviço
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
    );
};

export default Reports;