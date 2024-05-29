import axios from "axios";
import { useAuth } from "../src/utils/loginmethods";

const axiosConfigForRefreshingTheToken = () => {
  // creting config for url that needs token for authentication
  const urlConfig = axios.create({
    baseURL: "url",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // configure req before api call
  urlConfig.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.authorization = `JWT ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  //  configure reeposnse after api call done.
  urlConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const response = await axios.post(`/refreshToken`, {
              refreshToken,
            });
            const newAccessToken = response.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken);
            originalRequest.headers.authorization = `JWT ${newAccessToken}`;
            return axios(originalRequest);
          } catch (error) {
            const { logout } = useAuth();
            logout();
          }
        }
      }
      return Promise.reject(error);
    }
  );
};

export default axiosConfigForRefreshingTheToken;
