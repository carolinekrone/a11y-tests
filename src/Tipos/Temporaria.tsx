import React from "react";

import { VFlow, Heading, useStyles, Theme } from "bridge-react";

function Temporaria() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <div className={classes.graySection}>
        <Heading level={3}>Às vezes a exclusão é temporária</Heading>
        <p className={classes.pSmall}>
          Mesmo uma lesão ou contexto de curto prazo afeta a maneira como as
          pessoas interagem com o mundo ao seu redor, mesmo que apenas por um
          curto período de tempo. Pense em olhar para uma luz brilhante, usar um
          elenco ou pedir um jantar em um país estrangeiro.
        </p>
        <img
          style={{ mixBlendMode: "multiply" }}
          src={require("/Users/Carol/Documents/GitHub/a11y-tests/src/static/image/temporaria.png")}
          alt="Desenho de quatro pessoas com exclusões temporarias. Da esquerda para direita: A primeira tem um braço quebrado e usa gesso; A segunda tem catarata e usa bengala; A terceira possui infecção no ouvido e a quarta possui laringite."
        />
      </div>
    </VFlow>
  );
}

export default Temporaria;

function createStyles(theme: Theme) {
  return {
    graySection: {
      margin: "1rem ",
      padding: "1rem ",
      backgroundColor: theme.pallete.gray.c90
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14,
      margin: "1rem 20rem 3rem 20rem"
    }
  };
}
