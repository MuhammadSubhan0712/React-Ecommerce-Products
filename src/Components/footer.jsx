import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              LELO
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop destination for the latest fashion trends and
              quality products.
            </Typography>
            <Box>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Shop
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Men&#8217;s Clothing</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Women&#8217;s Clothing</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Accessories</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">New Arrivals</Typography>
            </Link>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Customer Service
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Contact Us</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">FAQs</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Returns & Exchanges</Typography>
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              <Typography variant="body2">Shipping Information</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact Info
            </Typography>
            <Typography variant="body2" gutterBottom>
              123 Fashion Street, Style City
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: support@lelo.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.3)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant="body2">
            &copy; 2025 LELO. <abbr title="Muhammad Subhan Khan">MSK</abbr> All rights reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Typography variant="body2" display="inline">
                Privacy Policy
              </Typography>
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Typography variant="body2" display="inline">
                Terms of Service
              </Typography>
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <Typography variant="body2" display="inline">
                Sitemap
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default footer;
