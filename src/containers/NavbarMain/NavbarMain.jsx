import { Navbar } from "flowbite-react"
import LogoBrand from "../../components/LogoBrand/LogoBrand"
import NavLinks from "../../components/NavLinks/NavLinks"
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown"

const NavbarMain = () => {
  return (
    <Navbar
    className="mt-5"
  fluid={false}
  rounded={false}
>
  <LogoBrand/>
  <Navbar.Collapse>
    <NavLinks/>
  </Navbar.Collapse>
  <ProfileDropdown/>
</Navbar>
  )
}

export default NavbarMain