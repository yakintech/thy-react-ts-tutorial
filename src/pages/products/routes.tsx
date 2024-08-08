import path from "path";
import { Outlet } from "react-router-dom";
import Add from "./Add";
import List from "./List";
import ListPremium from "./ListPremium";
import Update from "./Update";
import Detail from "./Detail";


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
            },
            {
                path:"update/:id",
                element: <Update/>
            },
            {
                path:"detail/:id",
                element: <Detail/>
            }
        ]
    }
]