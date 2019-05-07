import React from "react";
import { useStyles, Theme } from "bridge-react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router";

import { TabLink, Tabs } from "bridge-react";
import Designers from "./Checklist/Designers";
import Programadores from "./Checklist/Programadores";
import Editores from "./Checklist/Editores";
import QA from "./Checklist/QA";
import Gestores from "./Checklist/Gestores";

function TabChecklist() {
  const { classes } = useStyles(createStyles);
  return (
    <>
      <MemoryRouter initialEntries={["/Checklist/Designers"]} initialIndex={1}>
        <div className={classes.divider}>
          {" "}
          <Tabs>
            <TabLink to="/Checklist/Designers">Designers</TabLink>
            <TabLink to="/Checklist/Programadores">Programadores</TabLink>
            <TabLink to="/Checklist/Gestores">Gestores de Projeto</TabLink>
            <TabLink to="/Checklist/QA">QA - Garantia de Qualidade</TabLink>
            <TabLink to="/Checklist/Editores">Editores</TabLink>
          </Tabs>
        </div>

        <Switch>
          <Route path={`/Checklist/Designers`} component={Designers} />
          <Route path={`/Checklist/Programadores`} component={Programadores} />
          <Route path={`/Checklist/Editores`} component={Editores} />
          <Route path={`/Checklist/QA`} component={QA} />
          <Route path={`/Checklist/Gestores`} component={Gestores} />
          <Redirect exact from={`/`} to={`/Checklist/Designers`} />
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
