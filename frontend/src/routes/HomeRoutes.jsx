import Layout from "~/layouts/Layout";
import About from "~/pages/About/About";
import Contact from "~/pages/Contact/Contact";
import Home from "~/pages/Home/Home";
import Product from "~/pages/Product/Product";
import Products from "~/pages/Products/Products";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:id", element: <Product /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
  ],
};
