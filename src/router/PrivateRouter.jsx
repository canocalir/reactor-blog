import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";

const PrivateRouter = () => {
  const user = useSelector(selectUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
