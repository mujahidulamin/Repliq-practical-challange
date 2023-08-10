import { useDispatch } from 'react-redux';
import MainLayout from './layouts/MainLayout'
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { setUser } from './redux/users/usersSlice';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  // Retrieve the token from the cookie
  const token = Cookies.get("token");

  // Authenticate user info extract function
  const verifyUserToken = () => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        if (decodedToken && decodedToken?.number) {
          dispatch(setUser(decodedToken?.number));
        }
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  };

  useEffect(() => {
    verifyUserToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <MainLayout></MainLayout>
    </>
  )
}

export default App
