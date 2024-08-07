import path from "path";
import { Outlet } from "react-router-dom";
import Add from "./Add";
import List from "./List";
import ListPremium from "./ListPremium";


export const productRoutes = [
    {
        path:"products",
        element: <Outlet/>,
        children:[
            {
                path:"add",
                element: <Add/>
            },
            {
                path:"",
                element: <List/>
            },
            {
                path:"premium",
                element: <ListPremium/>
            }
        ]
    }
]