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
      <NavLink
        to="/demo"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        Contact
      </NavLink>
      
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
           <IoMdCart className="text-2xl" />
           <span className="bg-red-500
           absolute bottom-2 left-4 w-fit px-2 rounded-full text-white
           ">0</span>
        </p>
        </NavLink>
      )}
    </>
  );


  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold  text-black">
          Fit<span className="text-red-600">Flex</span>
        </div>

        {/* Nav Links */}
        <nav className="space-x-6 hidden md:flex md:items-center">
          {navLinks}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">

          {
            user ?
              <>
                <button onClick={handleLogOut} className="btn">
                  Logout
                </button>
                <p className="font-semibold">
                  {username}
                </p>
              </>

              :
              <Link to={'/login'}>
                <button
                  className="text-gray-700 btn
          ">Login</button></Link>
          }

        </div>

      </div>
    </header>

  );
};
