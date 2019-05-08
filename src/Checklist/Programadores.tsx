import { Cell, Checkbox, Grid, Theme, useStyles, VFlow } from "bridge-react";
import React from "react";

function Programadores() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <Grid className={classes.graySection}>
        <Cell>
          <Checkbox label="Use o elemento HTML correto para seu conteúdo" />
          <p className={classes.pSmall}>
            Os elementos HTML comunicam ao navegador que tipo de conteúdo eles
            contêm e como o navegador deve processar ou tratar esse conteúdo. A
            árvore de acessibilidade é construída a partir de suposições sobre
            os elementos e sua estrutura. Este é o recurso do navegador que
            alimenta os leitores de tela. A escolha do elemento correto para o
            contexto atual é uma maneira simples de criar uma boa base para suas
            experiências.
          </p>
        </Cell>
        <Cell>
          <Checkbox label="Suporte navegação por teclado" />
          <p className={classes.pSmall}>
            Navegadores suportam tabulação através de link, formulário,
            elementos de botão. Essa é uma maneira fácil de navegar pela página,
            mas é muito fácil atrapalhar acidentalmente essa funcionalidade:
            confiando no CSS para mover elementos, em vez de reordenar o HTML;
            ocultando elementos do fluxo de abas, falsificando botões (com
            Javascript) em vez de usar elementos de botão ou desativando a aba
            via tabindex = ”- 1”; e ocultando elementos de formulário (em uma
            interface com guias), mas não removendo-os do fluxo da guia (para
            que os elementos de formulário ocultos possam ser focalizados).
          </p>
        </Cell>
        <Cell>
          <Checkbox label="Entenda e use marcos HTML" />
          <p className={classes.pSmall}>
            As pessoas que usam dispositivos auxiliares podem não querer
            examinar seu conteúdo linearmente, em vez disso, preferem usar uma
            visualização de estrutura de tópicos (gerada a partir da marcação)
            para encontrar o conteúdo relevante para suas necessidades atuais.
            Esses pontos de referência, como main e form e navigation ajudam a
            definir áreas específicas que um usuário pode querer procurar e pode
            economizar muito tempo.
          </p>
        </Cell>
        <Cell>
          <Checkbox label="Escreva um bom texto alternativo para suas imagens" />
          <p className={classes.pSmall}>
            Descreva todos os elementos que explicam o que está acontecendo na
            imagem, em vez de apenas definir o texto alternativo como "imagem".
            Se você tiver que usar uma imagem de texto, certifique-se de
            descrever o design, se relevante, assim como todas as palavras da
            imagem.
          </p>
        </Cell>
        <Cell>
          <Checkbox label="" />
          <p className={classes.pSmall} />
        </Cell>
      </Grid>
    </VFlow>
  );
}

export default Programadores;

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
