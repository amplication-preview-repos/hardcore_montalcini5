import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BugUpdateInput = {
  title?: string | null;
  description?: string | null;
  severity?: "Option1" | null;
  status?: "Option1" | null;
  repository?: RepositoryWhereUniqueInput | null;
};
