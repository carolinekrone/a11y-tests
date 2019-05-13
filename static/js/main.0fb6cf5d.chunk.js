(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/permanente.70d96101.png"},20:function(e,a,t){e.exports=t.p+"static/media/situacional.d33e9429.png"},21:function(e,a,t){e.exports=t.p+"static/media/temporaria.5c2378b3.png"},22:function(e,a,t){e.exports=t(43)},39:function(e,a,t){e.exports=t.p+"static/media/logo-Ad.05916d79.svg"},40:function(e,a,t){e.exports=t.p+"static/media/default.5460d49f.png"},41:function(e,a,t){e.exports=t.p+"static/media/acessibilidade.d6d91aa4.png"},42:function(e,a,t){e.exports=t.p+"static/media/logo-Ad-white.27aa7520.svg"},43:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(11),r=t.n(n),s=t(1);var i=function(){return alert("Inscri\xe7\xe3o confirmada")},c=function(e){var a={};return e.firstName||(a.firstName="Nome completo \xe9 obrigat\xf3rio"),e.email?e.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)||(a.email="Este endere\xe7o de e-mail n\xe3o \xe9 v\xe1lido"):a.email="E-mail \xe9 obrigat\xf3rio",a},m=function(){return o.a.createElement(s.Form,{render:function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(s.Grid,{wrap:!0},o.a.createElement(s.Cell,{xs:12,lg:12},o.a.createElement(s.TextField,{label:"Nome completo",name:"firstName",required:!0})),o.a.createElement(s.Cell,{xs:12,lg:12},o.a.createElement(s.TextField,{name:"email",label:"E-mail",type:"email",icon:"emailOutline",required:!0})),o.a.createElement(s.Cell,{xs:12,lg:12},o.a.createElement(s.TextField,{label:"Profiss\xe3o",name:"occupation"})),o.a.createElement(s.Cell,{xs:6},o.a.createElement(s.FormControl,{label:"Frequ\xeancia dos e-mails"},o.a.createElement(s.HFlow,null,o.a.createElement(s.RadioField,{name:"frequencia",value:"Semanal",label:"Semanal"}),o.a.createElement(s.RadioField,{name:"frequencia",value:"Quinzenal",label:"Quinzenal"}),o.a.createElement(s.RadioField,{name:"frequencia",value:"Mensal",label:"Mensal"})))),o.a.createElement(s.Cell,{xs:12},o.a.createElement(s.CheckboxField,{name:"writer",label:"Quero escrever artigos para o site"}),o.a.createElement(s.Tooltip,{text:"Marque a op\xe7\xe3o caso deseje contribuir para o site. Enviaremos um e-mail com mais informa\xe7\xf5es."},o.a.createElement(s.Icon,{size:1,icon:"infoCircleFilled",fill:"secondary",style:{marginLeft:"0.5rem"},tabIndex:0}))),o.a.createElement(s.Cell,{xs:12,lg:12},o.a.createElement(s.Button,{type:"submit",kind:"primary",block:!0,onClick:e.handleSubmit},"Inscrever"))))},validate:c,onSubmit:i})},d=t(9);function u(){var e=Object(l.useRef)(),a=Object(l.useState)(!1),t=Object(d.a)(a,2),n=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.Button,{innerRef:e,title:"Menu",type:"button",size:"small",kind:"normal",onClick:function(){return r(!0)}},o.a.createElement(s.Icon,{icon:"hamburguerMenu","aria-label":"Menu"})),o.a.createElement(s.Dropdown,{anchorRef:e,open:n,onClose:function(){return r(!1)}},o.a.createElement(s.DropdownItem,{component:"a",href:"#acessibilidade"},"Acessibilidade"),o.a.createElement(s.DropdownItem,{component:"a",href:"#tipos"},"Tipos de defici\xeancia"),o.a.createElement(s.DropdownItem,{component:"a",href:"#checklist"},"Checklist de requisitos"),o.a.createElement(s.DropdownItem,{component:"a",href:"#dados"},"Dados sobre acessibilidade"),o.a.createElement(s.DropdownItem,{component:"a",href:"#recursos"},"Recursos"),o.a.createElement(s.DropdownItem,{component:"a",href:"#newsletter"},"Newsletter")))}var p=t(3);var g=function(){var e=Object(s.useStyles)(E).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("ul",{className:e.graySection,style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Verifique se h\xe1 contraste suficiente entre o texto e sua cor de fundo"}),o.a.createElement("p",{className:e.pSmall},"De acordo com as WCAG, a rela\xe7\xe3o de contraste entre texto e fundo do texto deve ser de pelo menos 4,5 para 1. Se a sua fonte for pelo menos 24 px ou 19 px em negrito, o m\xednimo cai para 3 para 1 (vale a pena notar que isto \xe9 um pouco confuso porque os tamanhos numerados nem sempre refletem o tipo de tamanho visual). Tenha especial cuidado com o texto sobre as imagens.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"N\xe3o utilize somente cor para transmitir informa\xe7\xf5es importantes"}),o.a.createElement("p",{className:e.pSmall},"Deve haver outro indicador (como \xedcones para acompanhar o c\xf3digo de cores ou um sublinhado no texto vinculado) para que as pessoas que n\xe3o conseguem diferenciar as cores facilmente consigam entender e usar seu conte\xfado.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Projete estados de foco para ajudar os usu\xe1rios a navegar e entender onde eles est\xe3o"}),o.a.createElement("p",{className:e.pSmall},"Seus projetos nunca devem ocultar ativamente os estados de foco. Quando as pessoas usam o teclado para navegar, seu produto deve incluir estados de foco altamente vis\xedveis.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Escreva um bom texto alternativo para suas imagens"}),o.a.createElement("p",{className:e.pSmall},'Descreva todos os elementos que explicam o que est\xe1 acontecendo na imagem, em vez de apenas definir o texto alternativo como "imagem".'))))};function E(e){return{graySection:{alignContent:"center",padding:"2% 2%",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"600px",margin:"0.5rem 2rem 2rem"},checkbox:{fontSize:"1rem"}}}var b=function(){var e=Object(s.useStyles)(f).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("ul",{className:e.graySection,style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Use o elemento HTML correto para seu conte\xfado"}),o.a.createElement("p",{className:e.pSmall},"Os elementos HTML comunicam ao navegador que tipo de conte\xfado eles cont\xeam e como o navegador deve processar ou tratar esse conte\xfado. A \xe1rvore de acessibilidade \xe9 constru\xedda a partir de suposi\xe7\xf5es sobre os elementos e sua estrutura. Este \xe9 o recurso do navegador que alimenta os leitores de tela. A escolha do elemento correto para o contexto atual \xe9 uma maneira simples de criar uma boa base para suas experi\xeancias.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Suporte navega\xe7\xe3o por teclado"}),o.a.createElement("p",{className:e.pSmall},"Navegadores suportam tabula\xe7\xe3o atrav\xe9s de link, formul\xe1rio, elementos de bot\xe3o. Essa \xe9 uma maneira f\xe1cil de navegar pela p\xe1gina, mas \xe9 muito f\xe1cil atrapalhar acidentalmente essa funcionalidade: confiando no CSS para mover elementos, em vez de reordenar o HTML; ocultando elementos do fluxo de abas, falsificando bot\xf5es (com Javascript) em vez de usar elementos de bot\xe3o ou desativando a aba via tabindex = \u201d- 1\u201d; e ocultando elementos de formul\xe1rio (em uma interface com guias), mas n\xe3o removendo-os do fluxo da guia (para que os elementos de formul\xe1rio ocultos possam ser focalizados).")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Entenda e use marcos HTML"}),o.a.createElement("p",{className:e.pSmall},"As pessoas que usam dispositivos auxiliares podem n\xe3o querer examinar seu conte\xfado linearmente, em vez disso, preferem usar uma visualiza\xe7\xe3o de estrutura de t\xf3picos (gerada a partir da marca\xe7\xe3o) para encontrar o conte\xfado relevante para suas necessidades atuais. Esses pontos de refer\xeancia, como main e form e navigation ajudam a definir \xe1reas espec\xedficas que um usu\xe1rio pode querer procurar e pode economizar muito tempo.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Escreva um bom texto alternativo para suas imagens"}),o.a.createElement("p",{className:e.pSmall},'Descreva todos os elementos que explicam o que est\xe1 acontecendo na imagem, em vez de apenas definir o texto alternativo como "imagem". Se voc\xea tiver que usar uma imagem de texto, certifique-se de descrever o design, se relevante, assim como todas as palavras da imagem.'))))};function f(e){return{graySection:{alignContent:"center",padding:"2% 2%",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"600px",margin:"0.5rem 2rem 2rem"},checkbox:{fontSize:"1rem"}}}var h=function(){var e=Object(s.useStyles)(v).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("ul",{className:e.graySection,style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Seja o mais consistente e claro poss\xedvel"}),o.a.createElement("p",{className:e.pSmall},"Evite jarg\xf5es e express\xf5es idiom\xe1ticas. Use cabe\xe7alhos para organizar o conte\xfado.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Escreva um bom texto alternativo para suas imagens"}),o.a.createElement("p",{className:e.pSmall},'Descreva todos os elementos que explicam o que est\xe1 acontecendo na imagem, em vez de apenas definir o texto alternativo como "imagem".')),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Links devem ser descritivos"}),o.a.createElement("p",{className:e.pSmall},"A tecnologia assistiva \xe9 capaz de encontrar todos os links em uma p\xe1gina e apresent\xe1-los de v\xe1rias formas, mas esses links s\xe3o in\xfateis se for uma longa lista de links que s\xe3o apenas o texto \u201cclique aqui\u201d. Uma maneira melhor \xe9 fazer com que o link descreva para onde o usu\xe1rio ir\xe1 se clicar nele, dando uma ideia do que est\xe1 do outro lado do clique."))))};function v(e){return{graySection:{alignContent:"center",padding:"2% 2%",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"600px",margin:"0.5rem 2rem 2rem"},checkbox:{fontSize:"1rem"}}}var x=function(){var e=Object(s.useStyles)(k).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("ul",{className:e.graySection,style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Navegue somente pelo teclado"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Verifique se o foco est\xe1 sempre vis\xedvel e se aparece em ordem l\xf3gica (sentido natural da leitura: esquerda-direita / cima-baixo)"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Certifique se \xe9 poss\xedvel acessar a todos os elementos interativos e acion\xe1-los com a barra de espa\xe7o, a tecla Enter ou as teclas de seta"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Certifique que nenhum conte\xfado fique focado fora da tela ou esteja oculto"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Verifique se a p\xe1gina inclui um link para ignorar o conte\xfado principal"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:" Conte\xfado n\xe3o-interativo (ex.: T\xedtulos, \xedcones decorativos, campos desabilitados) n\xe3o devem ser focados"})),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Ao abrir modais e pop-overs, o foco deve ser redirecionado \xe0 esses elementos. A telca Esc fecha o modal e  retorna o foco ao elemento anterior"}))))};function k(e){return{graySection:{alignContent:"center",padding:"2% 2%",backgroundColor:e.pallete.gray.c90},checkbox:{fontSize:"1rem",paddingBottom:"1rem"}}}var y=function(){var e=Object(s.useStyles)(S).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("ul",{className:e.graySection,style:{listStyle:"none"}},o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Familiarize-se com o trabalho associado a tornar o conte\xfado acess\xedvel"}),o.a.createElement("p",{className:e.pSmall},"Temos diretrizes para design, engenharia e testes de controle de qualidade. Leia os requisitos e esteja ciente das verifica\xe7\xf5es e padr\xf5es que a QA estar\xe1 procurando em seus produtos.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Destine tempo para acessibilidade durante o planejamento do projeto e planejamento de sprints"}),o.a.createElement("p",{className:e.pSmall},"Acessibilidade n\xe3o \xe9 um item de lista de verifica\xe7\xe3o que s\xf3 precisa ser considerado em alguns projetos ou no final de um processo. Essas pr\xe1ticas devem ser incorporadas em cada etapa de um projeto e fun\xe7\xe3o em uma equipe. Certifique-se de que voc\xea \xe9 respons\xe1vel por isso durante o planejamento de projetos e sprints.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Ao compartilhar um bom trabalho feito por sua equipe, elogie os esfor\xe7os para aumentar a acessibilidade"}),o.a.createElement("p",{className:e.pSmall},"Todos gostamos de ouvir nosso trabalho reconhecido. Al\xe9m de celebrar belos designs, c\xf3digos elegantes, retornos r\xe1pidos, experi\xeancias estelares - chame a aten\xe7\xe3o e elogie o trabalho realizado por sua equipe para tornar o conte\xfado mais acess\xedvel. Fale alto contraste, um sistema de navega\xe7\xe3o de teclado inteligente ou c\xf3pia e hierarquia claras.")),o.a.createElement("li",null,o.a.createElement(s.Checkbox,{style:e.checkbox,label:"Seja um defensor da acessibilidade"}),o.a.createElement("p",{className:e.pSmall},"Explique \xe0 sua equipe e \xe0s partes interessadas por que a acessibilidade \xe9 importante e deve ser uma prioridade em cada trabalho que sua equipe assume. Isso torna nossos produtos - e nossas equipes - melhores."))))};function S(e){return{graySection:{alignContent:"center",padding:"2% 2%",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"600px",margin:"0.5rem 2rem 2rem"},checkbox:{fontSize:"1rem"}}}var C=function(){var e=Object(s.useStyles)(w).classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.MemoryRouter,{initialEntries:["/Checklist/Designers"],initialIndex:1},o.a.createElement("div",{className:e.divider}," ",o.a.createElement(s.Tabs,null,o.a.createElement(s.TabLink,{to:"/Checklist/Designers"},"Designers"),o.a.createElement(s.TabLink,{to:"/Checklist/Programadores"},"Programadores"),o.a.createElement(s.TabLink,{to:"/Checklist/Gestores"},"Gestores de Projeto"),o.a.createElement(s.TabLink,{to:"/Checklist/QA"},"QA - Garantia de Qualidade"),o.a.createElement(s.TabLink,{to:"/Checklist/Editores"},"Editores"))),o.a.createElement(p.Switch,null,o.a.createElement(p.Route,{path:"/Checklist/Designers",component:g}),o.a.createElement(p.Route,{path:"/Checklist/Programadores",component:b}),o.a.createElement(p.Route,{path:"/Checklist/Editores",component:h}),o.a.createElement(p.Route,{path:"/Checklist/QA",component:x}),o.a.createElement(p.Route,{path:"/Checklist/Gestores",component:y}),o.a.createElement(p.Redirect,{exact:!0,from:"/",to:"/Checklist/Designers"}))))};function w(e){return{divider:{borderBottom:"1px solid ".concat(e.pallete.divider)}}}var q=t(19),N=t.n(q);var z=function(){var e=Object(s.useStyles)(A).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("div",{className:e.graySection},o.a.createElement(s.Heading,{level:3},"Muitas vezes a exclus\xe3o \xe9 permanente"),o.a.createElement("p",{className:e.pSmall},"No Brasil, 23,9% da popula\xe7\xe3o possui alguma defici\xeancia permanente. A imagem abaixo apresenta exemplos de exclus\xf5es permanentes."),o.a.createElement("img",{style:{mixBlendMode:"multiply"},src:N.a,alt:"Desenho de quatro pessoas com exclus\xf5es permanentes. Da esquerda para direita: A primeira s\xf3 tem um bra\xe7o; A segunda \xe9 cega e tem um c\xe3o guia ao seu lado; A terceira \xe9 surda e a quarta \xe9 muda."})))};function A(e){return{graySection:{margin:"1rem",padding:"1rem ",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"400px",margin:"1rem auto 3rem"}}}var j=t(20),T=t.n(j);var F=function(){var e=Object(s.useStyles)(W).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("div",{className:e.graySection},o.a.createElement(s.Heading,{level:3},"\xc0s vezes a exclus\xe3o \xe9 situacional"),o.a.createElement("p",{className:e.pSmall},"Conforme as pessoas se movem atrav\xe9s de diferentes ambientes, suas habilidades tamb\xe9m podem mudar drasticamente. Em uma multid\xe3o barulhenta, eles n\xe3o podem ouvir bem. Em um carro, sua vis\xe3o \xe9 limitada. Novos pais passam muito do seu dia fazendo tarefas com uma s\xf3 m\xe3o. Um dia avassalador pode causar sobrecarga sensorial. O que \xe9 poss\xedvel, seguro e apropriado est\xe1 em constante mudan\xe7a."),o.a.createElement("img",{style:{mixBlendMode:"multiply"},src:T.a,alt:"Desenho de quatro pessoas com exclus\xf5es situacionais. Da esquerda para direita: A primeira tem um rec\xe9m nascido no colo; A segunda \xe9 um motorista distra\xeddo; A terceira \xe9 um bartender em um ambiente barulhento e a quarta usa acess\xf3rios vikings e possui um sotaque pesado."})))};function W(e){return{graySection:{margin:"1rem",padding:"1rem ",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"600px",margin:"1rem auto 3rem"}}}var D=t(21),L=t.n(D);var I=function(){var e=Object(s.useStyles)(B).classes;return o.a.createElement(s.VFlow,null,o.a.createElement("div",{className:e.graySection},o.a.createElement(s.Heading,{level:3},"\xc0s vezes a exclus\xe3o \xe9 tempor\xe1ria"),o.a.createElement("p",{className:e.pSmall},"Mesmo uma les\xe3o ou contexto de curto prazo afeta a maneira como as pessoas interagem com o mundo ao seu redor, mesmo que apenas por um curto per\xedodo de tempo. Pense em olhar para uma luz brilhante, usar um elenco ou pedir um jantar em um pa\xeds estrangeiro."),o.a.createElement("img",{style:{mixBlendMode:"multiply"},src:L.a,alt:"Desenho de quatro pessoas com exclus\xf5es temporarias. Da esquerda para direita: A primeira tem um bra\xe7o quebrado e usa gesso; A segunda tem catarata e usa bengala; A terceira possui infec\xe7\xe3o no ouvido e a quarta possui laringite."})))};function B(e){return{graySection:{margin:"1rem",padding:"1rem ",backgroundColor:e.pallete.gray.c90},pSmall:{fontWeight:400,fontSize:14,maxWidth:"400px",margin:"1rem auto 3rem"}}}var H=function(){var e=Object(l.useState)("Permanente"),a=Object(d.a)(e,2),t=a[0],n=a[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.ButtonGroup,null,o.a.createElement(s.Button,{skin:"default",size:"small",onClick:function(){return n("Permanente")},kind:"Permanente"===t?"primary":"normal"},o.a.createElement(s.Text,null,"Permanente")),o.a.createElement(s.Button,{skin:"default",size:"small",onClick:function(){return n("Temporaria")},kind:"Temporaria"===t?"primary":"normal"},o.a.createElement(s.Text,null,"Tempor\xe1ria")),o.a.createElement(s.Button,{skin:"default",size:"small",onClick:function(){return n("Situacional")},kind:"Situacional"===t?"primary":"normal"},o.a.createElement(s.Text,null,"Situacional"))),"Permanente"===t&&o.a.createElement(z,null),"Temporaria"===t&&o.a.createElement(I,null),"Situacional"===t&&o.a.createElement(F,null))};var G=function(){var e=Object(s.useStyles)(M).classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"#content",className:e.skiplink,style:{position:"absolute"}},"Pular para o conte\xfado principal"),o.a.createElement("header",{className:e.header},o.a.createElement(s.Grid,{direction:"row",justifyContent:"space-between"},o.a.createElement(s.Cell,{xs:6,lg:6,alignSelf:"center"},o.a.createElement("img",{src:t(39),alt:"Logo Acessibilidade Digital"})),o.a.createElement(s.Cell,{xs:2,lg:2,alignSelf:"center"},o.a.createElement(u,null)))),o.a.createElement(s.VFlow,null,o.a.createElement("div",{id:"content",role:"main"},o.a.createElement("section",{className:e.section,id:"acessibilidade"},o.a.createElement(s.Grid,{wrap:!0,direction:"row",gap:10},o.a.createElement(s.Cell,{xs:12,lg:6,alignSelf:"center"},o.a.createElement("div",null,o.a.createElement(s.Heading,{level:1},"Fa\xe7a projetos melhores para mais pessoas"),o.a.createElement("p",{className:e.pBig},"N\xf3s criamos esse site para introduzir voc\xea no assunto da acessibilidade digital. Aqui voc\xea vai entender mais sobre os tipos de defici\xeancia e sobre as responsabilidades de cada pessoa envolvida em um projeto digital. Tamb\xe9m criamos uma sess\xe3o com recursos que s\xe3o \xfateis para quem est\xe1 come\xe7ando na \xe1rea."))),o.a.createElement(s.Cell,{xs:12,lg:6},o.a.createElement("img",{style:{maxWidth:526,maxHeight:323},src:t(40),alt:"Ilustra\xe7\xe3o de duas pessoas. Uma est\xe1 sentada no canto esquerdo da imagem segurando um tablet e a outra \xe9 cadeirante e est\xe1 no canto esquerdo da imagem interagindo com um painel que cont\xe9m circulos. "})))),o.a.createElement("section",{className:e.blueSection,id:"definicao"},o.a.createElement(s.Grid,{direction:"row",wrap:!0},o.a.createElement(s.Cell,{xs:12,lg:5,alignSelf:"center"},o.a.createElement(s.Heading,{level:2},"O que \xe9 acessiblidade?"),o.a.createElement("blockquote",{className:e.blockquote,cite:"https://www.who.int/topics/disabilities/en"},"\xc9 a qualidade que torna uma experi\xeancia aberta a todos."),o.a.createElement("p",{className:e.p},"A defici\xeancia n\xe3o \xe9 apenas um problema de sa\xfade. \xc9 um fen\xf4meno complexo, refletindo a intera\xe7\xe3o entre as caracter\xedsticas do corpo de uma pessoa e as caracter\xedsticas da sociedade em que ela vive. Saiba mais no site da"," ",o.a.createElement(s.Link,{style:{color:"white"},href:"https://www.w3.org/WAI/",target:"_blank",alt:"Web Accessibility Initiative"},"WAI."))),o.a.createElement(s.Cell,{xs:12,sm:6,lg:7},o.a.createElement("img",{style:{maxWidth:526,maxHeight:285,marginLeft:"7rem"},src:t(41),alt:"Ilustra\xe7\xe3o de uma pessoa cega atravessando uma faixa de pedestre com o aux\xedlio de uma bengala."})))),o.a.createElement("section",{className:e.section,style:{textAlign:"center"},id:"tipos"},o.a.createElement(s.Grid,{direction:"column",gapVertical:2,alignItems:"center"},o.a.createElement(s.Cell,{xs:12,lg:6},o.a.createElement(s.Heading,{level:2},"Tipos de defici\xeancia")),o.a.createElement(s.Cell,{xs:8,sm:8,lg:6},o.a.createElement("div",null,o.a.createElement("p",{className:e.p},"A defici\xeancia \xe9 dependente do contexto e a exclus\xe3o f\xedsica, cognitiva e social \xe9 o resultado de intera\xe7\xf5es incompat\xedveis. E pode ser classificada em tr\xeas grupos: Permanente, tempor\xe1ria e situacional."))),o.a.createElement(s.Cell,{lg:8,xs:12,sm:12},o.a.createElement(H,null)))),o.a.createElement("section",{className:e.section,id:"checklist"},o.a.createElement(s.VFlow,null,o.a.createElement(s.Heading,{level:2},"Checklist para projetos acess\xedveis"),o.a.createElement("p",{className:e.p},"Tornar o seu produto acess\xedvel cria uma experi\xeancia melhor para todo mundo. ",o.a.createElement("br",null),"Use este checklist para ajudar a checar a acessibilidade projeto, independentemente de sua fun\xe7\xe3o ou est\xe1gio de andamento do projeto."),o.a.createElement(C,null))),o.a.createElement("section",{className:e.section,id:"dados"},o.a.createElement(s.Heading,{level:2},"Dados sobre defici\xeancia no Brasil"),o.a.createElement("ul",{className:e.ul},o.a.createElement("li",{className:e.li},o.a.createElement(s.Icon,{icon:"mapFilled",fill:"primary",size:3}),o.a.createElement("span",{className:e.pBig,style:{paddingLeft:"2%"}},"1 Bilh\xe3o = 10% de pessoas em todo mundo convivem com alguma defici\xeancia")),o.a.createElement("li",{className:e.li},o.a.createElement(s.Icon,{icon:"mapMarkerFilled",fill:"primary",size:3}),o.a.createElement("span",{className:e.pBig,style:{paddingLeft:"2%"}},"No Brasil, 45,6 milh\xf5es de pessoas (23,9%) t\xeam algum tipo de defici\xeancia. Sendo:"),o.a.createElement("div",{style:{paddingLeft:"6%"}},o.a.createElement("p",{className:e.p},o.a.createElement("b",null,"18,6%")," defici\xeancia visual"),o.a.createElement("p",{className:e.p},o.a.createElement("b",null,"7%")," defici\xeancia motora"),o.a.createElement("p",{className:e.p},o.a.createElement("b",null,"5,10%")," defici\xeancia auditiva"),o.a.createElement("p",{className:e.p},o.a.createElement("b",null,"7% "),"defici\xeancia mental ou intelectual"))),o.a.createElement("li",{className:e.li},o.a.createElement(s.Icon,{icon:"desktopFilled",fill:"primary",size:3}),o.a.createElement("span",{className:e.pBig,style:{paddingLeft:"2%"}},o.a.createElement("b",null,"97,8% "),"das p\xe1ginas tiveram falhas detectadas na WCAG 2, com uma m\xe9dia de ",o.a.createElement("b",null,"59,6")," erros por p\xe1gina.")),o.a.createElement("li",{className:e.li},o.a.createElement(s.Icon,{icon:"chatFilled",fill:"primary",size:3}),o.a.createElement("span",{className:e.pBig,style:{paddingLeft:"2%"}},"De 2009 a 2017 o uso de leitor de tela"," ",o.a.createElement("b",null,"aumentou de 12% para 88%."))))),o.a.createElement("section",{className:e.section,id:"recursos"},o.a.createElement(s.VFlow,null,o.a.createElement(s.Heading,{level:2},"Recursos"),o.a.createElement("p",{className:e.p},"N\xf3s certamente n\xe3o somos especialistas em termos das melhores abordagens para acessibilidade. A maior parte do trabalho realizado pela nossa equipe \xe9 baseada em uma grande quantidade de pesquisas e refer\xeancias. Abaixo est\xe3o alguns dos nossos recursos favoritos."),o.a.createElement("br",null),o.a.createElement(s.Grid,{direction:"row",alignItems:"center"},o.a.createElement(s.Cell,null)," ",o.a.createElement(s.Icon,{icon:"link",fill:"primary"}),o.a.createElement(s.Cell,null,o.a.createElement(s.Heading,{level:3},"Sites"))),o.a.createElement("ul",null,o.a.createElement("li",{className:e.p,lang:"en"}," ","Web Content Accessibility Guidelines (WCAG) 2.0 -"," ",o.a.createElement(s.Link,{href:"https://www.w3.org/TR/WCAG20/",style:{fontSize:"1rem"}},"W3C")),o.a.createElement("li",{className:e.p,lang:"en"},"Web Accessibility in Mind -"," ",o.a.createElement(s.Link,{href:"https://webaim.org/",style:{fontSize:"1rem"}},"Webaim")),o.a.createElement("li",{className:e.p},"Movimento Web para todos -"," ",o.a.createElement(s.Link,{href:"http://mwpt.com.br/",style:{fontSize:"1rem"}},"MWPT")),o.a.createElement("li",{className:e.p},"Todos por acessibilidade -"," ",o.a.createElement(s.Link,{href:"http://acessibilida.de/",style:{fontSize:"1rem"}},"Acessibilida.de"))),o.a.createElement("br",null),o.a.createElement(s.Grid,{direction:"row",alignItems:"center"},o.a.createElement(s.Cell,null)," ",o.a.createElement(s.Icon,{icon:"rocket",fill:"primary"}),o.a.createElement(s.Cell,null,o.a.createElement(s.Heading,{level:3},"Cursos"))),o.a.createElement("ul",null,o.a.createElement("li",{className:e.p,lang:"en"},"Web Accessibility: Developing with Empathy -"," ",o.a.createElement(s.Link,{href:"https://www.udacity.com/course/web-accessibility--ud891",style:{fontSize:"1rem"}},"Udacity"))),o.a.createElement("br",null),o.a.createElement(s.Grid,{direction:"row",alignItems:"center"},o.a.createElement(s.Cell,null)," ",o.a.createElement(s.Icon,{icon:"gearFilled",fill:"primary"}),o.a.createElement(s.Cell,null,o.a.createElement(s.Heading,{level:3},"Ferramentas"))),o.a.createElement("ul",null,o.a.createElement("li",{className:e.p,lang:"en"},"The Persona Spectrum -"," ",o.a.createElement(s.Link,{href:"https://www.microsoft.com/design/",style:{fontSize:"1rem"}},"Microsoft Design")),o.a.createElement("li",{className:e.p},"Verificador de Contraste de Cor -",o.a.createElement(s.Link,{href:"https://webaim.org/resources/contrastchecker/",style:{fontSize:"1rem"}},"Webaim"))))),o.a.createElement("section",{className:e.newsletter,id:"newsletter"},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(s.Heading,{level:2},"Se inscreva na nossa newsletter"),o.a.createElement("p",{className:e.p},"Receba not\xedcias sobre o que h\xe1 de mais novo em acessibilidade digital. ",o.a.createElement("br",null)," Prometemos enviar somente o necess\xe1rio, nada de spams!")),o.a.createElement("div",{className:e.card}," ",o.a.createElement(m,null))))),o.a.createElement("footer",{className:e.footer},o.a.createElement(s.Grid,{direction:"row",wrap:!0},o.a.createElement(s.Cell,{xs:12,lg:6},o.a.createElement("img",{src:t(42),alt:"Logo Acessibilidade Digital"}),o.a.createElement("p",null,"Vers\xe3o 1.0")),o.a.createElement(s.Cell,{xs:12,lg:6,alignSelf:"center"},o.a.createElement("p",{className:e.pSmall},"O site Acessibilidade Digital \xe9 um Projeto de Conclus\xe3o em Design da Universidade Federal de Santa Catarina, produzido por"," ",o.a.createElement(s.Link,{href:"https://twitter.com/carolinekrone",style:{color:"white"}},"Caroline Krone"),". ",o.a.createElement("br",null),"Caso tenha alguma pergunta entre em contato pelo e-mail ou abra uma issue no"," ",o.a.createElement(s.Link,{style:{color:"white"},href:"https://github.com/carolinekrone/a11y-tests",target:"_blank",alt:"P\xe1gina do projeto no GitHub"},"GitHub"),". ",o.a.createElement("br",null),"Este site foi construido utilizando os componentes do"," ",o.a.createElement(s.Link,{style:{color:"white"},href:"https://bold.bridge.ufsc.br/",target:"_blank",alt:"Design system Bold"},"Design System Bold."))))))};function M(e){return{skiplink:{clip:"rect(1px,1px,1px,1px)",overflow:"hidden",padding:"1rem !important","&: focus":{height:"auto",width:"auto",clip:"auto",backgroundColor:e.pallete.primary.c30,color:e.pallete.gray.c100,fontSize:"1rem"}},header:{marginBottom:"1rem",padding:"1% 8% 1%",width:"100%",height:"5rem",backgroundColor:e.pallete.gray.c100,boxShadow:e.shadows.outer[40]},section:{margin:"5% 8%"},blueSection:{padding:"5% 8%",backgroundColor:e.pallete.primary.c30,color:e.pallete.gray.c100},graySection:{margin:"0 4%",backgroundColor:e.pallete.gray.c90,padding:"2rem 20rem"},centerSection:{paddingTop:"1rem",paddingBottom:"1rem"},p:{fontWeight:400,fontSize:18},pSmall:{fontWeight:400,fontSize:14},pBig:{fontWeight:400,fontSize:20,margin:"1% 0 5%"},ul:{listStyle:"none"},li:{verticalAlign:"middle",paddingTop:"2rem"},blockquote:{marginLeft:"7rem",fontSize:24,lineHeight:1.4,fontStyle:"italic","&::before":{display:"inline-block",content:"",margin:"0.875rem",left:"-1rem",width:"80px",height:"2px",borderTop:"2px solid ".concat(e.pallete.gray.c100)}},newsletter:{alignItems:"center",backgroundColor:e.pallete.primary.c10,padding:"4%",color:e.pallete.gray.c100},card:{color:e.pallete.gray.c10,backgroundColor:e.pallete.gray.c100,boxShadow:e.shadows.outer[160],borderRadius:4,maxWidth:"500px",margin:"2rem auto",padding:"2rem"},block:{marginTop:"1rem"},footer:{backgroundColor:e.pallete.gray.c10,color:e.pallete.gray.c100,padding:"2% 8%"}}}var O=function(){return o.a.createElement(s.ThemeProvider,null,o.a.createElement(s.GlobalCss,{styles:{h1:{fontSize:"2.25rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.2rem"}}}),o.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.0fb6cf5d.chunk.js.map