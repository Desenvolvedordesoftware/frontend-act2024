import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { Div } from '../../styles/stylesHome';

export default function ChartSalesDay({ 
  totalDinheiro, 
  totalPix, 
  totalCredito, 
  totalDebito, 
  totalAprazo, 
  totalChAp }) {

  const data = [
    { label: 'Dinheiro', value: parseFloat(totalDinheiro) },
    { label: 'Pix', value: parseFloat(totalPix) },
    { label: 'Cart. C', value: parseFloat(totalCredito) },
    { label: 'Cart. D', value: parseFloat(totalDebito) },
    { label: 'Aprazo', value: parseFloat(totalAprazo) },
    { label: 'Ch. Ap', value: parseFloat(totalChAp) },
  ];
  function adicionaZero(numero) {
    if (numero <= 9)
      return "0" + numero;
    else
      return numero;
  }
  let dataAtual = new Date();
  let dataFormatada = ((adicionaZero(dataAtual.getMonth() + 1).toString()) + "/" + (dataAtual.getFullYear()));

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    fontFamily: "fantasy"
  }));
  const size = {
    width: 350,
    height: 200,
  };
  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <Div>
    <PieChart
      series={[
        {
          startAngle: -100,
          endAngle: 360,
          data,
          arcLabel: getArcLabel,
          innerRadius: 50,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 12
        },
      }}
      height={200}
      {...size}
    >
      <PieCenterLabel>{dataFormatada}</PieCenterLabel>
    </PieChart>
    </Div>
  );
}
