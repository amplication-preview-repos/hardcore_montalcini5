import { Bug } from "../bug/Bug";
import { File } from "../file/File";
import { Wiki } from "../wiki/Wiki";

export type Repository = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  bugs?: Array<Bug>;
  files?: Array<File>;
  wikis?: Array<Wiki>;
};
