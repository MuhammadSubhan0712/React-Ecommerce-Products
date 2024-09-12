// // import React from "react"
// import { Typography } from "@mui/material"
// const Home = () => {


//     return(
//         <>
//         <Typography variant="h1">
// Home
//         </Typography>
        
//         </>
//     )
// }

// export default Home

// import React from 'react';import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Navbar, Nav } from 'react-bootstrap';

fimport React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function HomePage() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a short description of product 1.',
      price: '$29.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a short description of product 2.',
      price: '$39.99',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a short description of product 3.',
      price: '$49.99',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className="me-auto">
            E-Commerce
          </Typography>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <Button color="inherit" href="#products">Products</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container fluid className="bg-primary text-white text-center py-5">
        <Typography variant="h3" className="mb-4">
          Welcome to Our Store!
        </Typography>
        <Button variant="contained" color="secondary" href="#products">
          Shop Now
        </Button>
      </Container>

      {/* Product Grid */}
      <Container className="my-5">
        <Typography variant="h4" component="h2" className="text-center mb-4">
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="h-100 shadow-sm">
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary" className="mt-3">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-between">
                  <Button size="small" variant="contained" color="primary">
                    Add to Cart
                  </Button>
                  <Button size="small" variant="outlined" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <Typography variant="body1">
          &copy; 2024 E-Commerce. All rights reserved.
        </Typography>
      </footer>
    </>
  );
}

export default HomePage;
