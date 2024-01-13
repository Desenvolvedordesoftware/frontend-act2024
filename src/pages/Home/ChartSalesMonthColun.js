import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';



export default function ChartSalesMonthColun({ totalDinheiro, totalPix, totalCredito, totalDebito, totalAprazo }) {
    const chartSetting = {
        yAxis: [
          {
            label: 'rainfall (R$)',
          },
        ],
        width: 800,
        height: 250,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-30px, 0)',
          },
        },
      };
      const dataset = [
          {
          dinheiro: parseFloat(totalDinheiro),
          pix: parseFloat(totalPix),
          credito: parseFloat(totalCredito),
          debito: parseFloat(totalDebito),
          aprazo: parseFloat(totalAprazo),
          month: 'Janeiro',
          },
      ];
      
      const valueFormatter = (value: number) => `${Intl.NumberFormat('pt-br',
      {
          style: 'currency',
          currency: 'BRL'
      }).format(
          value
      )}`;
      
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'dinheiro', label: 'Dinheiro', valueFormatter },
        { dataKey: 'pix', label: 'Pix', valueFormatter },
        { dataKey: 'credito', label: 'C.Credito', valueFormatter },
        { dataKey: 'debito', label: 'C.Debito', valueFormatter },
        { dataKey: 'aprazo', label: 'Aprazo', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
