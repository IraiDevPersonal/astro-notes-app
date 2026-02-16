export type NoteModel = {
  id: string;
  order: number;
  title: string;
  content: string;
  folderId: string;
  isPinned: boolean;
  updatedAt: string;
  createdAt: string;
  comentsCounts: number;
  owner: {
    id: string;
    email: string;
    userName: string;
    fullName: string;
  };
  sharedWith: {
    count: number;
    users: [];
  };
  modifiedBy: string;
};

export type NoteResponseModel = {
  data: NoteModel;
};
