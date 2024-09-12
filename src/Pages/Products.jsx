import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Components/Cards";
import Box from '@mui/material/Box'; 
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Error ==>", err));
  }, []);

  return (
    <div className="min-vh-100 bg-gradient-to-r from-blue-900 via-black to-purple-900 py-8">
      <Container maxWidth="lg" className="mt-8">
        <Grid container spacing={4} justifyContent="center">
          {Data ? (
            Data.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Cards
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  items={item}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h4" align="center" color="white">
                Loading...
              </Typography>
              <Box display="flex" justifyContent="center" mt={2}>
                <CircularProgress color="inherit" />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
