
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";



const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([{
    path : "/",
    element : <AppLayout/>,
    children : [
        {
            path : "/",
            element : <Body/>
       }
    ]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
