import React from 'react'

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
      </aside>
      <nav>
        <h6 className="footer-title">Shop</h6>
        <a className="link link-hover">Men's Activewear</a>
        <a className="link link-hover">Women's Activewear</a>
        <a className="link link-hover">Fitness Equipment</a>
        <a className="link link-hover">Supplements</a>
        <a className="link link-hover">Accessories</a>
        <a className="link link-hover">Gift Cards</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About FitFlex</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Store Locator</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Ambassador Program</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Shipping Info</a>
        <a className="link link-hover">Return Policy</a>
        <a className="link link-hover">Track Your Order</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
    </footer>

  )
}
