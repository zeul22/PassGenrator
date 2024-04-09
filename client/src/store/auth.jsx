import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const storeToken = (serverToken) => {
    setToken(localStorage.getItem("accessToken"));
    return localStorage.setItem("accessToken", serverToken);
  };

  let isloggedin = !!token;
  //   console.log("value within auth", isloggedin);
  //   console.log(localStorage.getItem("accessToken"));

  const logoutUser = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isloggedin,token,setToken, storeToken, logoutUser }}>
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
