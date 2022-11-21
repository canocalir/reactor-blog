import { Dropdown, Navbar } from "flowbite-react";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../features/user/userSlice";
import { successToast } from "../../helpers/toast";
import {auth} from "../../utils/firebase";
import UserButtons from "../UserButtons/UserButtons";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate()
  const signOutHandler = () => {
    dispatch(logout());
    auth.signOut();
    navigate('/login')
    successToast('Successfully Logged Out')
  };
  return (
    <div className="flex justify-end md:order-2 w-40">
      <Navbar.Toggle className="mr-2" />
      {user ? (
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Gravatar style={{borderRadius: '50%'}} size={40} email={user?.email}/>
          }
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Link to={'/dashboard'}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          </Link>
          <Link to={'/profile'}>
          <Dropdown.Item>Profile</Dropdown.Item>
          </Link>
          <Link to={'/newpost'}>
          <Dropdown.Item>New Post</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item onClick={signOutHandler}>Sign out</Dropdown.Item>
        </Dropdown>
      ) : (
        <UserButtons />
      )}
    </div>
  );
};

export default ProfileDropdown;
