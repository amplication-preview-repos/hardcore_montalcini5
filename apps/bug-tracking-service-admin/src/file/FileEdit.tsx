import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RepositoryTitle } from "../repository/RepositoryTitle";

export const FileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
