import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ image, title, price, items }) => {
  const navigate = useNavigate();

  const singleUser = (items) => {
    if (items && items.id) {
      navigate(`/singleproduct/${items.id}`);
    } else {
      console.error("Items is undefined or missing an id:", items);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={2}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "10px",
          boxShadow: 3,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.05)",
          },
          display: "flex",
          flexDirection: "column",
        }}>
        <CardMedia
          component="img"
          height="140" // Reduced height for a smaller image
          image={image}
          alt="Product"
          sx={{
            objectFit: "contain", // Adjusts the image to fit inside without cropping
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1, // Makes sure the content fills the remaining space
            justifyContent: "space-between", // Ensures proper spacing
          }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 1 }}>
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#444",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            display: "flex",
            justifyContent: "center", // Centers the button
            padding: 1, // Adds padding around the button
          }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => singleUser(items)}
            sx={{
              background: "linear-gradient(to right, #4caf50, #2196f3)", // Gradient button
              "&:hover": {
                background: "linear-gradient(to right, #2196f3, #4caf50)",
              },
            }}>
            See Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
