/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cart/cartSlice";
import Swal from "sweetalert";

const Card = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, price, description, image } = product;

  const dispatch = useAppDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    Swal("Product Added", "", "success");
  };

  return (
    <div>
      <div className="transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <img
            className="object-cover w-full mb-6 rounded shadow-lg xl:h-80"
            src={image}
            alt=""
          />
          <div>
            <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              {name}
            </p>
            <p className="text-gray-700 md:mt-2  font-bold ">Price: {price}</p>
            <p className="text-gray-700 md:mt-2  font-bold ">
              Description: {description}
            </p>
            <div className="flex justify-center gap-3">
              <div className="flex justify-center mt-5">
                <Link to={`/productDetails/${_id}`}>
                  <button className="btn px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 my-2">
                    view details
                  </button>
                </Link>
              </div>

              <div className="flex justify-center mt-5">
                <button
                  onClick={() => handleAddProduct(product)}
                  className="btn px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 my-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
