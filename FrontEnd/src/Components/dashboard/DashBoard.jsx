import { Menu } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router";
import DashboardLayout from "../../MainLayout/DashboardLayout";

const DashBoard = () => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-start justify-start
 ">
 <div className="p-8 w-full ">
     {/* Page content here */}
  <Outlet/>
 </div>
   
    <label htmlFor="my-drawer-2" className="m-4 btn btn-primary drawer-button lg:hidden">
    <Menu/>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-gray-200 text-base-content min-h-full w-60 md:w-80 p-4">
      {/* Sidebar content here */}
      <li className="font-bold md:text-2xl ">
      <Link to={'/'}>FitFlex Dashboard</Link>
      </li>
      <li>
        <Link to={'/dashboard/allusers'}>
      ALL Users
      </Link></li>
      
    
    </ul>
  </div>
</div>
    </div>
  );
};

export default DashBoard;
