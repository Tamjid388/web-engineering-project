import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { GoogleSignIn } from "./GoogleSignIn";
import Swal from "sweetalert2";
import { Authcontext } from "../AuthProvider/Authprovider";

export const Login = () => {
  const { signInUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  // tamjid9021@gmail.com pass:000000

  const handleSignIn = () => {
    setLoading(true);
    signInUser(userdata.email, userdata.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back to FitFlex Sportswear ",
          icon: "success",
          iconColor: "#3b82f6",
          confirmButtonColor: "#3b82f6",
        });

        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error.message, error.code);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto my-16 flex flex-col-reverse md:flex-row gap-8 p-4  md:p-12 md:shadow-2xl ">
      {/* Left side: Login Form */}
      <div
        className="card bg-base-100 md:w-1/2 max-w-full shrink-0 border border-gray-100
   shadow-xl "
      >
        <div className="card-body flex flex-col   justify-center">
          <h1 className="text-4xl font-semibold mb-4">Sign In Now</h1>
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full "
              placeholder="Email"
              value={userdata.email}
              onChange={(e) =>
                setUserdata({ ...userdata, email: e.target.value })
              }
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              value={userdata.password}
              onChange={(e) =>
                setUserdata({ ...userdata, password: e.target.value })
              }
              placeholder="Password"
            />

            <button
              onClick={handleSignIn}
              className="btn bg-linear-to-t from-indigo-600 to-indigo-500
        text-white
        mt-4"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <div className="divider">Or Sign In With</div>
            <GoogleSignIn />
          </fieldset>
          <div className="mt-2 text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="link link-hover text-blue-600 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="hidden  w-1/2  bg-linear-to-t from-indigo-400 to-indigo-700 rounded-2xl md:flex flex-col p-18">
        <div className=" text-center text-white">
          <h2 className="text-4xl font-extrabold mb-2">Welcome Back!</h2>
          <p className="text-lg font-bold">
            Sign In to continue your fitness journey with us
          </p>
        </div>

        <div>
          <img
            className="w-full  object-cover"
            src="https://res.cloudinary.com/dv7clkufx/image/upload/v1748881610/registerBg_tkdh2r.png"
            alt="Register background"
          />
        </div>
      </div>
    </div>
  );
};
