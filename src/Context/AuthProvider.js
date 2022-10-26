import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //create-user-google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // create-user-github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
 
  //update user Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // current user catching
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user === null) {
        console.log("user inside state change", currentUser);
        setUser(currentUser);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    googleLogin,
    githubLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;