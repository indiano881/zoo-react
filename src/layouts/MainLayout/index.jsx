import { NavLink, Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
          <NavLink to="/" > Home </NavLink>
          <NavLink to="mammals" > Mammals </NavLink>
          <NavLink to="birds" > Birds </NavLink>
          <NavLink to="reptiles" > Reptiles </NavLink>


          <Outlet />
        </>
    )
}

export default MainLayout
