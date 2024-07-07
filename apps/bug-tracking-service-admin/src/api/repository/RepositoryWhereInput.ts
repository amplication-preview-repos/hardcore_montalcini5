import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BugListRelationFilter } from "../bug/BugListRelationFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { WikiListRelationFilter } from "../wiki/WikiListRelationFilter";

export type RepositoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  bugs?: BugListRelationFilter;
  files?: FileListRelationFilter;
  wikis?: WikiListRelationFilter;
};
