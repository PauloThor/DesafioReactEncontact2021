import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021",
});

export default api;
