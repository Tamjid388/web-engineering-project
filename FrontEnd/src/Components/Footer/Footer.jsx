import React from 'react'

export const Footer = () => {
  return (
    <footer className=" container mx-auto  p-10
    footer sm:footer-horizontal bg-base-300 text-base-content 
    
    flex justify-between">
  <aside>
   
    <p>
      FitFlex Online Store
      <br />
      Empowering your fitness journey since 2010
    </p>
      <p className="">
    📍 House 45, Road 12, Uttara, Dhaka, Bangladesh<br />
    📧 support@fitflex.com<br />
    📞 +880 1700 123456
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
