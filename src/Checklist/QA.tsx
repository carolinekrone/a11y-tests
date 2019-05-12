import React from "react";

import { Checkbox, VFlow, useStyles, Theme } from "bold-ui";

function QA() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <ul className={classes.graySection} style={{ listStyle: "none" }}>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Navegue somente pelo teclado"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Verifique se o foco está sempre visível e se aparece em ordem lógica (sentido natural da leitura: esquerda-direita / cima-baixo)"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Certifique se é possível acessar a todos os elementos interativos e acioná-los com a barra de espaço, a tecla Enter ou as teclas de seta"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Certifique que nenhum conteúdo fique focado fora da tela ou esteja oculto"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Verifique se a página inclui um link para ignorar o conteúdo principal"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label=" Conteúdo não-interativo (ex.: Títulos, ícones decorativos, campos desabilitados) não devem ser focados"
          />
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Ao abrir modais e pop-overs, o foco deve ser redirecionado à esses elementos.
            A telca Esc fecha o modal e  retorna o foco ao elemento anterior"
          />
        </li>
      </ul>
    </VFlow>
  );
}

export default QA;

function createStyles(theme: Theme) {
  return {
    graySection: {
      alignContent: "center",
      padding: "2% 2%",
      backgroundColor: theme.pallete.gray.c90
    },
    checkbox: {
      fontSize: "1rem",
      paddingBottom: "1rem"
    }
  };
}
