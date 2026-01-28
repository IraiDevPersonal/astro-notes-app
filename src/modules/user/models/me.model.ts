export type MeModel = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  lastName: string;
  createdAt: string;
  ownerResourceCount: number;
  sharedResourceCount: number;
};

export type MeResponse = {
  data: MeModel;
};
