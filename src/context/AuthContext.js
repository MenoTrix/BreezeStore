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
      value={{ signUp, login, logOut, user, resetPassword, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
      const name = re.user.displayName;
      const email = re.email.email;
      const photo = re.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
    })
    .catch((err) => {
      console.log(err);
    });
};
