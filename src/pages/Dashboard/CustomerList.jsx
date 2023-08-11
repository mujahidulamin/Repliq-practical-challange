import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("https://repliq-assignment-backend.vercel.app/customers")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <h1 className="text-center text-4xl my-4 font-bold">Customer List</h1>

      <div className="overflow-x-auto">
        <table className="table w-full rounded-0">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer, i) => (
              <tr key={customer?.id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img alt="" src={customer?.image} />
                    </div>
                  </div>
                </td>
                <td>{customer?.name}</td>
                <td>{customer?.email}</td>
                <td>{customer?.category}</td>
                <Link to={`/customerDetails/${customer._id}`}>
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

export default CustomerList;
