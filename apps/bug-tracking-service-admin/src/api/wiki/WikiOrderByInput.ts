import { SortOrder } from "../../util/SortOrder";

export type WikiOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  repositoryId?: SortOrder;
};
