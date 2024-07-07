import { BugCreateNestedManyWithoutRepositoriesInput } from "./BugCreateNestedManyWithoutRepositoriesInput";
import { FileCreateNestedManyWithoutRepositoriesInput } from "./FileCreateNestedManyWithoutRepositoriesInput";
import { WikiCreateNestedManyWithoutRepositoriesInput } from "./WikiCreateNestedManyWithoutRepositoriesInput";

export type RepositoryCreateInput = {
  name?: string | null;
  description?: string | null;
  bugs?: BugCreateNestedManyWithoutRepositoriesInput;
  files?: FileCreateNestedManyWithoutRepositoriesInput;
  wikis?: WikiCreateNestedManyWithoutRepositoriesInput;
};
