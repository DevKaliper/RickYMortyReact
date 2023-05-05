
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Chip, Skeleton } from '@mui/material';


export default function RickCard({chac}) {


    
  return (
    
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={chac.name}
        height="140"
        image={chac.image ? chac.image:   <Skeleton variant="circular" width={140} height={140} />}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {chac.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-center'>
          {chac.type}
        </Typography>
      </CardContent>
      <CardActions>
        {chac.status === "Alive"? <Chip label="Alive" variant="filled" color="success" /> : chac.status === "Dead"? <Chip label="Dead" variant="filled" color="error"/> : <Chip label="unknown" />  }
      </CardActions>
    </Card>
  );
}