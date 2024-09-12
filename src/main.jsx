import "@fontsource/roboto/400.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Product from "./Pages/Products.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import { Typography } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: (
          <Typography className="d-flex justify-content-center">
            Not Found
          </Typography>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
