import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/Authprovider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;
        console.log(user);

        
        try {
          const response = await fetch('http://localhost/fitflex-backend/api/add_user.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: user.displayName || 'Google User',
              email: user.email,
              uid: user.uid,
            }),
          });

          const data = await response.json();
          console.log('Backend response:', data);

          Swal.fire({
            title: 'Sign In Successful!',
            text: 'Welcome to FitFlex Sportswear',
            icon: 'success',
            iconColor: '#3b82f6',
            confirmButtonColor: '#3b82f6',
          });

          navigate('/');
        } catch (err) {
          console.error('Error sending data to backend:', err);
          Swal.fire({
            title: 'Oops!',
            text: 'Google sign-in worked, but we couldn’t save your data.',
            icon: 'error',
            confirmButtonColor: '#ef4444',
          });
        }
      })
      .catch((error) => {
        console.log('Error signing in with Google:', error);
        Swal.fire({
          title: 'Google Sign-in Failed',
          text: error.message,
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-outline mt-4 w-full"
      >
        <FcGoogle className="text-2xl" />
        Google
      </button>
    </div>
  );
};
