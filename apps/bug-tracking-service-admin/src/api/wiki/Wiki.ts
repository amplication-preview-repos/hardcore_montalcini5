import { Repository } from "../repository/Repository";

export type Wiki = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  repository?: Repository | null;
};
