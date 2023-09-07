import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
});

instance.interceptors.request.use((config) => {
    return config
})

export default instance