import type { SharedUserModel } from "../models/shared-user.model";
import { sharedUserSchema } from "../schemas/shared-user.schema";

export class SharedUserMapper {
  static map(raw: unknown): SharedUserModel {
    const { data, success, error } = sharedUserSchema.safeParse(raw);

    if (!success) {
      throw new Error(error.message);
    }

    return {
      id: data.id,
      email: data.email,
      userName: data.userName,
      fullName: data.fullName,
    };
  }
}
