import React from "react";

import { VFlow, Heading, useStyles, Theme } from "bridge-react";

function Permanente() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <div className={classes.graySection}>
        <Heading level={3}>Muitas vezes a exclusão é permanente</Heading>
        <p className={classes.pSmall}>
          No Brasil, 23,9% da população possui alguma deficiência permanente.
        </p>
        <img
          style={{ mixBlendMode: "multiply" }}
          src={require("/Users/Carol/Documents/GitHub/a11y-tests/src/static/image/temporaria.png")}
          alt="Uma ilustração de uma pessoa olhando a tela de um computador. Ao seu lado um robo projetando as imagens na tela "
        />
      </div>
    </VFlow>
  );
}

export default Permanente;

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
