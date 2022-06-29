import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjkyZWI2NTY0YzBiODNkMDFjYTBhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjM0NTQ3MywiZXhwIjoxNjU2NjA0NjczfQ.QANhD3OIwdrrH9QQwnmlZkree05t7nQe3K3CJpdlUFA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});