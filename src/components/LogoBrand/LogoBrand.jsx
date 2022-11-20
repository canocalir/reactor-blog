import { Navbar } from "flowbite-react"
import logo from '../../assets/mainlogo.png'

const LogoBrand = () => {
  return (
    <Navbar.Brand href="/">
    <img
      src={logo}
      className="mr-3 h-10 sm:h-9"
      alt="Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Reactor
    </span>
  </Navbar.Brand>
  )
}

export default LogoBrand