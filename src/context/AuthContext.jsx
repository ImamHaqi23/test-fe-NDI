import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, isDarkMode, setIsDarkMode }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
