import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Error ==>", err));
  }, []);

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" className="py-4">
      <Typography>Single Product {id}</Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Product: {product.title}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <img
            src={product.image}
            alt="Product"
            className="img-fluid rounded-lg shadow-lg"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="h6" color="success.main" gutterBottom>
              Price: ${product.price}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Rate: {product.rating?.rate}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Count: {product.rating?.count}
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProduct;
