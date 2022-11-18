import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user/userSlice";
import AppRouter from "../../router/AppRouter";
import auth from "../../utils/firebase";

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
  }

  useEffect(() => {
   stateChangeHandler()
  }, []);
  return (
    <div className="w-full">
      <AppRouter />
    </div>
  );
}

export default App;
