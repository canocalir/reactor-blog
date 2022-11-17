import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const UserButtons = () => {
  return (
    <div className="flex gap-2">
      <Link to={'/login'}>
        <Button>Login</Button>
      </Link>
      <Link to={'/register'}>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default UserButtons;
