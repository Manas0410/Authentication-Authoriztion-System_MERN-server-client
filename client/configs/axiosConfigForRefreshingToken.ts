import axios from "axios";

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

  //  configure reeposnse after responswe.
  urlConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalReq = error.config;
    }
  );
};

export default axiosConfigForRefreshingTheToken;
