import { Cell, Checkbox, Grid, Theme, useStyles, VFlow } from "bridge-react";
import React from "react";

function Designers() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <Grid className={classes.graySection}>
        <Cell>
          <Checkbox
            style={classes.checkbox}
            label="Verifique se há contraste suficiente entre o texto e sua cor de fundo"
          />
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
          <Checkbox
            style={classes.checkbox}
            label="Não utilize somente cor para transmitir informações importantes"
          />
          <p className={classes.pSmall}>
            Deve haver outro indicador (como ícones para acompanhar o código de
            cores ou um sublinhado no texto vinculado) para que as pessoas que
            não conseguem diferenciar as cores facilmente consigam entender e
            usar seu conteúdo.
          </p>
        </Cell>
        <Cell>
          <Checkbox
            style={classes.checkbox}
            label="Projete estados de foco para ajudar os usuários a navegar e entender onde eles estão"
          />
          <p className={classes.pSmall}>
            Seus projetos nunca devem ocultar ativamente os estados de foco.
            Quando as pessoas usam o teclado para navegar, seu produto deve
            incluir estados de foco altamente visíveis.
          </p>
        </Cell>
        <Cell>
          <Checkbox
            style={classes.checkbox}
            label="Escreva um bom texto alternativo para suas imagens"
          />
          <p className={classes.pSmall}>
            Descreva todos os elementos que explicam o que está acontecendo na
            imagem, em vez de apenas definir o texto alternativo como "imagem".
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
    },
    checkbox: {
      fontSize: "0.875rem"
    }
  };
}
