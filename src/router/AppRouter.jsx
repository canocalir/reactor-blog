import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Home />} />
        </Route>
        <Route path={"login"} element={<Login />} />
        <Route path={"register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
