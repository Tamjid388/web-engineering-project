import React from 'react'
import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Pages/Home/Home'
import { Shop } from '../Pages/Shop/Shop'
import { Demo } from '../Components/Demo/Demo'
import { Login } from '../Auth/Login'
import { Register } from '../Auth/Register'
import { ProductDetails } from '../Pages/ProductDetail/ProductDetails'
import { About } from '../Pages/About/About'
import DashboardLayout from '../MainLayout/DashboardLayout.jsx'
import DashBoard from '../Components/dashboard/DashBoard.jsx'
import AllUser from '../Components/dashboard/MenuBar/AllUser.jsx'





const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
         {
            path:'/shop',
            element:<Shop/>
        },
        {
          path:"/shop/product-details/:id",
          element:<ProductDetails/>
        },
        {
          path:"/about",
          element:<About/>
        },
         {
            path:'/demo',
            element:<Demo/>
        },

    ]
  },

  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },

    {
    path:"/dashboard",
    element:<DashBoard/>,
    children:[
     
      {
        path:"allusers",
        element:<AllUser/>
      },

    ]
  },
])

export default AppRouter
