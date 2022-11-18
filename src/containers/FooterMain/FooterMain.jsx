import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-around md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Reactor Blog</a>.   All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link to={"#"} className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link onClick={() => (window.location = "mailto:can.ocalir@gmail.com")} className="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>
  );
};

export default FooterMain;
