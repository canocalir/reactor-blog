import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import { errorToast } from "../helpers/toast";

const PrivateRouter = () => {
const user = useSelector(selectUser)
!user && errorToast('You must be signed in to access');
  return user ? <Outlet /> : <Navigate to="/login" />
};

export default PrivateRouter;
