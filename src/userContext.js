import React, { createContext, useState, useContext } from "react";
import { Auth } from "aws-amplify";

const getCognitoLs = () =>
  localStorage.getItem(
    "CognitoIdentityServiceProvider.498bict7ngi1ree37i4298utov.454168e2-5d07-4a20-8341-76b2784d10be.idToken"
  );

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: Boolean(getCognitoLs())
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useSetUser = () => {
  const { setUser } = useContext(UserContext);
  return setUser;
};
