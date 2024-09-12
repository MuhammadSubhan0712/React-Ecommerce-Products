// import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Box from "@mui/material/Box";


const Cards = ({ image, title , price , items }) => {
  const navigate = useNavigate();


  const singleUser = (items) => {
    if (items && items.id) {
      navigate(`/SingleProduct/${items.id}`);
    } else {
      console.error("Items is undefined or missing an id:", items);
    }
  };

  return (
    <Card 
      className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      sx={{ width: 300, borderRadius: '10px' }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Product"
        className="rounded-top"
      />

      <CardContent className="bg-dark text-white">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h6" color="white" className="mt-2">
          Price: ${price}
        </Typography>
      </CardContent>

      <CardActions className="d-flex justify-content-end">
        <Button 
          variant="contained"
          color="primary"
          onClick={() => singleUser(items)}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white"
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
