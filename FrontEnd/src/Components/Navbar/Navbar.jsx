import { useContext } from "react";
import { NavLink, Link } from "react-router";
import { Authcontext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";
import { IoMdCart } from "react-icons/io";


export const Navbar = () => {
  const { user, LogOut } = useContext(Authcontext)
  const username = user?.displayName;


  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have successfully signed out.',
          icon: 'success',
          iconColor: '#3b82f6', // Tailwind's blue-500
          confirmButtonColor: '#3b82f6',
        });
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  }

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        About
      </NavLink>
      {/* <NavLink
        to="/demo"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        Contact
      </NavLink> */}
      
      {!user && (
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
          }
        >
          Register
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primary font-semibold ' : 'text-gray-700 hover:text-primary'
          }
        >
        <p className=" relative">
           <IoMdCart className="text-xl md:text-2xl" />
           <span className="bg-red-500
           absolute bottom-2 left-4 w-fit px-2 rounded-full
            text-white
           ">0</span>
        </p>
        </NavLink>
      )}
    </>
  );


  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content
             bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 space-y-2"
          >
            {navLinks}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-extrabold">
          Fit<span className="text-red-600">Flex</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {navLinks}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-sm">
              Logout
            </button>
            <span className="font-semibold hidden md:inline">
              {username}
            </span>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};
