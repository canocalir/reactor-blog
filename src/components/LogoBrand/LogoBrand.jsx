import { Navbar } from "flowbite-react"

const LogoBrand = () => {
  return (
    <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Reactor Blog
    </span>
  </Navbar.Brand>
  )
}

export default LogoBrand