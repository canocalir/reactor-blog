import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import auth from "../../utils/firebase";
import UserButtons from "../UserButtons/UserButtons";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(logout());
    auth.signOut();
  };

  const user = useSelector(selectUser);

  return (
    <div className="flex md:order-2">
      <Navbar.Toggle className="mr-2" />
      {user ? (
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
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
