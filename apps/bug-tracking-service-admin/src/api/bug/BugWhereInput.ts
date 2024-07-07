import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type BugWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  severity?: "Option1";
  status?: "Option1";
  repository?: RepositoryWhereUniqueInput;
};
