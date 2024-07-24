import path from "path";
import { Outlet } from "react-router-dom";
import List from "./List";
import Detail from "./Detail";


export const userRoutes = [
    {
        path:"users",
        element: <Outlet/>,
        children:[
            {
                path:"",
                element: <List/>
            },
            {
                path:":id",
                element: <Detail/>
            }
        ]
    }
]