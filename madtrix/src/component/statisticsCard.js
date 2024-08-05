import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 12, // Apply margin on all sides of the icon container
  minWidth: 60, // Adjust based on icon size
  backgroundColor: 'white', // Set background color to white
  borderRadius: '2px', // Optional: round the container
  padding: 8, // Optional: add some padding
});

const ContentContainer = styled(Box)({
  flex: 1,
});

const StatisticsCard = ({ title, value, percentage, description, icon: IconComponent }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f7ecea' }}>
      <IconContainer>
        {IconComponent && <IconComponent style={{ fontSize: 24, color: '#bc8374' }} />} {/* Adjusted icon color */}
      </IconContainer>
      <CardContent sx={{ flex: 1 }}>
        <ContentContainer>
          <Typography variant="h6" sx={{ fontSize: '0.75rem' }}>{title}</Typography> {/* Smaller font size for title */}
          <Typography variant="h4" sx={{ fontSize: '1rem' }}>{value}</Typography> {/* Smaller font size for value */}
          <Typography color="textSecondary" sx={{ fontSize: '0.75rem' }}>{percentage} {description}</Typography> {/* Smaller font size for percentage and description */}
        </ContentContainer>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
