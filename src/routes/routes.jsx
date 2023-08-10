import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from './../pages/ProductDetails';
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/signIn",
    element: "",
  },
  {
    path: "/signUp",
    element: "",
  },
]);

export default routes;