import ContentPage from "../../components/Content/ContentPage";
import {
    Button,
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Movements = () => {
    return (
        <ContentPage titulo="Movimentos" caminho={[{nome: "Movimentos", link: "/movements"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} >
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Ordem de Serviço
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                NFe - Nota Fiscal Eletrônica
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Vendas
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Notas de Vendas
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Orçamentos
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
    );
};

export default Movements;