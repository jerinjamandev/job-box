import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root';
import Home from './pages/Home';
import About from './pages/About';
import Companydetails from './pages/Companydetails';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Notfound';
import AuthProvider from './provider/AuthpPovider';
import Profile from './pages/Myprofile';
import UpdateProfile from './pages/Updateprfl';
import PrivateRoute from './Private/Private';
import ForgatePassword from './pages/ForgatePassword';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[


      {path:'/',
      element:<Home></Home>
    
    },


    {path:'/about',
    element:<About></About>
  
  },

  {path:'/companydetails/:id',
  element:<PrivateRoute><Companydetails></Companydetails></PrivateRoute>,
  loader:()=>fetch('/Jobdata.json')
},


{path:'/login',
element:<Login></Login>

},

{path:'/register',
element:<Register></Register>

},

{
  path:'/my-profile',
  element:<PrivateRoute><Profile></Profile></PrivateRoute>
},

{
  path:'/update-profile',
  element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
},

{
  path:'/forgot-password',
  element:<ForgatePassword></ForgatePassword>
}


    ]
  },

  {
    path:'*',
    element:<NotFound></NotFound>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
