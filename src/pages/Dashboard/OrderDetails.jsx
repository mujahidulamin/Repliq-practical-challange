import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://repliq-assignment-backend.vercel.app/orders")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  });

  const { id } = useParams();
  const order = orders?.find((p) => p._id === id);

  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-col justify-center max-w-lg p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1 text-left">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {order?.customerName}
            </h2>
            <p className=" text-xs sm:text-base dark:text-gray-400">
              Order Number: {order?.orderNumber}
            </p>
            <p className=" text-xs sm:text-base dark:text-gray-400">
              Price: {order?.totalAmount} $
            </p>

            <p className="text-xs sm:text-base dark:text-gray-400">
              Status: {order?.status}
            </p>

            <p className=" text-xs sm:text-base dark:text-gray-400">
              Order Date: {order?.orderDate}
            </p>

            <p className=" text-xs sm:text-base dark:text-gray-400">
              Payment Method: {order?.paymentMethod}
            </p>

            <p className=" text-xs sm:text-base dark:text-gray-400">
              Shipping Address: {order?.shippingAddress}
            </p>
            <p className=" text-xs sm:text-base dark:text-gray-400">
              Phone Number: {order?.contactPhone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
