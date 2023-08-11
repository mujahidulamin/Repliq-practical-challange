import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "./../pages/ProductDetails";
import Cart from "../components/Cart";
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomerList from "../pages/Dashboard/CustomerList";
import CustomerDetails from "../pages/Dashboard/CustomerDetails";
import AddCustomer from "../pages/Dashboard/AddCustomer";
import OrderList from "../pages/Dashboard/OrderList";
import OrderDetails from "../pages/Dashboard/OrderDetails";
import AddProduct from "../pages/Dashboard/AddProduct";


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
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/customerDetails/:id",
        element: <CustomerDetails></CustomerDetails>,
      },
      {
        path: "/orderDetails/:id",
        element: <OrderDetails></OrderDetails>,
      },
      
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/customerList",
        element: <CustomerList></CustomerList>,
      },
      {
        path: "/dashboard/addCustomer",
        element: <AddCustomer></AddCustomer>,
      },
      {
        path: "/dashboard/ordersList",
        element: <OrderList></OrderList>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

export default routes;
