import path from "path";
import { Outlet } from "react-router-dom";
import Add from "./Add";


export const productRoutes = [
    {
        path:"products",
        element: <Outlet/>,
        children:[
            {
                path:"add",
                element: <Add/>
            },
        ]
    }
]