import { useContext } from "react";
import { User, UserContext } from "../authContext";
import axios from "axios";
import { API_BASE_URL } from "../../configs/environmentConfigurations";
import { useNavigate } from "react-router-dom";
import { accessTokenKey, refreshTokenKey } from "../../envconfig";

export const useAuth = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const login = async (userData: any) => {
    await axios.post(`${API_BASE_URL}/signin`, userData).then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
        return;
      }
      const { meta } = res.data;
      localStorage.setItem(accessTokenKey, meta.accessToken);
      localStorage.setItem(refreshTokenKey, meta.refreshToken);
      const user: User = {
        name: meta?.name,
        email: meta?.email,
        role: meta?.role,
      };
      console.log(user, "user method");
      setUser(user);
      navigate("/home");
    });
  };

  const logout = () => setUser(null);

  return { login, logout };
};
