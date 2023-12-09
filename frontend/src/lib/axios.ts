import axios from "axios";

const API_URL = "http://192.168.0.247:26951";

export const api = axios.create({
    baseURL: API_URL,
});