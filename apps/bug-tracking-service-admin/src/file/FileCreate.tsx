import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RepositoryTitle } from "../repository/RepositoryTitle";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileName" source="fileName" />
        <div />
        <ReferenceInput
          source="repository.id"
          reference="Repository"
          label="Repository"
        >
          <SelectInput optionText={RepositoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
