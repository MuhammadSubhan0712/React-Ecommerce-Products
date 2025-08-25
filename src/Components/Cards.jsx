import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Rating,
  IconButton
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ image, title, price, items, rating }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = React.useState(false);

  const singleUser = (items) => {
    if (items && items.id) {
      navigate(`/singleproduct/${items.id}`);
    } else {
      console.error("Items is undefined or missing an id:", items);
    }
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          width: '100%',
          maxWidth: 345,
          borderRadius: 3,
          boxShadow: 3,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-8px)',
          },
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            }
          }}
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <Favorite color="error" />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>

        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
          sx={{
            objectFit: "contain",
            p: 2,
            pt: 3
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '64px'
            }}
          >
            {title}
          </Typography>
          
          {rating && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating value={rating.rate} precision={0.1} size="small" readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({rating.count})
              </Typography>
            </Box>
          )}
          
          <Typography variant="h5" color="primary" fontWeight="bold">
            ${price}
          </Typography>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => singleUser(items)}
            sx={{
              py: 1,
              background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;