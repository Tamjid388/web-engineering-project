import { NavLink } from "react-router";


export const Navbar = () => {
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
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
        }
      >
        Contact
      </NavLink>
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
       <nav className="space-x-6 hidden md:flex">
          {navLinks}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          
          <button
           className="text-gray-700 btn
          ">Login</button>
        </div>
      </div>
    </header>
  );
};
