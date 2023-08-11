import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
  //     price: 79.99 ,
  //     description:
  //       "True wireless in-ear buds with high-quality sound and long battery life.",
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "On-Ear Headphones",
  //     price: 89.99 ,
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


  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>

      <div>
        <h1 className="text-center text-4xl font-bold mt-12">
          Recently Added Books
        </h1>

        <div
          className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full
        lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div className="grid gap-12 row-gap-5 mb-8 lg:grid-cols-3 md:grid-cols-2 lg:row-gap-8">
            {products?.map((product, i) => {
              return <Card product={product} key={i}></Card>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
