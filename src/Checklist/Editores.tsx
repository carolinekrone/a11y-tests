import { Cell, Checkbox, Grid, Theme, useStyles, VFlow } from "bold-ui";
import React from "react";

function Editores() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <Grid className={classes.graySection}>
        <Cell>
          <Checkbox
            style={classes.checkbox}
            label="Seja o mais consistente e claro possível"
          />
          <p className={classes.pSmall}>
            Evite jargões e expressões idiomáticas. Use cabeçalhos para
            organizar o conteúdo.
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
        <Cell>
          <Checkbox
            style={classes.checkbox}
            label="Links devem ser descritivos"
          />
          <p className={classes.pSmall}>
            A tecnologia assistiva é capaz de encontrar todos os links em uma
            página e apresentá-los de várias formas, mas esses links são inúteis
            se for uma longa lista de links que são apenas o texto “clique
            aqui”. Uma maneira melhor é fazer com que o link descreva para onde
            o usuário irá se clicar nele, dando uma ideia do que está do outro
            lado do clique.
          </p>
        </Cell>
      </Grid>
    </VFlow>
  );
}

export default Editores;

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
      fontSize: "1rem"
    }
  };
}
