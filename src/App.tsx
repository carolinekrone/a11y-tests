import React from "react";
import {
  VFlow,
  HFlow,
  Heading,
  Button,
  ButtonGroup,
  Tabs,
  TabLink,
  Link,
  Checkbox,
  ThemeProvider,
  Grid,
  Cell
} from "bridge-react";

//import { MemoryRouter } from "react";

function App() {
  const newLocal = <Cell />;
  return (
    <ThemeProvider>
      <VFlow>
        <div id="content" role="main">
          <section>
            <Grid wrap direction="row" gap={10}>
              <Cell xs={12} lg={6} alignSelf="center">
                <div>
                  <Heading level={1}>
                    Faça projetos melhores para mais pessoas
                  </Heading>
                  <div className="h2">
                    Nós criamos esse site para introduzir você no assunto da
                    acessibilidade digital. Aqui você vai entender mais sobre os
                    tipos de deficiência, sobre as responsabilidades de cada
                    pessoa envolvida no projeto..
                  </div>
                </div>
              </Cell>
              <Cell xs={12} lg={6} alignSelf="flex-end">
                <img
                  style={{ width: 539, height: 303 }}
                  src={require("./static/image/default.png")}
                  alt="Ilustração de duas mãos com objetos abstratos. No centro da imagem está escrito: Breaking down barries."
                />
              </Cell>
            </Grid>
          </section>
          <section className="blueSection">
            <Grid wrap>
              <Cell xs={12} lg={6} alignSelf="center">
                <Heading level={2} style={{ fontSize: 32 }}>
                  O que é acessiblidade?
                </Heading>
                <blockquote cite="https://www.who.int/topics/disabilities/en">
                  É a qualidade que torna uma experiência aberta a todos.
                </blockquote>
                <p style={{ fontWeight: "normal", fontSize: 20 }}>
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
                  alt="Uma ilustração de uma pessoa olhando a tela de um computador. Ao seu lado um robo projeando as imagens na tela "
                />
              </Cell>
            </Grid>
          </section>
          <section className="centerSection">
            <Grid
              direction="column"
              gap={20}
              gapVertical={2.1}
              alignItems="center"
            >
              <Cell xs={12} lg={6}>
                <Heading level={2} style={{ fontSize: 32 }}>
                  Tipos de deficiência
                </Heading>
              </Cell>
              <Cell xs={8}>
                <div>
                  <Heading
                    level={3}
                    style={{
                      fontWeight: "normal"
                    }}
                  >
                    A deficiência é dependente do contexto e, a exclusão física,
                    cognitiva e social é o resultado de interações
                    incompatíveis. E pode ser classificada em três grupos:
                    Permanente, temporária e situacional.
                  </Heading>
                </div>
              </Cell>
              <Cell>
                <ButtonGroup>
                  <Button size="small" kind="primary">
                    Permanente
                  </Button>
                  <Button size="small">Temporária</Button>
                  <Button size="small">Situacional</Button>
                </ButtonGroup>
              </Cell>
              <Cell>
                <div className="centerSection graySection">
                  <Heading level={4}>Às vezes a exclusão é temporária</Heading>
                  <Heading level={4} style={{ fontWeight: "normal" }}>
                    Mesmo uma lesão ou contexto de curto prazo afeta a maneira
                    como as pessoas interagem com o mundo ao seu redor, mesmo
                    que apenas por um curto período de tempo. Pense em olhar
                    para uma luz brilhante, usar um elenco ou pedir um jantar em
                    um país estrangeiro.
                  </Heading>
                  <img
                    style={{ mixBlendMode: "multiply" }}
                    src={require("./static/image/temporaria.png")}
                    alt="Uma ilustração de uma pessoa olhando a tela de um computador. Ao seu lado um robo projeando as imagens na tela "
                  />
                </div>
              </Cell>
            </Grid>
          </section>
        </div>
      </VFlow>
    </ThemeProvider>
  );
}

export default App;
