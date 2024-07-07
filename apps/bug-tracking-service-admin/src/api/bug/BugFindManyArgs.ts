import { BugWhereInput } from "./BugWhereInput";
import { BugOrderByInput } from "./BugOrderByInput";

export type BugFindManyArgs = {
  where?: BugWhereInput;
  orderBy?: Array<BugOrderByInput>;
  skip?: number;
  take?: number;
};
