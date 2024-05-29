import { useContext } from "react";
import { User, UserContext } from "../authContext";
import axios from "axios";
import { API_BASE_URL } from "../../configs/environmentConfigurations";

export const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const login = async (userData: any) => {
    await axios.post(`${API_BASE_URL}/signin`, userData).then((res) => {});
    // setUser(userData);
  };

  const logout = () => setUser(null);

  return { login, logout };
};
