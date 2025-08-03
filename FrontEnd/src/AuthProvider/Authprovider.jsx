import  { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  function signInWithGoogle() {
    return signInWithPopup(auth, provider);
  }

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const infos = { signInWithGoogle, user, LogOut, createUser, signInUser };

  return <Authcontext.Provider value={infos}>{children}</Authcontext.Provider>;
};
