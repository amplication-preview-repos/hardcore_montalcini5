import { SortOrder } from "../../util/SortOrder";

export type BugOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  severity?: SortOrder;
  status?: SortOrder;
  repositoryId?: SortOrder;
};
