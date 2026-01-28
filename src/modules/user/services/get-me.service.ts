import { noteApi } from "@/api/note.api";
import type { MeModel } from "../models/me.model";

export async function getMeService() {
  return await noteApi.get<{ data: MeModel }>("/me");
}
