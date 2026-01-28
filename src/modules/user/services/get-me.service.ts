import { noteApi } from "@/api/note.api";
import type { MeModel } from "../models/me.model";

export async function getMeService() {
  try {
    const { data } = await noteApi.get<{ data: MeModel }>("/me");
    return data.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}
