import ContentPage from "../../components/Content/ContentPage";
import {
    Button,
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Menu from "../../components/Menu/Menu";

const Settings = () => {
    return (
        <> <Menu>
        <ContentPage titulo="Configurações" caminho={[{nome: "Configurações", link: "/settings"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Empresa
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Sobre
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Gerenciar
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Mudar senha
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Licença
                            </Button>
                            <Button style={{margin:"5px", width:"300px"}} component="label" variant="contained" startIcon={<AssignmentIndIcon />}>
                                Configurações
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
        </Menu> </>
    );
};

export default Settings;