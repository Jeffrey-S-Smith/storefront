import { useDispatch, useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Container, Typography, Button } from '@mui/material';

const SimpleCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products).products;

  const removeFromCart = (product) => {
    dispatch({ type: 'remove_product', payload: { product } });
    const updatedProduct = products.find(currProduct => currProduct.id === product.id);
    updatedProduct.inventoryCount++;
    dispatch({ type: 'update_product', payload: updatedProduct });
  }

  return (
    <>
      <Container id='current-categories'>
        <Typography variant="h2">Your Cart</Typography>
        <Typography variant="h5">Total Items: {cart.numberOfItems}</Typography>
      </Container>
      <Container id='productsContainer'>
        {
          cart.productList.map(product => (
            <Card sx={{ maxWidth: 345 }} key={product.id}>
              <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{product.display}</Typography>
                <Typography variant="body2" color="text.secondary">Quantity: {product.amountInCart}</Typography>
              </CardContent>

              <CardActions>
                <Button size="small" onClick={() => removeFromCart(product)}>Remove</Button>
              </CardActions>
            </Card>
          ))
        }
      </Container>
    </>
  )
}

export default SimpleCart;


