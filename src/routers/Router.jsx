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
import About from "../Pages/About";
import Privetroute from "../provet/Privetroute";
import Forget from "../Pages/Forget";

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
            element:<Privetroute>
              <CompanyDetails></CompanyDetails>
              </Privetroute>,
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

        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/forget',
          element:<Forget></Forget>

        }
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);

