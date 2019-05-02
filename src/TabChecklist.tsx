import React from "react";
import { useStyles, Theme } from "bridge-react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router";

import { TabLink, Tabs } from "bridge-react";
import Designers from "./Designers";
import Programadores from "./Programadores";

function TabChecklist() {
  const { classes } = useStyles(createStyles);
  return (
    <>
      <MemoryRouter initialEntries={["/Designers"]} initialIndex={1}>
        <div className={classes.divider}>
          {" "}
          <Tabs>
            <TabLink active={true} to="./Designers">
              Designers
            </TabLink>
            <TabLink to="./Programadores">Programadores</TabLink>
            <TabLink to="/Gestores">Gestores de Projeto</TabLink>
            <TabLink to="/QA">QA - Garantia de Qualidade</TabLink>
            <TabLink to="/Editores">Editores</TabLink>
          </Tabs>
        </div>

        <Switch>
          <Route path={`/Designers`} component={Designers} />
          <Route path={`/Programadores`} component={Programadores} />
          <Redirect exact from={`/`} to={`/Designers`} />
        </Switch>
      </MemoryRouter>
    </>
  );
}

export default TabChecklist;

function createStyles(theme: Theme) {
  return {
    divider: {
      borderBottom: `1px solid ${theme.pallete.divider}`
    }
  };
}
