import { Heading, Theme, useStyles, VFlow } from "bold-ui";
import React from "react";
import image from "../static/image/permanente.png";

function Permanente() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <div className={classes.graySection}>
        <Heading level={3}>Muitas vezes a exclusão é permanente</Heading>
        <p className={classes.pSmall}>
          No Brasil, 23,9% da população possui alguma deficiência permanente. A
          imagem abaixo apresenta exemplos de exclusões permanentes.
        </p>
        <img
          style={{ mixBlendMode: "multiply" }}
          src={image}
          alt="Desenho de quatro pessoas com exclusões permanentes. Da esquerda para direita: A primeira só tem um braço; A segunda é cega e tem um cão guia ao seu lado; A terceira é surda e a quarta é muda."
        />
      </div>
    </VFlow>
  );
}

export default Permanente;

function createStyles(theme: Theme) {
  return {
    graySection: {
      margin: "1rem",
      padding: "1rem ",
      backgroundColor: theme.pallete.gray.c90
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14,
      maxWidth: "400px",
      margin: "1rem auto 3rem"
    }
  };
}
