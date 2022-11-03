import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function EventCard({eventname}) {
  // console.log(eventname.image);
  return (
    <Card sx={{ width:.40 ,margin:"5%"}}>
      <CardMedia
        component="img"
        height="300"
        image={eventname.image}
        alt={eventname.name}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {eventname.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {eventname.text}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Visit Website</Button>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;

