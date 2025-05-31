import { createContext, useState, useContext } from "react";

// Create context
const SessionContext = createContext();

// Context provider
export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Predefined logins
  const users = {
    admin: "admin123",
    user: "user123",
  };

  // Login method
  const login = (username, password) => {
    if (users[username] && users[username] === password) {
      setUser(username);
      return true;
    }
    return false;
  };

  // Logout method
  const logout = () => {
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to access session context
export const useSession = () => {
  return useContext(SessionContext);
};
