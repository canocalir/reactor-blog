import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
       <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'register'} element={<Register/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default AppRouter