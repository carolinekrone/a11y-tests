import React from "react";

import { Checkbox, VFlow, useStyles, Theme, Grid, Cell } from "bridge-react";

function QA() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <Grid className={classes.graySection} wrap>
        <Cell>
          <Checkbox label="Navegue somente pelo teclado" />
        </Cell>
        <Cell>
          <Checkbox label="Verifique se o foco está sempre visível e se aparece em ordem lógica (sentido natural da leitura: esquerda-direita / cima-baixo)" />
        </Cell>
        <Cell>
          <Checkbox label="Certifique se é possível acessar a todos os elementos interativos e acioná-los com a barra de espaço, a tecla Enter ou as teclas de seta" />
        </Cell>
        <Cell>
          <Checkbox label="Certifique que nenhum conteúdo fique focado fora da tela ou esteja oculto" />
        </Cell>
        <Cell>
          <Checkbox label="Verifique se a página inclui um link para ignorar o conteúdo principal" />
        </Cell>
        <Cell>
          <Checkbox label=" Conteúdo não-interativo (ex.: Títulos, ícones decorativos, campos desabilitados) não devem ser focados" />
        </Cell>
        <Cell>
          <Checkbox label="Ao abrir modais e pop-overs, o foco deve ser redirecionado à esses elementos. Ao pressionar o Esc o modal deve ser fechado e o foco deve ser voltar ao elemento anterior" />
        </Cell>
      </Grid>
    </VFlow>
  );
}

export default QA;

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
