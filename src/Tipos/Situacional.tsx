import React from "react";

import { VFlow, Heading, useStyles, Theme } from "bridge-react";

function Situacional() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <div className={classes.graySection}>
        <Heading level={3}>Às vezes a exclusão é situacional</Heading>
        <p className={classes.pSmall}>
          Conforme as pessoas se movem através de diferentes ambientes, suas
          habilidades também podem mudar drasticamente. Em uma multidão
          barulhenta, eles não podem ouvir bem. Em um carro, sua visão é
          limitada. Novos pais passam muito do seu dia fazendo tarefas com uma
          só mão. Um dia avassalador pode causar sobrecarga sensorial. O que é
          possível, seguro e apropriado está em constante mudança.
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

export default Situacional;

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
