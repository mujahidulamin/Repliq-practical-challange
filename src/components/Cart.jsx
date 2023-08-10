import { HiMinus, HiOutlinePlus } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart, removeFromCart, removeOne } from "../redux/cart/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-5 my-5 mx-4">
      <h1 className="text-center text-4xl my-4 font-bold">Total: {total.toFixed(2)}</h1>

      {products.map((product) => (
        <div
          className="border h-44 p-5 flex justify-between  rounded-md"
          key={product.name}
        >
          <div className="border-r pr-5 shrink-0">
            <img src={product?.image} alt="" className="h-full" />
          </div>
          <div className="px-2 w-full flex flex-col gap-3">
            <h1 className="text-2xl self-center">{product?.name}</h1>
            <p>Quantity: {product.quantity}</p>
            <p className="text-xl">
              Total Price: {(product.price * product.quantity).toFixed(2)} $
            </p>
          </div>
          <div className="border-l pl-5 flex flex-col justify-between">
            <button onClick={() => dispatch(addToCart(product))}>
              <HiOutlinePlus size="20" />
            </button>
            <button onClick={() => dispatch(removeOne(product))}>
              <HiMinus size="20" />
            </button>
            <button
              className=""
              onClick={() => dispatch(removeFromCart(product))}
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
