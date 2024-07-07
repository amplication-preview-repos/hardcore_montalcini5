import { Bug as TBug } from "../api/bug/Bug";

export const BUG_TITLE_FIELD = "title";

export const BugTitle = (record: TBug): string => {
  return record.title?.toString() || String(record.id);
};
