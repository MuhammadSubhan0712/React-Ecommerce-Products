import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="Clothing Store"
            height="400"
            image="https://media.istockphoto.com/id/864505242/photo/mens-clothing-and-personal-accessories.jpg?s=612x612&w=0&k=20&c=TaJuW3UY9IZMijRrj1IdJRwd6iWzXBlrZyQd1uyBzEY="
            title="About Us"
            sx={{ borderRadius: 2 }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              About Us
            </Typography>

            <Typography variant="body1" paragraph>
              Welcome to Lelo, where we are committed to providing the best
              products and services in the industry. Our journey began in one
              Year, and since then, we have dedicated ourselves to meeting the
              needs of our customers with the highest standards of quality and
              customer service.
            </Typography>
            <Typography variant="body2" paragraph>
              Our team consists of passionate professionals who are experts in
              their respective fields. We believe in innovation, integrity, and
              the importance of building strong relationships with our clients.
              These core values guide us in every project we undertake.
            </Typography>
            <Typography variant="body3" paragraph>
              At Lelo, we strive to create a positive impact not only for our
              customers but also for our community and the environment. We are
              constantly exploring new ways to improve our processes and
              products, ensuring that we stay ahead of the curve in an
              ever-changing marketplace.
            </Typography>
            <Typography variant="body4" paragraph>
              Thank you for choosing Lelo. We look forward to continuing to
              serve you with excellence and dedication.
            </Typography>
            <Typography variant="body5" paragraph>
              Welcome to [Your Store Name], where fashion meets quality. Our
              journey began with a simple idea: to bring the latest trends in
              clothing directly to your wardrobe. We pride ourselves on offering
              high-quality, stylish, and affordable clothing for everyone. Our
              team works tirelessly to source the best materials and designs
              from around the world.
            </Typography>
            <Typography variant="body6" paragraph>
              Whether you are looking for the perfect outfit for a special
              occasion or everyday essentials, we have something for everyone.
              Our commitment to customer satisfaction is unmatched, and we
              strive to provide a seamless shopping experience from start to
              finish.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/products">
              Shop Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
