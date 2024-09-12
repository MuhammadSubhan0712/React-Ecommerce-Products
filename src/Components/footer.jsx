import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center py-3">
        <Typography variant="body1">
          &copy; 2024 E-Commerce. All rights reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
