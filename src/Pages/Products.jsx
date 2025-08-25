import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Components/Cards";
import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
  TextField,
  MenuItem,
  Pagination,
  alpha
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log("Error ==>", err));
  }, []);

  useEffect(() => {
    if (data) {
      let result = [...data];
      
      // Filter by category
      if (category !== "all") {
        result = result.filter(item => item.category === category);
      }
      
      // Sort products
      if (sort === "price-low") {
        result.sort((a, b) => a.price - b.price);
      } else if (sort === "price-high") {
        result.sort((a, b) => b.price - a.price);
      } else if (sort === "rating") {
        result.sort((a, b) => b.rating?.rate - a.rating?.rate);
      }
      
      setFilteredData(result);
      setPage(1); // Reset to first page when filters change
    }
  }, [data, category, sort]);

  // Get current items for pagination
  const currentItems = filteredData ? filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  ) : [];

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "men's clothing", label: "Men's Clothing" },
    { value: "women's clothing", label: "Women's Clothing" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
  ];

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha('#3f51b5', 0.9)} 0%, ${alpha('#f50057', 0.9)} 100%)`,
          color: 'white',
          textAlign: 'center',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            Our Products
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Discover our curated collection of high-quality products
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Filters */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 6, justifyContent: 'center' }}>
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Sort By"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Products Grid */}
        {filteredData && filteredData.length > 0 ? (
          <>
            <Grid container spacing={4}>
              {currentItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <Cards
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    items={item}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {filteredData.length > itemsPerPage && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Pagination
                  count={Math.ceil(filteredData.length / itemsPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </>
        ) : data ? (
          <Typography variant="h6" textAlign="center">
            No products found in this category.
          </Typography>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
            <Box textAlign="center">
              <CircularProgress size={60} thickness={4} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Loading products...
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Product;