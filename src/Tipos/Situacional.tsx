import { Heading, Theme, useStyles, VFlow } from "bold-ui";
import React from "react";
import image from "../static/image/situacional.png";

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
          src={image}
          alt="Desenho de quatro pessoas com exclusões situacionais. Da esquerda para direita: A primeira tem um recém nascido no colo; A segunda é um motorista distraído; A terceira é um bartender em um ambiente barulhento e a quarta usa acessórios vikings e possui um sotaque pesado."
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
