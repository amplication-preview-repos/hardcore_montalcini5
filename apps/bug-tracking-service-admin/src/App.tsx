import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RepositoryList } from "./repository/RepositoryList";
import { RepositoryCreate } from "./repository/RepositoryCreate";
import { RepositoryEdit } from "./repository/RepositoryEdit";
import { RepositoryShow } from "./repository/RepositoryShow";
import { WikiList } from "./wiki/WikiList";
import { WikiCreate } from "./wiki/WikiCreate";
import { WikiEdit } from "./wiki/WikiEdit";
import { WikiShow } from "./wiki/WikiShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { BugList } from "./bug/BugList";
import { BugCreate } from "./bug/BugCreate";
import { BugEdit } from "./bug/BugEdit";
import { BugShow } from "./bug/BugShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BugTrackingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Repository"
          list={RepositoryList}
          edit={RepositoryEdit}
          create={RepositoryCreate}
          show={RepositoryShow}
        />
        <Resource
          name="Wiki"
          list={WikiList}
          edit={WikiEdit}
          create={WikiCreate}
          show={WikiShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Bug"
          list={BugList}
          edit={BugEdit}
          create={BugCreate}
          show={BugShow}
        />
      </Admin>
    </div>
  );
};

export default App;
