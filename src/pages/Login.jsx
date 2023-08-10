import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppDispatch } from "../redux/hooks";
import { useSignInMutation } from "../redux/users/usersAPi";
import { setLoading } from "../redux/users/usersSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signInMutation] = useSignInMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credential = { email, password };
      dispatch(setLoading(true));
      const response = await signInMutation(credential);
      console.log(response);
      if (response.data) {
        Swal(response?.data?.message, "", "success");
        Cookies.set("token", response?.data?.token);
        navigate("/");
        setEmail("");
        setPassword("");
      } else {
        Swal(response?.error?.data?.message, "", "error");
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Sign-in failed:", error);
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Navbar></Navbar>

      <div>
        <div className="max-w-md mx-auto my-[50px] p-5 border">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Sign In
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 form-control w-full">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                  type="password"
                  id="password"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="btn px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 my-2 w-full"
              >
                Login
              </button>

              <p className="text-gray-700 text-md mt-4 text-center">
                New to BookHub?{" "}
                <Link to="/register">
                  <a className="text-sky-500 font-semibold hover:text-sky-700">
                    Register
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Login;
