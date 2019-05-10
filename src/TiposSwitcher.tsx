import { Button, ButtonGroup, Text } from "bold-ui";
import React, { useState } from "react";
import Permanente from "./Tipos/Permanente";
import Situacional from "./Tipos/Situacional";
import Temporaria from "./Tipos/Temporaria";

function TiposSwitcher() {
  const [active, setActive] = useState("Permanente");

  return (
    <>
      <ButtonGroup>
        <Button
          skin="default"
          size="small"
          onClick={() => setActive("Permanente")}
          kind={active === "Permanente" ? "primary" : "normal"}
        >
          <Text>Permanente</Text>
        </Button>
        <Button
          skin="default"
          size="small"
          onClick={() => setActive("Temporaria")}
          kind={active === "Temporaria" ? "primary" : "normal"}
        >
          <Text>Temporária</Text>
        </Button>
        <Button
          skin="default"
          size="small"
          onClick={() => setActive("Situacional")}
          kind={active === "Situacional" ? "primary" : "normal"}
        >
          <Text>Situacional</Text>
        </Button>
      </ButtonGroup>

      {active === "Permanente" && <Permanente />}
      {active === "Temporaria" && <Temporaria />}
      {active === "Situacional" && <Situacional />}
    </>
  );
}

export default TiposSwitcher;
