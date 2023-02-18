import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ServicePage from './routes/pages/ServicePgae'
import './index.css'
import HomePage from './routes/pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "services",
        element: <ServicePage />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
