import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REPOSITORY_TITLE_FIELD } from "../repository/RepositoryTitle";

export const FileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Files"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="fileContent" source="fileContent" />
        <ReferenceField
          label="Repository"
          source="repository.id"
          reference="Repository"
        >
          <TextField source={REPOSITORY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
