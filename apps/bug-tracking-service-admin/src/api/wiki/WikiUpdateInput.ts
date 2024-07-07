import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type WikiUpdateInput = {
  content?: string | null;
  repository?: RepositoryWhereUniqueInput | null;
};
