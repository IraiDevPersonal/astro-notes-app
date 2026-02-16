export type SubFolderModel = {
  id: string;
  name: string;
  order: number;
  isPinned: boolean;
  owner: {
    id: string;
    email: string;
    userName: string;
    fullName: string;
  };
  sharedWith: any[];
};
