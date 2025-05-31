import { createContext, useState, useContext } from "react";

const Session = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Predefined credentials
    const validUsers = {
      admin: "admin123",
      user: "user123"
    };

    if (validUsers[username] === password) {
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <Session.Provider value={{ user, login, logout }}>
      {children}
    </Session.Provider>
  );
};

export const Session = () => useContext(Session);
