import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const token = cookies.get("JWTcookie");
// console.log(token)
// 192.168.1.21
const instance = axios.create({
  baseURL: "https://busy-erin-raven-vest.cyclic.app/api",
  timeout: 5000,
  headers: { Authorization: "Bearer " + token },
});

// const baseUrl=""
export const getReq = async (path) => {
  try {
    const response = await instance.get(`/${path}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const postReq = async (path, body) => {
  try {
    const response = await instance.post(`/${path}`, body);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const delReq = async (path, param) => {
  try {
    const response = await instance.delete(`/${path}/${param}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const patchReq = async (path, body, id) => {
  try {
    const response = await instance.patch(`/${path}/${id}`, body);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const putReq = async (path, body, id) => {
  try {
    const response = await instance.put(`/${path}/${id}`, body);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn(error);
  }
};
