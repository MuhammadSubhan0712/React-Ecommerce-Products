// import React from "react"
import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "./Components/Appbar"
import Footer from "./Components/footer"

const Layout = () => {
    return(
        <>
        <ResponsiveAppBar/>
        <Outlet/>
        <Footer/>
       </>
    )
}

export default Layout