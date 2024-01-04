import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';


const data = [
  { label: 'Jan', value: 12400 },
  { label: 'Fev', value: 11300 },
  { label: 'Mar', value: 10300 },
  { label: 'Abr', value: 9200  },
  { label: 'Mai', value: 8125  },
  { label: 'Jun', value: 7217  },
  { label: 'Jul', value: 6326  },
  { label: 'Ago', value: 5435  },
  { label: 'Set', value: 4544  },
  { label: 'Out', value: 3653  },
  { label: 'Mov', value: 2762  },
  { label: 'Dez', value: 1871  },
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

export default function ChartSalesYear() {
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
      <PieCenterLabel>Ano</PieCenterLabel>
    </PieChart>
  );
}
