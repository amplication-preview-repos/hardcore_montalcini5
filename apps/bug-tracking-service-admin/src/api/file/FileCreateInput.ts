import { InputJsonValue } from "../../types";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type FileCreateInput = {
  fileName?: string | null;
  fileContent?: InputJsonValue;
  repository?: RepositoryWhereUniqueInput | null;
};
