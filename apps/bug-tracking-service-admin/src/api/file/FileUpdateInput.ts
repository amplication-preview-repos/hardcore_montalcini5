import { InputJsonValue } from "../../types";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type FileUpdateInput = {
  fileName?: string | null;
  fileContent?: InputJsonValue;
  repository?: RepositoryWhereUniqueInput | null;
};
