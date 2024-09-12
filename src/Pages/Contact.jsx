// import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" className="mt-5">
      <Typography variant="h3" className="text-center mb-4">
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        className="p-3 bg-light shadow rounded"
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="mt-3"
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
