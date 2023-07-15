import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

const token = localStorage.getItem("token");

AxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("hola");
    // token && (config.headers["Authorization"] = `Bearer ${token}`)

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("e dey here");
    console.log(response);
    return { ...response, data: { ...response.data, userId: 10 } };
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default AxiosInstance;
