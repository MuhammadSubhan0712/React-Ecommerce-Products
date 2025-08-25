import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  CardMedia,
  Button,
  Paper,
  alpha,
} from "@mui/material";

function AboutUs() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(
            "#3f51b5",
            0.9
          )} 0%, ${alpha("#f50057", 0.9)} 100%)`,
          color: "white",
          textAlign: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom>
            About Lelo
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "700px", mx: "auto" }}>
            We&#8217;re redefining fashion with quality, style, and
            affordability
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={8} sx={{ borderRadius: 3, overflow: "hidden" }}>
              <CardMedia
                component="img"
                alt="Clothing Store"
                height="500"
                image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.1&auto=format&fit=crop&w=1770&q=80"
                title="About Us"
              />
            </Paper>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                color="primary">
                Our Story
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                Welcome to Lelo, where we are committed to providing the best
                products and services in the industry. Our journey began with a
                simple idea: to bring the latest trends in clothing directly to
                your wardrobe.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                We pride ourselves on offering high-quality, stylish, and
                affordable clothing for everyone. Our team works tirelessly to
                source the best materials and designs from around the world.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                At Lelo, we believe in innovation, integrity, and the importance
                of building strong relationships with our clients. These core
                values guide us in every project we undertake.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/products"
                sx={{ mt: 3, px: 4, py: 1.5 }}>
                Shop Our Collection
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            color="primary">
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  borderRadius: 3,
                }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>⭐</Box>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Quality
                </Typography>
                <Typography>
                  We never compromise on quality. Every product is carefully
                  selected and tested.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  borderRadius: 3,
                }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>❤️</Box>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Customer First
                </Typography>
                <Typography>
                  Our customers are at the heart of everything we do. Your
                  satisfaction is our priority.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  borderRadius: 3,
                }}>
                <Box sx={{ fontSize: "3rem", mb: 2 }}>🌱</Box>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Sustainability
                </Typography>
                <Typography>
                  We&#8217;re committed to sustainable practices and reducing
                  our environmental impact.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
