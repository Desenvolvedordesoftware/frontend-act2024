import ContentPage from "../../components/Content/ContentPage";
import {
    Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import Menu from "../../components/Menu/Menu";

import PageUnderConstruction from "../../components/PageCont/PageUnderConstruction";

const Settings = () => {
    return (
        <> <Menu>
        <ContentPage caminho={[{nome: "Configurações", link: "/settings"}]}>
            <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={8} >
                            <PageUnderConstruction
                            Text={"Empresa"}
                            />
                            <PageUnderConstruction
                            Text={"Sobre"}
                            />
                            <PageUnderConstruction
                            Text={"Gerenciar"}
                            />
                            <PageUnderConstruction
                            Text={"Mudar senha"}
                            />
                            <PageUnderConstruction
                            Text={"Licença"}
                            />
                            <PageUnderConstruction
                            Text={"Configurações"}
                            />
                        </Grid>
                    </Grid>
                </Box>
        </ContentPage>
        </Menu> </>
    );
};

export default Settings;