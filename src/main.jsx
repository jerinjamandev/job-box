import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routers/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Authprovider from './provider/Authprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
    <ToastContainer />
   </Authprovider>
  </StrictMode>,
)
