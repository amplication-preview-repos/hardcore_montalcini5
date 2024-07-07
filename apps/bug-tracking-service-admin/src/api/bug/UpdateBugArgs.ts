import { BugWhereUniqueInput } from "./BugWhereUniqueInput";
import { BugUpdateInput } from "./BugUpdateInput";

export type UpdateBugArgs = {
  where: BugWhereUniqueInput;
  data: BugUpdateInput;
};
