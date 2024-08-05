import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const Leaderboard = () => {
  const users = [
    { name: 'Luis Ri', score: 284 },
    { name: 'Alysha Je', score: 234 },
    { name: 'Katherine Bo', score: 189 },
    { name: 'Mackenzie Mo', score: 188 },
    { name: 'Jennifer Pe', score: 167 },
    { name: 'Joan To', score: 154 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Leaderboard - Top 10</Typography>
        <List>
          {users.map((user, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${user.name}`} secondary={`Score: ${user.score}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
