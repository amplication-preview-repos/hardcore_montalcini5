import { WikiWhereInput } from "./WikiWhereInput";
import { WikiOrderByInput } from "./WikiOrderByInput";

export type WikiFindManyArgs = {
  where?: WikiWhereInput;
  orderBy?: Array<WikiOrderByInput>;
  skip?: number;
  take?: number;
};
