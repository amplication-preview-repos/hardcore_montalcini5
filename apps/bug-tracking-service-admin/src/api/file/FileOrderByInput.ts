import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  fileContent?: SortOrder;
  repositoryId?: SortOrder;
};
