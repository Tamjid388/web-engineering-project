import React, { useContext } from 'react'
import { Authcontext } from '../AuthProvider/Authprovider'
import { FcGoogle } from 'react-icons/fc'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

export const GoogleSignIn = () => {
    const { signInWithGoogle } = useContext(Authcontext)
    const navigate = useNavigate();
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Sign Up Successful!',
                    text: 'Welcome to FitFlex Sportswear ',
                    icon: "success",
                    iconColor: "#3b82f6",
                    confirmButtonColor: '#3b82f6',
                    draggable: true
                });

                navigate('/');
            })
            .catch((error) => {
                console.log("Error sign up with gmail");
            })

    }
    return (
        <div>
            <button onClick={handleSignInWithGoogle}
                className="btn btn-outline mt-4 w-full">
                <FcGoogle className='text-2xl' />
                Google
            </button>
        </div>
    )
}
