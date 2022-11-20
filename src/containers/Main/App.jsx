import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { login, logout } from "../../features/user/userSlice";
import AppRouter from "../../router/AppRouter";
import { auth } from "../../utils/firebase";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  const stateChangeHandler = () => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth?.email,
            uid: userAuth?.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    stateChangeHandler();
  }, []); // eslint-disable-line
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full flex flex-col justify-between h-screen">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
