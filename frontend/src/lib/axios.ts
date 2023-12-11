import axios from "axios";

const API_URL = "http://192.168.0.247:26951";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'authorization': ''
    }
});


export const setAuthHeader = (token: string) => {
    api.interceptors.request.use(
        config => {
        config.headers['authorization'] = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
};

export const removeAuthHeader = () => {
    api.interceptors.request.use(
        config => {
        config.headers['authorization'] = '';
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
};