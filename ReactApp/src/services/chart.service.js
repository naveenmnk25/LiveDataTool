import axios from "axios";
import authHeader from "./auth-header";
import { BaseConfig } from "../config/AppConfig";

const getData = () => {
  return axios.get(BaseConfig.apiUrl + "all");
};

const postData = (data) => {
  return axios.get(BaseConfig.apiUrl + "/Factory/Update", { headers: { 'Content-Type': 'application/json' },body: JSON.stringify(data) });
};

const chartService = {
  getData,
  postData
};

export default chartService