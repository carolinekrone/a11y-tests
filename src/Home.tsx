import React from "react";
import FormDemo from "./form";
import TabChecklist from "./TabChecklist";
import TiposSwitcher from "./TiposSwitcher";
import {
  Cell,
  Grid,
  Heading,
  Link,
  Theme,
  useStyles,
  VFlow,
  DropdownButton,
  Icon
} from "bridge-react";

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
            <DropdownButton
              aria-haspopup="true"
              aria-label="Menu"
              type="button"
              size="small"
              kind="normal"
              items={[
                {
                  content: "Acessibilidade",
                  onClick: () => {}
                },
                {
                  content: "Tipos de deficiência",
                  onClick: () => {
                    window.location.replace("#definicao");
                  }
                },
                { content: "Checklist de requisitos", onClick: console.log },
                {
                  content: "Dados sobre acessibilidade",
                  onClick: console.log
                },
                { content: "Recursos", onClick: console.log },
                { content: "Newsletter", onClick: console.log }
              ]}
            >
              <Icon icon="hamburguerMenu" aria-label="Menu" />
            </DropdownButton>
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
                  style={{ width: 526, height: 323 }}
                  src={require("./static/image/default.png")}
                  alt="Ilustração de duas pessoas. Uma está sentada no canto esquerdo da imagem segurando um tablet e a outra é cadeirante e está no canto esquerdo da imagem interagindo com um painel que contém circulos. "
                />
              </Cell>
            </Grid>
          </section>
          <section className={classes.blueSection} id="definicao">
            <Grid direction="row">
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
                  style={{ width: 526, height: 285, marginLeft: "7rem" }}
                  src={require("./static/image/acessibilidade.png")}
                  alt="Ilustração de uma pessoa cega atravessando uma faixa de pedestre com o auxílio de uma bengala."
                />
              </Cell>
            </Grid>
          </section>
          <section
            className={classes.section}
            style={{ textAlign: "center" }}
            id="Tipos"
          >
            <Grid direction="column" gapVertical={2} alignItems="center">
              <Cell xs={12} lg={6}>
                <Heading level={2}>Tipos de deficiência</Heading>
              </Cell>
              <Cell xs={8}>
                <div>
                  <p className={classes.p}>
                    A deficiência é dependente do contexto e, a exclusão física,
                    cognitiva e social é o resultado de interações
                    incompatíveis. E pode ser classificada em três grupos:
                    Permanente, temporária e situacional.
                  </p>
                </div>
              </Cell>
              <Cell>
                <TiposSwitcher />
              </Cell>
            </Grid>
          </section>
          <section className={classes.section} id="Checklist">
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
          <section className={classes.section} id="Dados">
            <VFlow>
              <Heading level={2}>Dados sobre deficiência no Brasil</Heading>
              <Grid direction="row" alignItems="flex-start" wrap>
                <div>
                  <Cell lg={1} alignSelf="center">
                    <Icon icon="mapFilled" fill="primary" size={3} />
                  </Cell>
                  <Cell lg={11}>
                    {" "}
                    <p className={classes.pBig}>
                      <b>1 Bilhão</b> = 10% de pessoas em todo mundo convivem
                      com alguma deficiência
                    </p>
                  </Cell>
                </div>

                <Cell lg={1} alignSelf="flex-start">
                  <Icon
                    icon="mapMarkerFilled"
                    fill="primary"
                    size={3}
                    aria-label=""
                  />
                </Cell>
                <Cell lg={11}>
                  <p className={classes.pBig}>
                    No Brasil, <b>45,6 milhões de pessoas</b> (23,9%) têm algum
                    tipo de deficiência. Sendo:
                  </p>
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
                </Cell>
                <Cell lg={1} alignSelf="center">
                  <Icon icon="desktopFilled" fill="primary" size={3} />
                </Cell>
                <Cell lg={11}>
                  <p className={classes.pBig}>
                    <b>97,8% </b>das páginas tiveram falhas detectadas na WCAG
                    2, com uma média de <b>59,6</b> erros por página.
                  </p>
                </Cell>
                <Cell lg={1}>
                  <Icon icon="chatFilled" fill="primary" size={3} />
                </Cell>
                <Cell lg={11}>
                  <p className={classes.pBig}>
                    De 2009 a 2017 o uso de leitor de tela{" "}
                    <b>aumentou de 12% para 88%.</b>
                  </p>
                </Cell>
              </Grid>
            </VFlow>
          </section>
          <section className={classes.section}>
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
              <p className={classes.p}>
                Web Content Accessibility Guidelines (WCAG) 2.0 -{" "}
                <Link href="https://www.w3.org/TR/WCAG20/">W3C</Link>
              </p>

              <p className={classes.p}>
                Web Accessibility in Mind -{" "}
                <Link href="https://webaim.org/">Webaim</Link>
              </p>
              <p className={classes.p}>
                Movimento Web para todos -{" "}
                <Link href="http://mwpt.com.br/">MWPT</Link>
              </p>
              <p className={classes.p}>
                Todos por acessibilidade -{" "}
                <Link href="http://acessibilida.de/">Acessibilida.de</Link>
              </p>
              <br />
              <Grid direction="row" alignItems="center">
                <Cell /> <Icon icon="rocket" fill="primary" />
                <Cell>
                  <Heading level={3}>Cursos</Heading>
                </Cell>
              </Grid>
              <p className={classes.p}>
                Web Accessibility: Developing with Empathy -{" "}
                <Link href="https://www.udacity.com/course/web-accessibility--ud891">
                  Udacity
                </Link>
              </p>
              <br />

              <Grid direction="row" alignItems="center">
                <Cell /> <Icon icon="gearFilled" fill="primary" />
                <Cell>
                  <Heading level={3}>Ferramentas</Heading>
                </Cell>
              </Grid>
              <p className={classes.p}>
                The Persona Spectrum -{" "}
                <Link href="https://www.microsoft.com/design/">
                  Microsoft Design
                </Link>
              </p>
              <p className={classes.p}>
                Color Contrast Checker -
                <Link href="https://webaim.org/resources/contrastchecker/">
                  Webaim
                </Link>
              </p>
            </VFlow>
          </section>

          <section className={classes.newsletter} id="Newsletter">
            <div style={{ textAlign: "center" }}>
              <Heading level={2}>Se inscreva na nossa newsletter</Heading>
              <p className={classes.p}>
                Receba notícias sobre o que há de mais novo em acessibilidade
                digital. Prometemos enviar somente o necessário, nada de spams!
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
              da Universidade Federal de Santa Catarina, produzido por
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
      //position: "absolute",
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
    search: {
      flex: 1,
      padding: "0 1rem"
    },
    searchInput: {
      border: "none",
      "~ span": {
        background: theme.pallete.surface.main
      },
      "&::-webkit-search-decoration": {
        WebkitAppearance: "none"
      }
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
    blockquote: {
      marginLeft: "7rem",
      fontSize: 24,
      lineHeight: 1.4,
      fontStyle: "italic",
      "&::before": {
        display: "inline-block",
        content: "",
        position: "absolute",
        margin: "0.875rem",
        left: "-1rem",
        width: "80px",
        height: "2px",
        borderTop: `2px solid ${theme.pallete.gray.c100}`
      }
    },
    newsletter: {
      justifyContent: "center",
      backgroundColor: theme.pallete.primary.c10,
      padding: "4% 10%",
      color: theme.pallete.gray.c100
    },
    card: {
      color: theme.pallete.gray.c10,
      backgroundColor: theme.pallete.gray.c100,
      boxShadow: theme.shadows.outer[160],
      borderRadius: 4,
      margin: "0 30%",
      marginTop: "2rem",
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
