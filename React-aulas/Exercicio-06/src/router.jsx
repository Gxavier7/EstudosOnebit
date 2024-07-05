import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./pages/RootLayout"
import ListItems from "./pages/items/ListItems"
import CreateItems from "./pages/items/CreateItems"
import ShowItems from "./pages/items/ShowItems"
import UpdateItens from "./pages/items/UpdateItems"
import Layout from "./pages/items/Layout"

const router = createBrowserRouter([
    {
        path: "/",
        element:<RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "items",
                element: <Layout/>,
                children:[
                    {
                        index: true,
                        element: <ListItems/>,
                    },
                    {
                        path: "new",
                        element: <CreateItems/>,
                    },
                    {
                        path: ":id",
                        element: <ShowItems/>,
                    },
                    {
                        path: ":id/update",
                        element: <UpdateItens/>,
                    },
                ]
            }
        ]
    },
])

export default router