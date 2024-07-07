import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REPOSITORY_TITLE_FIELD } from "./RepositoryTitle";

export const RepositoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceManyField reference="Bug" target="repositoryId" label="Bugs">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <TextField label="severity" source="severity" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Repository"
              source="repository.id"
              reference="Repository"
            >
              <TextField source={REPOSITORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="File"
          target="repositoryId"
          label="Files"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Wiki"
          target="repositoryId"
          label="Wikis"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <ReferenceField
              label="Repository"
              source="repository.id"
              reference="Repository"
            >
              <TextField source={REPOSITORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
