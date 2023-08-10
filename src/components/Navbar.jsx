import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { setUser } from "../redux/users/usersSlice";
import Cookies from "js-cookie";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { email } = useAppSelector((state) => state.users.user);
  console.log(email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    Cookies.remove("token");
  };

  return (
    <div className="bg-sky-50 px-4 py-3 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 sticky top-0 z-50 header">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Enviable Learning"
          title="Enviable Learning"
          className="inline-flex items-center"
        >
          <img className="h-12 " src={"img"} alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            E-Shopping
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/checkout"
              aria-label="checkout"
              title="checkout"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Checkout
            </NavLink>
          </li>
          {email ? (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  aria-label="Logout"
                  title="Logout"
                  className="font-medium tracking-wide text-red-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Logout
                </button>
              </li>

              <li>
                <div className="tooltip tooltip-bottom" data-tip={email}>
                  {email ? (
                    <img
                      className="rounded-full"
                      style={{ height: "40px" }}
                      src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=740"
                      alt=""
                    />
                  ) : (
                    <div className="tooltip tooltip-bottom" data-tip="Profile">
                      <FaUserAlt></FaUserAlt>
                    </div>
                  )}
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="login"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  aria-label="register"
                  title="register"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <div className="relative py-3">
                    <p>Register</p>
                    <p className="absolute bottom-5 left-9"></p>
                  </div>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <Link to={"/cart"}>
              <FaShoppingCart></FaShoppingCart>
            </Link>
          </li>

          {/* {user?.uid ? (
            <li>
              <button
                onClick={handleLogout}
                aria-label="Logout"
                title="Logout"
                className="btn btn-sm"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                aria-label="Log In"
                title="Log In"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                LogIn
              </NavLink>
            </li>
          )} */}

          <li>
            <NavLink
              to="/profile"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <div
                className="tooltip tooltip-bottom"
                data-tip={"user?.displayName"}
              >
                {/* {user?.photoURL ? (
                  <img
                    className="rounded-full"
                    style={{ height: "40px" }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <div className="tooltip tooltip-bottom" data-tip="Profile">
                    <FaUserAlt></FaUserAlt>
                  </div>
                )} */}
              </div>
            </NavLink>
          </li>

          <li>
            <label className="swap swap-rotate">
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-8 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-8 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img className="h-12 " src={"img"} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        E-Shopping
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        aria-label="checkout"
                        title="checkout"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        aria-label="Faq"
                        title="Faq"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        aria-label="login"
                        title="login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Login
                      </NavLink>
                    </li>

                    <li>
                      <Link to={"/cart"}>
                        <FaShoppingCart></FaShoppingCart>
                      </Link>
                    </li>

                    {/* {user?.uid ? (
                      <li>
                        <button
                          onClick={handleLogout}
                          aria-label="Logout"
                          title="Logout"
                          className="btn btn-sm"
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <li>
                        <NavLink
                          to="/login"
                          aria-label="Log In"
                          title="Log In"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          LogIn
                        </NavLink>
                      </li>
                    )} */}
                    <li>
                      <NavLink
                        to="/profile"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <div
                          className="tooltip tooltip-bottom"
                          data-tip={"user?.displayName"}
                        >
                          {/* {user?.photoURL ? (
                            <img
                              className="rounded-full"
                              style={{ height: "40px" }}
                              src={user.photoURL}
                              alt=""
                            />
                          ) : (
                            <div
                              className="tooltip tooltip-bottom"
                              data-tip="Profile"
                            >
                              <FaUserAlt></FaUserAlt>
                            </div>
                          )} */}
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <label className="swap swap-rotate">
                        <input type="checkbox" />

                        <svg
                          className="swap-on fill-current w-8 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                          className="swap-off fill-current w-8 h-10"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
