import ContentPage from "../../components/Content/ContentPage";
import Menu from "../../components/Menu/Menu";
/*import {
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    RadialBarChart, RadialBar
} from 'recharts';*/
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    Container,
    Typography,
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";
import { BarChart } from '@mui/x-charts/BarChart';

////////////////////////////////////////
const chartSetting = {
    xAxis: [
      {
        label: 'Valor R$ 1.415,00',
      },
    ],
    width: 400,
    height: 300,
  };

  const chartSettingV = {
    xAxis: [
      {
        label: 'Valor R$ 188,00',
      },
    ],
    width: 400,
    height: 300,
  };

  const data = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 210,
      month: 'Dinh',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Pix',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'C.D',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'C.C',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Ap',
    },
  ];

  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Abr',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'Mai',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'Jun',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'Jul',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Ago',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Set',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Out',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value: number) => `R$ ${value}`;

const Home = () => {
    return (
        <>
        <Menu>
        <ContentPage titulo="Dashboard" caminho={[{ nome: "Dashboard", link: "/" }]}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Grid container direction="column" padding={1} spacing={2}>

                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Entradas</Typography>
                                <Typography style={{ color: "#000" }} variant='h6'>R$ 4.786.45</Typography>
                            </Div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Saídas</Typography>
                                <Typography style={{ color: "red" }} variant='h6'>R$ 2.286.35</Typography>
                            </Div>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                            <Div  style={{ padding: "10px"}}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Saldo</Typography>
                                <Typography style={{ color: "#161b" }} variant='h6'>R$ 2.500,10</Typography>
                            </Div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            
            <Div style={{overflow:"auto"}}>
                <Container >
                    <Grid >

                        <Grid container item direction="row" spacing={1}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por mês</Typography>
                                <BarChart
                                dataset={dataset}
                                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                series={[{ dataKey: 'seoul', label: '2023', valueFormatter }]}
                                layout="horizontal"
                                {...chartSetting}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por forma de pagamento</Typography>
                                <BarChart
                                dataset={data}
                                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                series={[{ dataKey: 'seoul', label: '2023', valueFormatter }]}
                                layout="horizontal"
                                {...chartSettingV}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Div>
        </ContentPage>
        </Menu>
        
        <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
        </>
    );
};

export default Home;