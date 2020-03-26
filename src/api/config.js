import axios from "axios";
import https from "https";

export const BASE_URL = "http://3.134.252.39:5005/api/";


const headers = {
    // "Content-Type": "multipart/form-data",
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // "crossorigin": "true",
    // 'Access-Control-Allow-Credentials':true
};

const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
})

instance.interceptors.request.use(
    function(request) {
        request.config = { headers: { "Content-Type": "multipart/form-data" } };

        return request;
    },
    function(error) {
        return Promise.reject(error);
    }
)


export default instance;