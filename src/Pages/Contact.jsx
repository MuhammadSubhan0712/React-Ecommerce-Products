import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Alert,
  alpha,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "700px", mx: "auto" }}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              fontWeight="bold"
              color="primary">
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Our team is here to answer any questions you might have. We're
              looking forward to hearing from you.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                📧 Email
              </Typography>
              <Typography paragraph>support@lelo.com</Typography>

              <Typography variant="h6" gutterBottom fontWeight="bold">
                📞 Phone
              </Typography>
              <Typography paragraph>+1 (555) 123-4567</Typography>

              <Typography variant="h6" gutterBottom fontWeight="bold">
                📍 Address
              </Typography>
              <Typography paragraph>
                123 Fashion Street, Style City, SC 12345
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                fontWeight="bold">
                Send us a Message
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 3, py: 1.5 }}>
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
