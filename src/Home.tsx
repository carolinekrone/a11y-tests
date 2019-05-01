import {
  Button,
  ButtonGroup,
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
import React from "react";

function Home() {
  const { classes } = useStyles(createStyles);

  return (
    <>
      <header className={classes.header}>
        <Grid direction="row" justifyContent="space-evenly" wrap>
          <Cell flexGrow={2} xs={12} lg={6} alignSelf="center">
            <img
              src={require("./static/image/logo-Ad.svg")}
              alt="Logo Acessibilidade Digital"
            />
          </Cell>
          <Cell xs={12} lg={6} alignSelf="center">
            <input
              type="search"
              placeholder="Buscar na página"
              className={classes.search}
            />
            <DropdownButton
              size="small"
              kind="normal"
              items={[
                { content: "Acessibilidade", onClick: console.log },
                { content: "Tipos de deficiência", onClick: console.log },
                { content: "Checklist de requisitos", onClick: console.log },
                { content: "Dados sobre acessibilidade", onClick: console.log },
                { content: "Newsletter", onClick: console.log }
              ]}
            >
              <Icon icon="hamburguerMenu" />
            </DropdownButton>
          </Cell>
        </Grid>
      </header>
      <VFlow>
        <div id="content" role="main">
          <section className={classes.section} id="Acessibilidade">
            <Grid wrap direction="row" gap={10}>
              <Cell xs={12} lg={6} alignSelf="center">
                <div>
                  <Heading level={1}>
                    Faça projetos melhores para mais pessoas
                  </Heading>
                  <p className={classes.pBig}>
                    Nós criamos esse site para introduzir você no assunto da
                    acessibilidade digital. Aqui você vai entender mais sobre os
                    tipos de deficiência, sobre as responsabilidades de cada
                    pessoa envolvida no projeto..
                  </p>
                </div>
              </Cell>
              <Cell xs={12} lg={6}>
                <img
                  style={{ width: 539, height: 303 }}
                  src={require("./static/image/default.png")}
                  alt="Ilustração de duas mãos com objetos abstratos. No centro da imagem está escrito: Breaking down barries."
                />
              </Cell>
            </Grid>
          </section>
          <section className={classes.blueSection} id="Definicao">
            <Grid wrap>
              <Cell xs={12} lg={6} alignSelf="center">
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
                    href="https://www.w3.org/WAI/"
                    target="_blank"
                    alt="Web Accessibility Initiative"
                  >
                    WAI.
                  </Link>
                </p>
              </Cell>
              <Cell xs={6} alignSelf="flex-end">
                <img
                  style={{ width: 463, height: 347 }}
                  src={require("./static/image/default.png")}
                  alt="Uma ilustração de uma pessoa olhando a tela de um computador. Ao seu lado um robo projetando as imagens na tela "
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
                <ButtonGroup>
                  <Button size="small" kind="primary">
                    {" "}
                    Permanente
                  </Button>
                  <Button size="small">Temporária</Button>
                  <Button size="small">Situacional</Button>
                </ButtonGroup>
              </Cell>
              <Cell>
                <div className={classes.graySection}>
                  <Heading level={3}>Às vezes a exclusão é temporária</Heading>
                  <p className={classes.pSmall}>
                    Mesmo uma lesão ou contexto de curto prazo afeta a maneira
                    como as pessoas interagem com o mundo ao seu redor, mesmo
                    que apenas por um curto período de tempo. Pense em olhar
                    para uma luz brilhante, usar um elenco ou pedir um jantar em
                    um país estrangeiro.
                  </p>
                  <img
                    style={{ mixBlendMode: "multiply" }}
                    src={require("./static/image/temporaria.png")}
                    alt="Uma ilustração de uma pessoa olhando a tela de um computador. Ao seu lado um robo projetando as imagens na tela "
                  />
                </div>
              </Cell>
            </Grid>
          </section>
          <section
            className={classes.newsletter}
            style={{ textAlign: "center" }}
            id="Newsletter"
          >
            <Heading level={2}>Se inscreva na nossa newsleteer</Heading>
            <p className={classes.p}>
              Receba o que há de mais novo sobre acessibilidade digital.
              Prometemos enviar somente o necessário, nada de spams!
            </p>
            <div />
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
            <p>
              Site desenvolvido para Projeto de Conclusão em Design da
              Universidade Federal de Santa Catarina. <br />
              Caso tenha alguma pergunta entre em contato pelo e-mail ou abra
              uma issue no{" "}
              <Link
                href="https://github.com/carolinekrone/a11y-tests"
                target="_blank"
                alt="Página do projeto no GitHub"
              >
                GitHub
              </Link>
              .
            </p>
            <p>
              Este site foi construido utilizando os componentes do{" "}
              <Link
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
    header: {
      marginBottom: "1rem",
      padding: "1% 8% 1%",
      width: "100%",
      height: "5rem",
      backgroundColor: theme.pallete.gray.c100,
      boxShadow: theme.shadows.outer[80]
    },
    search: {
      lineHeight: "2rem",
      width: "50%",
      marginRight: "1rem",
      borderRadius: "2px",
      borderStyle: "none",
      borderColor: "initial",
      borderImage: "initial"
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
      fontSize: 18,
      marginTop: "1rem"
    },
    pSmall: {
      fontWeight: 400,
      fontSize: 14,
      margin: "1rem 0 2rem"
    },
    pBig: {
      fontWeight: 400,
      fontSize: 20,
      margin: "1rem 0 2rem"
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
        left: "-6rem",
        width: "80px",
        height: "2px",
        borderTop: "1px solid #000000"
      }
    },
    newsletter: {
      backgroundColor: theme.pallete.primary.c10,
      padding: "4% 8%",
      color: theme.pallete.gray.c100
    },
    card: {
      backgroundColor: theme.pallete.gray.c100,
      boxShadow: "0px 6px 4px rgba(0,0,0,0.55)",
      borderRadius: "4px"
    },
    footer: {
      backgroundColor: theme.pallete.gray.c10,
      color: theme.pallete.gray.c100,
      padding: "2% 8%"
    }
  };
}
