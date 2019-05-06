import React from "react";
import { useStyles, Theme } from "bridge-react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router";

import { TabLink, Tabs } from "bridge-react";
import Designers from "./Checklist/Designers";
import Programadores from "./Checklist/Programadores";

function TabChecklist() {
  const { classes } = useStyles(createStyles);
  return (
    <>
      <MemoryRouter initialEntries={["/Checklist/Designers"]} initialIndex={1}>
        <div className={classes.divider}>
          {" "}
          <Tabs>
            <TabLink active={true} to="/Checklist/Designers">
              Designers
            </TabLink>
            <TabLink to="/Checklist/Programadores">Programadores</TabLink>
            <TabLink to="/Checklist/Gestores">Gestores de Projeto</TabLink>
            <TabLink to="/Checklist/QA">QA - Garantia de Qualidade</TabLink>
            <TabLink to="/Checklist/Editores">Editores</TabLink>
          </Tabs>
        </div>

        <Switch>
          <Route path={`/Checklist/Designers`} component={Designers} />
          <Route path={`/Checklist/Programadores`} component={Programadores} />
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
