import ContentPage from "../../components/Content/ContentPage";
import {
    BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    RadialBarChart, RadialBar
} from 'recharts';


import {
    Container,
    Typography,
    Grid,
} from '@mui/material';
import { Div } from "../../styles/stylesHome";

const dataV = [
    { name: "Jan", value: 1100 },
    { name: "Fev", value: 3911 },
    { name: "Mar", value: 5120 },
    { name: "Abr", value: 4913 },
    { name: "Mai", value: 6140 },
    { name: "Jun", value: 2915 },
    { name: "Jul", value: 1160 },
    { name: "Ago", value: 917 },
    { name: "Set", value: 7180 },
    { name: "Out", value: 2919 },
    { name: "Nov", value: 9200 },
    { name: "Dez", value: 10921 },
]

const data = [
    {
        name: 'Dinheiro',
        value: 950,
        fill: '#82ca9d',
    },
    {
        name: 'Pix',
        value: 1400,
        fill: '#83a6ed',
    },
    {
        name: 'Cartão débito',
        value: 800,
        fill: '#8dd1e1',
    },
    {
        name: 'Cartão crédito',
        value: 1300,
        fill: '#a4de6c',
    },
    {
        name: 'Aprazo',
        value: 1800,
        fill: '#8884d8',
    },
];

const style = {
    top: '50%',
    right: 80,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
    
};

const Home = () => {
    return (
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
                    <Grid container direction="column" padding={1} spacing={2}>

                        <Grid container item direction="row" spacing={5}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por mês</Typography>
                                <BarChart
                                    width={450}
                                    height={300}
                                    fonte-barSize={10}
                                    data={dataV}
                                    margin={{
                                        top: 5,
                                        right: 15,
                                        left: -20,
                                        bottom: 5,
                                    }}
                                    
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#82ca9d" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                </BarChart>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <Typography style={{ color: "#02b3d4" }} variant='h6'>Vendas por forma de pagamento</Typography>
                                <RadialBarChart
                                    width={500}
                                    height={300}
                                    cx={150}
                                    cy={150}
                                    innerRadius={20}
                                    outerRadius={140}
                                    barSize={10}
                                    data={data}
                                >
                                    <RadialBar
                                        minAngle={15}
                                        label={{ position: "insideStart", fill: "#fff" }}
                                        background
                                        clockWise
                                        dataKey="value"
                                    />
                                    <Legend
                                        iconSize={10}
                                        width={140}
                                        height={140}
                                        layout="vertical"
                                        verticalAlign="middle"
                                        wrapperStyle={style}
                                    />
                                </RadialBarChart>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Div>
        </ContentPage>
    );
};

export default Home;