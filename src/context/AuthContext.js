import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => setUser({ id: 1, name: "Athi" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
