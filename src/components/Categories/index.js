import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, reset } from '../../store/quantity.js';

const Categories = (props) => {

  const { totalQuantity, electronics, incrementCount, decrementCount, reset } = props;
  console.log('totalQuantity:', totalQuantity);
  console.log('electronics:', electronics);

  return (
    <>
      <h1>Total Category Inventory: {totalQuantity}</h1>

      <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px' }}>
        {electronics.map((electronics, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`electronics-${idx}`}>
            <CardContent>
              <Typography variant="h5">Name: {electronics.name}</Typography>
              <Typography variant="hp" color="text.secondary">Votes: {electronics.quantity}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" onClick={() => incrementCount(electronics)}>Vote {electronics.name}</Button>
              <Button variant="contained" color="secondary" onClick={() => decrementCount(electronics)}>Un-Vote {electronics.name}</Button>
              <IconButton color="error" onClick={reset}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}


const mapStateToProps = ({ quantity }) => {
  return {
    totalQuantity: quantity.totalQuantity,
    electronics: quantity.electronics,
  }

}

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);