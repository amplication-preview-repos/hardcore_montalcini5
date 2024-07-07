import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type FileWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  fileContent?: JsonFilter;
  repository?: RepositoryWhereUniqueInput;
};
