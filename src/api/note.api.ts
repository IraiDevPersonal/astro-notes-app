import axios from "axios";

export const noteApi = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
