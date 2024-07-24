
import { Outlet } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";


export const suppliersRoutes = [
    {
        path:"suppliers",
        element: <Outlet/>,
        children:[
            {
                path:"",
                element: <List/>
            },
            {
                path:":id",
                element:<Detail/>
            }
        ]
    }
]