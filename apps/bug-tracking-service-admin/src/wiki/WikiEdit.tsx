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

export const WikiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
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
