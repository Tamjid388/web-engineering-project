import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div>
        <Navbar/>

        <div className=''>
            <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}
