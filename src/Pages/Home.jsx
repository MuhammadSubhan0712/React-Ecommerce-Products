import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  alpha
} from "@mui/material";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products?limit=6")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#3f51b5', 0.8)} 0%, ${alpha('#f50057', 0.8)} 100%)`,
          color: 'white',
          textAlign: 'center',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.1&auto=format&fit=crop&w=1770&q=80") center/cover',
            zIndex: -1,
          }
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            Welcome to Lelo
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Discover the latest trends and exclusive collections
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            href="#products"
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container id="products" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
          Featured Products
        </Typography>
        <Typography variant="h6" component="p" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Handpicked selection of our best items
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="h-100">
                <CardMedia
                  component="img"
                  height="280"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" noWrap>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  <Button size="small" variant="contained">
                    Add to Cart
                  </Button>
                  <Button size="small" variant="outlined">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }}>🚚</Box>
              <Typography variant="h5" gutterBottom>Free Shipping</Typography>
              <Typography variant="body1" color="text.secondary">
                Free shipping on all orders over $50
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }}>↩️</Box>
              <Typography variant="h5" gutterBottom>Easy Returns</Typography>
              <Typography variant="body1" color="text.secondary">
                30-day money-back guarantee
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Box sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }}>🔒</Box>
              <Typography variant="h5" gutterBottom>Secure Payment</Typography>
              <Typography variant="body1" color="text.secondary">
                All transactions are secure and encrypted
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;