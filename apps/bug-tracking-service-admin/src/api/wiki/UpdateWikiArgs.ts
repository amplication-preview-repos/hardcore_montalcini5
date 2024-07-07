import { WikiWhereUniqueInput } from "./WikiWhereUniqueInput";
import { WikiUpdateInput } from "./WikiUpdateInput";

export type UpdateWikiArgs = {
  where: WikiWhereUniqueInput;
  data: WikiUpdateInput;
};
