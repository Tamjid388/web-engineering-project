import React from 'react'
import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Pages/Home/Home'
import { Shop } from '../Pages/Shop/Shop'





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

    ]
  },
])

export default AppRouter
