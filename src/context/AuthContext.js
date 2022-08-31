import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = (email, password, firstName, lastName) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      userData: { firstName, lastName, email, password },
      favorites: [],
      inCart: [],
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    // localStorage.removeItem("name");
    localStorage.removeItem("photo");
    localStorage.removeItem("email");
    return signOut(auth);
  };

  async function resetPassword(email) {
    const a = await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent");
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscibe();
    };
  });

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logOut,
        user,
        resetPassword,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

const navigate = useNavigate;

export const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
      const firstname = re._tokenResponse.firstName;
      const lastname = re._tokenResponse.lastName;
      const email = re._tokenResponse.email;
      const photo = re.user.photoURL;
      console.log("Email is " + email);
      console.log("Photo is " + photo);
      console.log("First Name " + firstname);
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
      const firstname = re._tokenResponse.firstName;
      const lastname = re._tokenResponse.lastName;
      const email = re.user.email;
      const photo = re.user.photoURL;
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
    })
    .catch((err) => {
      console.log(err);
    });
};
