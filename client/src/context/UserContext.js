// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔸 loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); // 🔸 stop loading after auth check
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>; // 🔸 prevent blank crash

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
