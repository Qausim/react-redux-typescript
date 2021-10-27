import Axios from "axios";

const apiClient = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default apiClient;
