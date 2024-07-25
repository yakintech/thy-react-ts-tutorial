import { Outlet, useRoutes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import DashboardLayout from "../components/layout-components/DashboardLayout"
import { userRoutes } from "../pages/user/routes"
import { suppliersRoutes } from "../pages/suppliers/routes"
import { categoryRoutes } from "../pages/categories/routes"



const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout>
                <Outlet />
            </DashboardLayout>,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                ...userRoutes,
                ...suppliersRoutes,
                ...categoryRoutes
            ]
        }
    ])

}

export default Router