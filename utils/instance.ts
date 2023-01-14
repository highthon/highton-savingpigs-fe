import axios from "axios";

export const instance = axios.create({
  baseURL: "https://port-0-highton-be-19k5ygi525lcvkp8l5.gksl2.cloudtype.app/",
  timeout: 10000,
});