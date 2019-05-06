import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router";

import { ButtonGroup, Text, Button } from "bridge-react";
import Temporaria from "./Tipos/Temporaria";
import Permanente from "./Tipos/Permanente";
import Situacional from "./Tipos/Situacional";

function TiposSwitcher() {
  return (
    <>
      <MemoryRouter initialEntries={["/Tipos/Permanente"]} initialIndex={1}>
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
          <Route path={`/Tipos/Temporaria`} component={Temporaria} />
          <Route path={`/Tipos/Permanente`} component={Permanente} />
          <Route path={`/Tipos/Situacional`} component={Situacional} />
          <Redirect exact from={`/`} to={`/Tipos/Permanente`} />
        </Switch>
      </MemoryRouter>
    </>
  );
}

export default TiposSwitcher;
