import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:7000/",
  });
};

export const baseAxios = () => {
  return axios.create({
    baseURL: "http://localhost:7000/",
  });
};
