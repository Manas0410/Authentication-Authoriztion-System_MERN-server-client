import axios from "axios";

const axiosConfigForRefreshingTheToken = () => {
  // creting config for url that needs token for authentication
  // const urlConfig = axios.create({
  //   baseURL: "url",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // configure req before api call
  axios.interceptors.request.use((request) => {
    console.log("before req");
    return request;
  });

  //  configure reeposnse after responswe.
  axios.interceptors.response.use((response) => {
    console.log(response, "after res");
    return response;
  });
};

export default axiosConfigForRefreshingTheToken;
