import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BugCreateInput = {
  title?: string | null;
  description?: string | null;
  severity?: "Option1" | null;
  status?: "Option1" | null;
  repository?: RepositoryWhereUniqueInput | null;
};
