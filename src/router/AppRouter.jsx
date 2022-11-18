import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewBlog from "../pages/NewBlog/NewBlog";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import auth from "../utils/firebase";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const user = useSelector(selectUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/newpost"} element={<NewBlog />} />
        </Route>
        <Route
          path={"/login"}
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path={"/register"}
          element={user ? <Navigate to={"/"} /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
