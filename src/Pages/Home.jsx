import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products?limit=6')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <Container fluid className="bg-secondary bg-gradient text-white text-center py-5">
        <Typography variant="h4" className="mt-5 mb-4">
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
                  alt={product.title}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.substring(0, 100)}...
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    className="mt-3">
                    ${product.price}
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
    </>
  );
}

export default HomePage;
