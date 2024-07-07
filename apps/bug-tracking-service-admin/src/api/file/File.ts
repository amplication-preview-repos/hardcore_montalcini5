import { JsonValue } from "type-fest";
import { Repository } from "../repository/Repository";

export type File = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  fileContent: JsonValue;
  repository?: Repository | null;
};
