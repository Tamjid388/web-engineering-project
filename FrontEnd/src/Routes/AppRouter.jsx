import React from 'react'
import { createBrowserRouter } from 'react-router'
import { MainLayout } from '../MainLayout/MainLayout'
import { Home } from '../Pages/Home/Home'





const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
  },
])

export default AppRouter
