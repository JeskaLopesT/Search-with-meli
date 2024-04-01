import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Home } from "../../pages/Home";
import { products } from "./products";

export const routes = createBrowserRouter([
    {
        id: 'root',
        path:'/',
        element: <DefaultLayout />,
        children :[{
            index:true,
            element:(
                <Home />
            )
        },

        ... products
        ]
    }
])