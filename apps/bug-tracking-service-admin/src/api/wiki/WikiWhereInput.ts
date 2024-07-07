import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type WikiWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  repository?: RepositoryWhereUniqueInput;
};
