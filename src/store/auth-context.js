import React, { useState, useEffect, useCallback } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

let logoutTimer;

const calculateDuration = (expirationTime) => {
  const currentTime = new Date().getTime();
  const expiredTime = new Date(expirationTime).getTime();

  const remainingTime = expiredTime - currentTime;
  return remainingTime;
};

const retriveToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateDuration(storedExpTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  } else {
    return {
      token: storedToken,
      duration: remainingTime,
    };
  }
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const login = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    const expiredDuration = calculateDuration(expirationTime);

    logoutTimer = setTimeout(logout, expiredDuration);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logout, tokenData.duration);
    }
  }, [tokenData, logout]);

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
