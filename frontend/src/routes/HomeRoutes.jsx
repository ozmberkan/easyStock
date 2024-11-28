import Layout from "~/layouts/Layout";
import Add from "~/pages/Add/Add";
import Contact from "~/pages/Contact/Contact";
import FeedBackDetail from "~/pages/Feedbacks/FeedBackDetail";
import Feedbacks from "~/pages/Feedbacks/Feedbacks";
import Home from "~/pages/Home/Home";
import MyAccount from "~/pages/MyAccount/MyAccount";
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
    { path: "/feedbacks", element: <Feedbacks /> },
    { path: "/add-product", element: <Add /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/feedback-detail/:id", element: <FeedBackDetail /> },
  ],
};
