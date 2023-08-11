import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li>
              <Link to={"/dashboard/customerList"}>Customers List</Link>
            </li>
            <li>
              <Link to={"/dashboard/addCustomer"}>Add Customer</Link>
            </li>
            <li>
              <Link to={"/dashboard/ordersList"}>Orders List</Link>
            </li>
            <li>
              <Link to={"/dashboard/addProduct"}>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
