import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const activeClassName =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";

  const initialClassname =
    "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? activeClassName : initialClassname
        }
        to={"/dashboard"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? activeClassName : initialClassname
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          !isActive ? activeClassName : initialClassname
        }
        onClick={() => (window.location = "mailto:can.ocalir@gmail.com")}
      >
        Contact
      </NavLink>
    </>
  );
};

export default NavLinks;
