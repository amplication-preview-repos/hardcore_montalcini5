import { Wiki as TWiki } from "../api/wiki/Wiki";

export const WIKI_TITLE_FIELD = "id";

export const WikiTitle = (record: TWiki): string => {
  return record.id?.toString() || String(record.id);
};
