import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type WikiCreateInput = {
  content?: string | null;
  repository?: RepositoryWhereUniqueInput | null;
};
