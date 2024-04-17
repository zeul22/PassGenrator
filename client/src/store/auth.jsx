import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [authUser, setauthUser] = useState(
    localStorage.getItem("authUser") || null
  );
  const [authDetails, setauthDetails] = useState(
    localStorage.getItem("authDetails") || null
  );
  const storeToken = (serverToken) => {
    setToken(localStorage.getItem("accessToken"));
    return localStorage.setItem("accessToken", serverToken);
  };
  const storeauthUser = (authDetails) => {
    setauthUser(localStorage.setItem("authUser"));
    return localStorage.setItem("authUser", authDetails);
  };

  let isloggedin = !!token;
  //   console.log("value within auth", isloggedin);
  //   console.log(localStorage.getItem("accessToken"));

  const logoutUser = () => {
    setToken(null);
    setauthUser(null);
    setauthDetails(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isloggedin,
        token,
        setToken,
        authUser,
        setauthUser,
        authDetails,
        setauthDetails,
        storeToken,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
