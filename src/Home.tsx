import {
  Cell,
  Grid,
  Heading,
  Icon,
  Link,
  Theme,
  useStyles,
  VFlow
} from "bold-ui";
import React from "react";
import FormDemo from "./Form";
import { MenuDropdownButton } from "./MenuDropdownButton";
import TabChecklist from "./TabChecklist";
import TiposSwitcher from "./TiposSwitcher";

function Home() {
  const { classes } = useStyles(createStyles);

  return (
    <>
      <a
        href="#content"
        className={classes.skiplink}
        tabIndex={1}
        style={{ position: "absolute" }}
      >
        Pular para o conteúdo principal
      </a>
      <header className={classes.header}>
        <Grid direction="row" justifyContent="space-between">
          <Cell xs={6} lg={6} alignSelf="center">
            <img
              src={require("./static/image/logo-Ad.svg")}
              alt="Logo Acessibilidade Digital"
            />
          </Cell>
          <Cell xs={2} lg={2} alignSelf="center">
            <MenuDropdownButton />
          </Cell>
        </Grid>
      </header>
      <VFlow>
        <div id="content" role="main">
          <section className={classes.section} id="acessibilidade">
            <Grid wrap direction="row" gap={10}>
              <Cell xs={12} lg={6} alignSelf="center">
                <div>
                  <Heading level={1}>
                    Faça projetos melhores para mais pessoas
                  </Heading>
                  <p className={classes.pBig}>
                    Nós criamos esse site para introduzir você no assunto da
                    acessibilidade digital. Aqui você vai entender mais sobre os
                    tipos de deficiência e sobre as responsabilidades de cada
                    pessoa envolvida em um projeto digital. Também criamos uma
                    sessão com recursos que são úteis para quem está começando
                    na área.
                  </p>
                </div>
              </Cell>
              <Cell xs={12} lg={6}>
                <img
                  style={{ maxWidth: 526, maxHeight: 323 }}
                  src={require("./static/image/default.png")}
                  alt="Ilustração de duas pessoas. Uma está sentada no canto esquerdo da imagem segurando um tablet e a outra é cadeirante e está no canto esquerdo da imagem interagindo com um painel que contém circulos. "
                />
              </Cell>
            </Grid>
          </section>
          <section className={classes.blueSection} id="definicao">
            <Grid direction="row" wrap>
              <Cell xs={12} lg={5} alignSelf="center">
                <Heading level={2}>O que é acessiblidade?</Heading>
                <blockquote
                  className={classes.blockquote}
                  cite="https://www.who.int/topics/disabilities/en"
                >
                  É a qualidade que torna uma experiência aberta a todos.
                </blockquote>
                <p className={classes.p}>
                  A deficiência não é apenas um problema de saúde. É um fenômeno
                  complexo, refletindo a interação entre as características do
                  corpo de uma pessoa e as características da sociedade em que
                  ela vive. Saiba mais no site da{" "}
                  <Link
                    style={{ color: "white" }}
                    href="https://www.w3.org/WAI/"
                    target="_blank"
                    alt="Web Accessibility Initiative"
                  >
                    WAI.
                  </Link>
                </p>
              </Cell>
              <Cell xs={12} sm={6} lg={7}>
                <img
                  style={{ maxWidth: 526, maxHeight: 285, marginLeft: "7rem" }}
                  src={require("./static/image/acessibilidade.png")}
                  alt="Ilustração de uma pessoa cega atravessando uma faixa de pedestre com o auxílio de uma bengala."
                />
              </Cell>
            </Grid>
          </section>
          <section
            className={classes.section}
            style={{ textAlign: "center" }}
            id="tipos"
          >
            <Grid direction="column" gapVertical={2} alignItems="center">
              <Cell xs={12} lg={6}>
                <Heading level={2}>Tipos de deficiência</Heading>
              </Cell>
              <Cell xs={8} sm={8} lg={6}>
                <div>
                  <p className={classes.p}>
                    A deficiência é dependente do contexto e a exclusão física,
                    cognitiva e social é o resultado de interações
                    incompatíveis. E pode ser classificada em três grupos:
                    Permanente, temporária e situacional.
                  </p>
                </div>
              </Cell>
              <Cell lg={8} xs={12} sm={12}>
                <TiposSwitcher />
              </Cell>
            </Grid>
          </section>
          <section className={classes.section} id="checklist">
            <VFlow>
              <Heading level={2}>Checklist para projetos acessíveis</Heading>
              <p className={classes.p}>
                Tornar o seu produto acessível cria uma experiência melhor para
                todo mundo. <br />
                Use este checklist para ajudar a checar a acessibilidade
                projeto, independentemente de sua função ou estágio de andamento
                do projeto.
              </p>
              <TabChecklist />
            </VFlow>
          </section>
          <section className={classes.section} id="dados">
            <Heading level={2}>Dados sobre deficiência no Brasil</Heading>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <Icon icon="mapFilled" fill="primary" size={3} />
                <span className={classes.pBig} style={{ paddingLeft: "2%" }}>
                  1 Bilhão = 10% de pessoas em todo mundo convivem com alguma
                  deficiência
                </span>
              </li>
              <li className={classes.li}>
                <Icon icon="mapMarkerFilled" fill="primary" size={3} />
                <span className={classes.pBig} style={{ paddingLeft: "2%" }}>
                  No Brasil, 45,6 milhões de pessoas (23,9%) têm algum tipo de
                  deficiência. Sendo:
                </span>
                <div style={{ paddingLeft: "6%" }}>
                  <p className={classes.p}>
                    <b>18,6%</b> deficiência visual
                  </p>
                  <p className={classes.p}>
                    <b>7%</b> deficiência motora
                  </p>
                  <p className={classes.p}>
                    <b>5,10%</b> deficiência auditiva
                  </p>
                  <p className={classes.p}>
                    <b>7% </b>deficiência mental ou intelectual
                  </p>
                </div>
              </li>
              <li className={classes.li}>
                <Icon icon="desktopFilled" fill="primary" size={3} />
                <span className={classes.pBig} style={{ paddingLeft: "2%" }}>
                  <b>97,8% </b>das páginas tiveram falhas detectadas na WCAG 2,
                  com uma média de <b>59,6</b> erros por página.
                </span>
              </li>
              <li className={classes.li}>
                <Icon icon="chatFilled" fill="primary" size={3} />
                <span className={classes.pBig} style={{ paddingLeft: "2%" }}>
                  De 2009 a 2017 o uso de leitor de tela{" "}
                  <b>aumentou de 12% para 88%.</b>
                </span>
              </li>
            </ul>
          </section>

          <section className={classes.section} id="recursos">
            <VFlow>
              <Heading level={2}>Recursos</Heading>
              <p className={classes.p}>
                Nós certamente não somos especialistas em termos das melhores
                abordagens para acessibilidade. A maior parte do trabalho
                realizado pela nossa equipe é baseada em uma grande quantidade
                de pesquisas e referências. Abaixo estão alguns dos nossos
                recursos favoritos.
              </p>
              <br />
              <Grid direction="row" alignItems="center">
                <Cell /> <Icon icon="link" fill="primary" />
                <Cell>
                  <Heading level={3}>Sites</Heading>
                </Cell>
              </Grid>
              <ul>
                <li className={classes.p} lang="en">
                  {" "}
                  Web Content Accessibility Guidelines (WCAG) 2.0 -{" "}
                  <Link
                    href="https://www.w3.org/TR/WCAG20/"
                    style={{ fontSize: "1rem" }}
                  >
                    W3C
                  </Link>
                </li>
                <li className={classes.p} lang="en">
                  Web Accessibility in Mind -{" "}
                  <Link href="https://webaim.org/" style={{ fontSize: "1rem" }}>
                    Webaim
                  </Link>
                </li>
                <li className={classes.p}>
                  Movimento Web para todos -{" "}
                  <Link href="http://mwpt.com.br/" style={{ fontSize: "1rem" }}>
                    MWPT
                  </Link>
                </li>
                <li className={classes.p}>
                  Todos por acessibilidade -{" "}
                  <Link
                    href="http://acessibilida.de/"
                    style={{ fontSize: "1rem" }}
                  >
                    Acessibilida.de
                  </Link>
                </li>
              </ul>
              <br />
              <Grid direction="row" alignItems="center">
                <Cell /> <Icon icon="rocket" fill="primary" />
                <Cell>
                  <Heading level={3}>Cursos</Heading>
                </Cell>
              </Grid>
              <ul>
                <li className={classes.p} lang="en">
                  Web Accessibility: Developing with Empathy -{" "}
                  <Link
                    href="https://www.udacity.com/course/web-accessibility--ud891"
                    style={{ fontSize: "1rem" }}
                  >
                    Udacity
                  </Link>
                </li>
                <br />
              </ul>

              <Grid direction="row" alignItems="center">
                <Cell /> <Icon icon="gearFilled" fill="primary" />
                <Cell>
                  <Heading level={3}>Ferramentas</Heading>
                </Cell>
              </Grid>
              <ul>
                <li className={classes.p} lang="en">
                  The Persona Spectrum -{" "}
                  <Link
                    href="https://www.microsoft.com/design/"
                    style={{ fontSize: "1rem" }}
                  >
                    Microsoft Design
                  </Link>
                </li>
                <li className={classes.p}>
                  Verificador de Contraste de Cor -
                  <Link
                    href="https://webaim.org/resources/contrastchecker/"
                    style={{ fontSize: "1rem" }}
                  >
                    Webaim
                  </Link>
                </li>
              </ul>
            </VFlow>
          </section>

          <section className={classes.newsletter} id="newsletter">
            <div style={{ textAlign: "center" }}>
              <Heading level={2}>Se inscreva na nossa newsletter</Heading>
              <p className={classes.p}>
                Receba notícias sobre o que há de mais novo em acessibilidade
                digital. <br /> Prometemos enviar somente o necessário, nada de
                spams!
              </p>
            </div>
            <div className={classes.card}>
              {" "}
              <FormDemo />
            </div>
          </section>
        </div>
      </VFlow>
      <footer className={classes.footer}>
        <Grid direction="row" wrap>
          <Cell xs={12} lg={6}>
            <img
              src={require("./static/image/logo-Ad-white.svg")}
              alt="Logo Acessibilidade Digital"
            />
            <p>Versão 1.0</p>
          </Cell>
          <Cell xs={12} lg={6} alignSelf="center">
            <p className={classes.pSmall}>
              O site Acessibilidade Digital é um Projeto de Conclusão em Design
              da Universidade Federal de Santa Catarina, produzido por{" "}
              <Link
                href="https://twitter.com/carolinekrone"
                style={{ color: "white" }}
              >
                Caroline Krone
              </Link>
              . <br />
              Caso tenha alguma pergunta entre em contato pelo e-mail ou abra
              uma issue no{" "}
              <Link
                style={{ color: "white" }}
                href="https://github.com/carolinekrone/a11y-tests"
                target="_blank"
                alt="Página do projeto no GitHub"
              >
                GitHub
              </Link>
              . <br />
              Este site foi construido utilizando os componentes do{" "}
              <Link
                style={{ color: "white" }}
                href="https://bold.bridge.ufsc.br/"
                target="_blank"
                alt="Design system Bold"
              >
                Design System Bold.
              </Link>
            </p>
          </Cell>
        </Grid>
      </footer>
    </>
  );
}

