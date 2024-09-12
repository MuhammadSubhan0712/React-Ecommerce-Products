// import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container maxWidth="md" className="mt-5">
      <Typography variant="h3" className="text-center mb-4">
        About Us
      </Typography>
      <Box className="p-3 bg-light shadow rounded">
        <Typography variant="body1">
          Welcome to Lelo, where we are committed to providing the best products
          and services in the industry. Our journey began in one Year, and since
          then, we have dedicated ourselves to meeting the needs of our
          customers with the highest standards of quality and customer service.
        </Typography>
        <Typography variant="body1">
          Our team consists of passionate professionals who are experts in their
          respective fields. We believe in innovation, integrity, and the
          importance of building strong relationships with our clients. These
          core values guide us in every project we undertake.
        </Typography>
        <Typography variant="body1">
          At Lelo, we strive to create a positive impact not only for our
          customers but also for our community and the environment. We are
          constantly exploring new ways to improve our processes and products,
          ensuring that we stay ahead of the curve in an ever-changing
          marketplace.
        </Typography>
        <Typography variant="body1">
          Thank you for choosing Lelo. We look forward to continuing to serve
          you with excellence and dedication.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
