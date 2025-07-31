import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" container mx-auto  p-10
    footer sm:footer-horizontal bg-base-300 text-base-content 
    
    flex flex-col md:flex-row justify-between">
      <aside>



        <h6 className="text-xl font-bold mb-2 ">FitFlex Online Store</h6>

        <h5 className='footer-title'>
          Empowering your fitness journey since 2010
        </h5>

        <p className="">
          House 45, Road 12, Uttara, Dhaka, Bangladesh<br />


        </p>
        <p>
          Email: support@fitflex.com
        </p>
        <p>
          Call: +880 1700 123456
        </p>

        <div className="flex justify-center gap-2 text-2xl
                   text-black">
                         <a
        href="#"
        className="p-2 rounded-full text-black hover:bg-gradient-to-r hover:from-[#1877F2] hover:via-[#3b5998] hover:to-[#A4C6F9] transition duration-300"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        className="p-2 rounded-full text-black hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] transition duration-300"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        className="p-2 rounded-full text-black hover:bg-gradient-to-r hover:from-[#1DA1F2] hover:via-[#0C84D1] hover:to-[#A5DCFA] transition duration-300"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="p-2 rounded-full text-black hover:bg-gradient-to-r hover:from-[#D44638] hover:via-[#6C757D] hover:to-[#F8D7DA] transition duration-300"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
        </div>
      </aside>
      <nav>
       <h6 className="footer-title bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
         Shop
       </h6>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
       Men's Activewear
       </a>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
         Women's Activewear
       </a>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
         Fitness Equipment
       </a>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
         Supplements
       </a>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
         Accessories
       </a>
       <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
         Gift Cards
       </a>
     </nav>

     <nav>
      <h6 className="footer-title bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
        Company
      </h6>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        About FitFlex
      </a>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        Contact Us
      </a>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        Careers
      </a>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        Store Locator
      </a>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        Blog
      </a>
      <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
        Ambassador Program
      </a>
    </nav>

    <nav>
     <h6 className="footer-title bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
       Support
     </h6>
     <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
       Help Center
    </a>
    <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
      Shipping Info
    </a>
    <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
      Return Policy
    </a>
    <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
      Track Your Order
    </a>
    <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
      Terms & Conditions
    </a>
    <a className="link link-hover hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition">
      Privacy Policy
    </a>
  </nav>


  </footer>

  )
}