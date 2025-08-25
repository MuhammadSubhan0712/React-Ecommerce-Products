import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Rating,
  Chip,
  Divider,
  alpha
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log("Error ==>", err));
  }, [id]);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh">
        <Box textAlign="center">
          <Typography variant="h6">Loading product details...</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Image Gallery */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', mb: 2 }}>
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  p: 3
                }}
              />
            </Paper>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Box>
              <Chip 
                label={product.category} 
                color="primary" 
                sx={{ mb: 2, textTransform: 'capitalize' }}
              />
              <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                {product.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating 
                  value={product.rating?.rate || 0} 
                  precision={0.1} 
                  readOnly 
                  size="large" 
                />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  ({product.rating?.count || 0} reviews)
                </Typography>
              </Box>
              
              <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">
                ${product.price}
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mt: 3, lineHeight: 1.8 }}>
                {product.description}
              </Typography>
              
              <Divider sx={{ my: 4 }} />
              
              {/* Quantity Selector */}
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Quantity
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Button 
                  variant="outlined" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  sx={{ minWidth: '40px', height: '40px' }}
                >
                  -
                </Button>
                <Typography variant="h6" sx={{ mx: 3 }}>
                  {quantity}
                </Typography>
                <Button 
                  variant="outlined" 
                  onClick={() => handleQuantityChange(1)}
                  sx={{ minWidth: '40px', height: '40px' }}
                >
                  +
                </Button>
              </Box>
              
              {/* Action Buttons */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth 
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    Add to Wishlist
                  </Button>
                </Grid>
              </Grid>
              
              {/* Product Features */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Product Features
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                  <li><Typography variant="body2">Free shipping on orders over $50</Typography></li>
                  <li><Typography variant="body2">30-day money-back guarantee</Typography></li>
                  <li><Typography variant="body2">Secure payment processing</Typography></li>
                  <li><Typography variant="body2">24/7 customer support</Typography></li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleProduct;