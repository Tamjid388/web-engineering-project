import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router'
import { GoogleSignIn } from './GoogleSignIn'
import { Authcontext } from '../AuthProvider/Authprovider'
import Swal from 'sweetalert2'

export const Register = () => {
  const {createUser}=useContext(Authcontext)
  const navigate=useNavigate()
  const [userdata,setUserdata]=useState({
  email: "",
  password: ""
});
  
 const handleSignUp = () => {
  createUser(userdata.email, userdata.password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      
      await fetch("http://localhost/fitflex-backend/api/add_user.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.displayName || "New User",
          email: user.email,
          uid: user.uid,  // optional 
        }),
      });

      Swal.fire({
        title: 'Registration Successful!',
        text: 'Welcome to FitFlex Sportswear',
        icon: 'success',
        iconColor: '#3b82f6',
        confirmButtonColor: '#3b82f6',
      });

      navigate('/');
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonColor: '#ef4444',
      });
    });
};






  return (
    <div className='container mx-auto my-16 flex gap-8  p-4  md:p-12 md:shadow-2xl '>
      {/* Left side: Login Form */}
      <div className="card bg-base-100 md:w-1/2 max-w-full shrink-0 border border-gray-100
       shadow-xl ">
        <div className="card-body flex flex-col   justify-center">
          <h1 className='text-4xl font-semibold mb-4'>Register Now</h1>
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input type="email"
             className="input w-full "
             value={userdata.email}
  onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
            
             placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" 
            className="input w-full"
            value={userdata.password}
  onChange={(e) => setUserdata({ ...userdata, password: e.target.value })}
            placeholder="Password" />
          
            <button
            onClick={handleSignUp}
            className="btn bg-linear-to-t from-indigo-600 to-indigo-500
            text-white
            mt-4">Register</button>
            <div className='divider'>Or SignUp With</div>
            <GoogleSignIn/>
          </fieldset>
          <div className="mt-2 text-center text-sm">
      Already have an account?{" "}
      <Link to="/login" className="link link-hover text-blue-600 font-medium">
        Sign In
      </Link>
    </div>
        </div>
      </div>
    
      {/* Right side: Image */}
      <div className='hidden md:block md:w-1/2  bg-linear-to-t from-indigo-400 to-indigo-700 rounded-2xl flex flex-col p-18'>
     <div className=' text-center text-white'>
       <h2 className='text-4xl font-extrabold mb-2 text-nowrap'>Create Your Account</h2>
      <p className='text-lg font-bold'>Join us and start your fitness journey today.</p>
     </div >
      
       <div>
         <img className='w-full  object-cover'
          src="https://res.cloudinary.com/dv7clkufx/image/upload/v1748881610/registerBg_tkdh2r.png"
           alt="Register background" />
       </div>
      </div>
    </div>
  )
}
