import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <h1 className="text-center text-4xl my-4 font-bold">Order List</h1>

      <div className="overflow-x-auto">
        <table className="table w-full rounded-0">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Order Number</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order?.id} className="hover">
                <th>{i + 1}</th>
                <td>{order?.customerName}</td>
                <td>{order?.orderNumber}</td>
                <td>{order?.totalAmount} $</td>
                <td>{order?.category}</td>
                <Link to={`/orderDetails/${order._id}`}>
                  <td>
                    <button className="btn btn-ghost btn-sm">view</button>
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
