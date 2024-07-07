import { BugWhereInput } from "./BugWhereInput";

export type BugListRelationFilter = {
  every?: BugWhereInput;
  some?: BugWhereInput;
  none?: BugWhereInput;
};
