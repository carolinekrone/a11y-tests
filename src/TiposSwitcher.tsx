import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router";

import { ButtonGroup, Text, Button } from "bridge-react";
import Temporaria from "./Temporaria";
import Permanente from "./Permanente";
import Situacional from "./Situacional";

function TiposSwitcher() {
  return (
    <>
      <MemoryRouter initialEntries={["/Permanente"]} initialIndex={1}>
        <ButtonGroup>
          <Button skin="default" kind="primary" size="small">
            <Text>Permanente</Text>
          </Button>
          <Button skin="default" size="small">
            <Text>Temporária</Text>
          </Button>
          <Button skin="default" size="small">
            <Text>Situacional</Text>
          </Button>
        </ButtonGroup>
        <Switch>
          <Route path={`/Temporaria`} component={Temporaria} />
          <Route path={`/Permanente`} component={Permanente} />
          <Route path={`/Situacional`} component={Situacional} />
          <Redirect exact from={`/`} to={`/Permanente`} />
        </Switch>
      </MemoryRouter>
    </>
  );
}

export default TiposSwitcher;
