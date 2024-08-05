import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography } from '@mui/material';

// Define colors
const HIGH_COLOR = '#e0bcab';
const LOW_COLOR = '#e6ccc0';

// Prepare data with colors
const data = [
  { data: [35, 44, 24, 34, 50, 60, 45, 55, 33, 40, 70, 85], color: LOW_COLOR },
  { data: [51, 6, 49, 30, 40, 55, 60, 70, 80, 65, 75, 90], color: HIGH_COLOR },
];

const AudienceMetricsGraph = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Audiences Metrics</Typography>
        <BarChart
          series={data}
          height={290}
          xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          barColor={(seriesIndex, dataIndex) =>
            data[seriesIndex].color
          }
        />
      </CardContent>
    </Card>
  );
};

export default AudienceMetricsGraph;
