// import React from "react"
import { Outlet } from "react-router-dom"
import ResponsiveAppBar from "./Components/Appbar"


const Layout = () => {

    return(
        <>
        <ResponsiveAppBar/>
        <Outlet/>
       </>
    )
}

export default Layout