# Folivita — Ateliê de Chás Orgânicos

**A vida em cada folha.**

Folivita é um projeto da disciplina de front-end da Especialização de Desenvolvimento Web do IF Sul de Minas que apresenta a identidade digital de um ateliê fictício especializado em chás orgânicos e infusões botânicas.

A proposta é transmitir a essência de uma marca que valoriza ingredientes naturais, pequenos produtores e processos artesanais, por meio de uma experiência digital elegante, acolhedora e intuitiva.

## Sobre o projeto

O site foi desenvolvido como uma página institucional (*landing page*), reunindo informações sobre a marca, apresentação de produtos, proposta de experiência e canais de contato.

O desenvolvimento combina estruturação semântica com HTML, estilização personalizada em CSS, componentes do Bootstrap e interações implementadas com JavaScript.

## Funcionalidades

- **Navegação responsiva:** menu adaptável a diferentes tamanhos de tela.
- **Apresentação institucional:** conteúdo sobre a identidade, missão, visão e valores da marca.
- **Catálogo de produtos:** apresentação de cinco criações de chás e infusões em um carrossel com navegação individual.
- **Seção de experiência:** comunicação da proposta sensorial e artesanal da marca.
- **Formulário de contato:** validação de campos, mensagens de erro e contador de caracteres.
- **Layout responsivo:** adaptação dos elementos para diferentes resoluções.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura e semântica do conteúdo |
| CSS3 | Estilização e identidade visual |
| JavaScript | Interações, carrossel e validação do formulário |
| Bootstrap 5 | Componentes e recursos de layout responsivo |
| Vite | Servidor de desenvolvimento e build de produção |
| npm | Gerenciamento de dependências |
| Google Fonts | Tipografia do projeto |

O Bootstrap é instalado e gerenciado como dependência do projeto por meio do npm. O Vite é utilizado para integrar os recursos e gerar os arquivos otimizados para produção.

## Identidade visual

A identidade visual da Folivita foi construída a partir de referências botânicas e artesanais, com uma linguagem visual natural, contemporânea e sofisticada.

**Elementos da identidade:**

- **Cormorant Garamond:** tipografia utilizada nos títulos.
- **Lato:** tipografia utilizada nos textos e elementos de interface.
- **Paleta cromática:** tons de verde, creme e terra, inspirados na natureza e nos ingredientes botânicos.

O documento de identidade visual está disponível em [`assets/docs/Identidade-Visual-Folivita.pdf`](assets/docs/Identidade-Visual-Folivita.pdf).

## Estrutura do projeto

```text
folivita/
├── assets/
│   ├── docs/
│   │   └── Identidade-Visual-Folivita.pdf
│   ├── images/
│   └── logo/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm, incluído na instalação do Node.js.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/nelleuSant/projeto-frontend-folivita.git
```

Acesse a pasta:

```bash
cd projeto-frontend-folivita
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará um endereço local para acessar a aplicação pelo navegador.

### Build de produção

Para gerar os arquivos otimizados:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

Para visualizar localmente a versão de produção:

```bash
npm run preview
```

## Observações

- A Folivita é uma marca fictícia, desenvolvida para fins educacionais e de portfólio.
- Os dados de endereço e contato apresentados no site são fictícios.
- O formulário implementa validação no front-end e não realiza envio de mensagens para um servidor.

---

Link do site: https://projeto-frontend-folivita.netlify.app/

**Desenvolvido como projeto de estudo da pós-graduação em Desenvolvimento Web do IF Sul de Minas.**