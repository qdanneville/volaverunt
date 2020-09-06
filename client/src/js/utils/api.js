import axios from 'axios';

const instance = axios.create({
    baseURL: "https://sandbox.qdan.io/"
})

export const addAuth = token => {
    // instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;