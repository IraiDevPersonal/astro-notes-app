import { HttpClient } from "@/lib/http-client";

export const noteApi = new HttpClient({
  baseURL: "http://localhost:3000/api/v1",
});
