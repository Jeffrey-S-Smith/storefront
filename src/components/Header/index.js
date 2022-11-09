import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';


function Header({ setShowCart }) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">

        <Typography variant="h5" color="inherit" component="div">
          Virtual Store
        </Typography>

        <IconButton color="inherit" onClick={() => setShowCart(true)}>
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={() => setShowCart(false)}>
          <Badge >
            <HomeIcon />
          </Badge>
        </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}

export default Header;