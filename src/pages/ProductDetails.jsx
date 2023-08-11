import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cart/cartSlice";
import Swal from "sweetalert";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Over-Ear Headphones",
  //     price: 129.99,
  //     description:
  //       "Premium over-ear headphones with noise-cancellation and comfortable fit.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Wireless In-Ear Buds",
  //     price: 79.99,
  //     description:
  //       "True wireless in-ear buds with high-quality sound and long battery life.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "On-Ear Headphones",
  //     price: 89.99,
  //     description:
  //       "Compact on-ear headphones with foldable design and clear audio.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 4,
  //     name: "Noise-Canceling Headset",
  //     price: 149.99,
  //     description:
  //       "Advanced noise-canceling headset for immersive audio experience.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 5,
  //     name: "Sports Earbuds",
  //     price: 59.99,
  //     description:
  //       "Sweat-resistant sports earbuds with secure fit for active lifestyle.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 6,
  //     name: "DJ-Style Headphones",
  //     price: 119.99,
  //     description:
  //       "Professional DJ-style headphones with deep bass and swiveling earcups.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  // ];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  });

  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  
  console.log(product);
  const dispatch = useAppDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    Swal("Product Added", "", "success");
  };

  return (
    <div>
      <Helmet>
        <title>Product Details</title>
      </Helmet>

      <div className="card lg:card-side bg-base-100 shadow-xl my-10 mx-5">
        <figure>
          <img src={product?.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold">{product?.name}</h2>
          <h2 className="text-gray-700 md:mt-2  font-bold ">
            Price: {product?.price}
          </h2>
          <h2 className="text-gray-700 font-bold ">
            Description: {product?.description}
          </h2>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddProduct(product)}
              className="btn px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 my-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
