import { BugUpdateManyWithoutRepositoriesInput } from "./BugUpdateManyWithoutRepositoriesInput";
import { FileUpdateManyWithoutRepositoriesInput } from "./FileUpdateManyWithoutRepositoriesInput";
import { WikiUpdateManyWithoutRepositoriesInput } from "./WikiUpdateManyWithoutRepositoriesInput";

export type RepositoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  bugs?: BugUpdateManyWithoutRepositoriesInput;
  files?: FileUpdateManyWithoutRepositoriesInput;
  wikis?: WikiUpdateManyWithoutRepositoriesInput;
};
