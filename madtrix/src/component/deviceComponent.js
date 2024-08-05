import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

const data = [
  { value: 20, label: 'D', color: '#c08677' },
  { value: 15, label: 'C', color: '#f1f1ed' },
  { value: 10, label: 'B', color: '#e6ccc0' },
  { value: 5, label: 'A', color: '#debcaa' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[{
        data: data.map(d => ({ ...d, color: d.color })),
        innerRadius: 80,
      }]}
      {...size}
    >
      <PieCenterLabel>1223 Total User</PieCenterLabel>
    </PieChart>
  );
}

function DevicesComponent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Top 5 Devices</Typography>
        <PieChartWithCenterLabel />
      </CardContent>
    </Card>
  );
}

export default DevicesComponent;
