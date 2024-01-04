import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';


const data = [
  { label: 'Dinheiro', value: 400, color: '#0088FE' },
  { label: 'Pix', value: 300, color: '#00C49F' },
  { label: 'C. Credito', value: 300, color: '#FFBB28' },
  { label: 'C. Debito', value: 200, color: '#FF8042' },
  { label: 'Aprazo', value: 325, color: 'rgb(207, 205, 205)' },
];

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};
const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 16,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function ChartSalesDay() {
  return (
    <PieChart
      series={[
        {
          startAngle: -100,
          endAngle: 360,
          data,
          arcLabel: getArcLabel,
          innerRadius: 50
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 12,
        },
      }}
      height={200}
    >
      <PieCenterLabel>Hoje</PieCenterLabel>
    </PieChart>
  );
}
