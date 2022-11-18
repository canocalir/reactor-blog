import { Navbar } from "flowbite-react";
import LogoBrand from "../../components/LogoBrand/LogoBrand";
import NavLinks from "../../components/NavLinks/NavLinks";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

const NavbarMain = () => {
  return (
    <Navbar className="mt-5 flex" fluid={false} rounded={false}>
      <LogoBrand />
      <ProfileDropdown />
      <Navbar.Collapse>
        <NavLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMain;
