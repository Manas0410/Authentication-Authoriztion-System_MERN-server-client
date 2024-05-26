import { useContext } from "react";
import { User, UserContext } from "../authContext";

const context = useContext(UserContext);

if (!context) {
  throw new Error("useAuth must be used within a UserContextProvider");
}

const { setUser } = context;

export const login = (userData: User) => {
  setUser(userData);
};

export const logout = () => setUser(null);
