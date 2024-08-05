import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MostVisitedSections = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Most visited sections</Typography>
        <Typography>Cadaver Sections: Users 1246 | Sessions 2345</Typography>
        <Typography>Quiz: Users 1246 | Sessions 2345</Typography>
      </CardContent>
    </Card>
  );
};

export default MostVisitedSections;