export default Home;

function createStyles(theme: Theme) {
  return {
    skiplink: {
      clip: "rect(1px,1px,1px,1px)",
      overflow: "hidden",
      padding: "1rem !important",
      "&: focus": {
        height: "auto",
        width: "auto",
        clip: "auto",
        backgroundColor: theme.pallete.primary.c30,
        color: theme.pallete.gray.c100,
        fontSize: "1rem"
      }
    },
    header: {
      marginBottom: "1rem",
      padding: "1% 8% 1%",
      width: "100%",
      height: "5rem",
      backgroundColor: theme.pallete.gray.c100,
      boxShadow: theme.shadows.outer[40]
    },
    section: {
      margin: "5% 8%"
    },
    blueSection: {
      padding: "5% 8%",
      backgroundColor: theme.pallete.primary.c30,
      color: theme.pallete.gray.c100
    },
    graySection: {
      margin: "0 4%",
      backgroundColor: theme.pallete.gray.c90,
      padding: "2rem 20rem"
    },
    centerSection: {
      paddingTop: "1rem",
      paddingBottom: "1rem"
    },
    p: {
      fontWeight: 400,
      fontSize: 18
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14
    },
    pBig: {
      fontWeight: 400,
      fontSize: 20,
      margin: "1% 0 5%"
    },
    ul: {
      listStyle: "none",
      margin: "1%"
    },
    li: {
      verticalAlign: "middle",
      paddingTop: "2rem"
    },
    blockquote: {
      marginLeft: "7rem",
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: "italic",
      "&::before": {
        display: "inline-block",
        content: "",
        // position: "absolute",
        margin: "0.875rem",
        left: "-1rem",
        width: "80px",
        height: "2px",
        borderTop: `2px solid ${theme.pallete.gray.c100}`
      }
    },
    newsletter: {
      alignItems: "center",
      backgroundColor: theme.pallete.primary.c10,
      padding: "4%",
      color: theme.pallete.gray.c100
    },
    card: {
      color: theme.pallete.gray.c10,
      backgroundColor: theme.pallete.gray.c100,
      boxShadow: theme.shadows.outer[160],
      borderRadius: 4,
      maxWidth: "500px",
      margin: "2rem auto",
      padding: "2rem"
    },
    block: {
      marginTop: "1rem"
    },
    footer: {
      backgroundColor: theme.pallete.gray.c10,
      color: theme.pallete.gray.c100,
      padding: "2% 8%"
    }
  };
}
