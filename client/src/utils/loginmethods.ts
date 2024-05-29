import { useContext } from "react";
import { User, UserContext } from "../authContext";

export const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => setUser(null);

  return { login, logout };
};
