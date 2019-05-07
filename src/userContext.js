import React, { createContext, useState, useContext, useEffect } from "react";
import { Auth } from "aws-amplify";

const getCognitoLs = () => localStorage.getItem("loggedIn");

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: Boolean(getCognitoLs())
  });
  useEffect(() => {
    const getUser = async () => {
      try {
        await Auth.currentSession();
        setUser(prev => ({ isLoggedIn: true }));
      } catch (e) {
        setUser(prev => ({ isLoggedIn: false }));
      }
    };
    getUser();
  }, []);
  const replaceState = newState => setUser(prev => ({ ...prev, ...newState }));
  return (
    <UserContext.Provider value={{ user, replaceState }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useSetUser = () => {
  const { replaceState: setUser } = useContext(UserContext);
  console.log(setUser);
  return setUser;
};
