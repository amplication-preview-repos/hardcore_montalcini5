import { Repository } from "../repository/Repository";

export type Bug = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  severity?: "Option1" | null;
  status?: "Option1" | null;
  repository?: Repository | null;
};
