import { Checkbox, Theme, useStyles, VFlow } from "bold-ui";
import React from "react";

function Gestores() {
  const { classes } = useStyles(createStyles);

  return (
    <VFlow>
      <ul className={classes.graySection} style={{ listStyle: "none" }}>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Familiarize-se com o trabalho associado a tornar o conteúdo acessível"
          />
          <p className={classes.pSmall}>
            Temos diretrizes para design, engenharia e testes de controle de
            qualidade. Leia os requisitos e esteja ciente das verificações e
            padrões que a QA estará procurando em seus produtos.
          </p>
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Destine tempo para acessibilidade durante o planejamento do projeto e planejamento de sprints"
          />
          <p className={classes.pSmall}>
            Acessibilidade não é um item de lista de verificação que só precisa
            ser considerado em alguns projetos ou no final de um processo. Essas
            práticas devem ser incorporadas em cada etapa de um projeto e função
            em uma equipe. Certifique-se de que você é responsável por isso
            durante o planejamento de projetos e sprints.
          </p>
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Ao compartilhar um bom trabalho feito por sua equipe, elogie os esforços para aumentar a acessibilidade"
          />
          <p className={classes.pSmall}>
            Todos gostamos de ouvir nosso trabalho reconhecido. Além de celebrar
            belos designs, códigos elegantes, retornos rápidos, experiências
            estelares - chame a atenção e elogie o trabalho realizado por sua
            equipe para tornar o conteúdo mais acessível. Fale alto contraste,
            um sistema de navegação de teclado inteligente ou cópia e hierarquia
            claras.
          </p>
        </li>
        <li>
          <Checkbox
            style={classes.checkbox}
            label="Seja um defensor da acessibilidade"
          />
          <p className={classes.pSmall}>
            Explique à sua equipe e às partes interessadas por que a
            acessibilidade é importante e deve ser uma prioridade em cada
            trabalho que sua equipe assume. Isso torna nossos produtos - e
            nossas equipes - melhores.
          </p>
        </li>
      </ul>
    </VFlow>
  );
}

export default Gestores;

function createStyles(theme: Theme) {
  return {
    graySection: {
      alignContent: "center",
      padding: "2% 2%",
      backgroundColor: theme.pallete.gray.c90
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14,
      maxWidth: "600px",
      margin: "0.5rem 2rem 2rem"
    },
    checkbox: {
      fontSize: "1rem"
    }
  };
}
