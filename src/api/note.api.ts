import { HttpClient } from "@/lib/http-client";

export const noteApi = new HttpClient("http://localhost:3000/api/v1");
