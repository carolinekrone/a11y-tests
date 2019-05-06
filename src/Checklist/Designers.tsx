import React from "react";

import { Checkbox, VFlow, Grid, Cell, useStyles, Theme } from "bridge-react";

function Designers() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <Grid className={classes.graySection}>
        <Cell>
          <Checkbox label="Verifique se há contraste suficiente entre o texto e sua cor de fundo" />
          <p className={classes.pSmall}>
            De acordo com as WCAG, a relação de contraste entre texto e fundo do
            texto deve ser de pelo menos 4,5 para 1. Se a sua fonte for pelo
            menos 24 px ou 19 px em negrito, o mínimo cai para 3 para 1 (vale a
            pena notar que isto é um pouco confuso porque os tamanhos numerados
            nem sempre refletem o tipo de tamanho visual). Tenha especial
            cuidado com o texto sobre as imagens.
          </p>
        </Cell>
        <Cell>
          <Checkbox label="Não utilize somente cor para transmitir infrmações importantes" />
          <p className={classes.pSmall}>
            Deve haver outro indicador (como ícones para acompanhar o código de
            cores ou um sublinhado no texto vinculado) para que as pessoas que
            não conseguem diferenciar as cores facilmente consigam entender e
            usar seu conteúdo.
          </p>
        </Cell>
      </Grid>
    </VFlow>
  );
}

export default Designers;

function createStyles(theme: Theme) {
  return {
    graySection: {
      margin: "1rem 0",
      backgroundColor: theme.pallete.gray.c90
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14,
      margin: "1rem 20rem 1rem 3rem"
    }
  };
}
