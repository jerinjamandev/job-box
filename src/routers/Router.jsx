import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CompanyDetails from "../Pages/JobDetils";
import NotFound from "../Pages/NotFound";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<App></App>
        },
        {
            path:'/company/:id',
            element:<CompanyDetails></CompanyDetails>,
            loader:()=>fetch('/jobdata.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);

