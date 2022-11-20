import { Navbar } from "flowbite-react";
import LogoBrand from "../../components/LogoBrand/LogoBrand";
import NavLinks from "../../components/NavLinks/NavLinks";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

const NavbarMain = () => {
  return (
    <Navbar className="flex w-full" fluid={false} rounded={false}>
      <LogoBrand />
      <ProfileDropdown />
      <Navbar.Collapse>
        <NavLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMain;
