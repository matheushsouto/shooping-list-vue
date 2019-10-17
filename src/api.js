import axios from "axios";
const api = axios.create();

import config from "./config/config";

api.defaults.baseURL = config.baseUrl;

export default api;
