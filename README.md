# Aplicação de Postagens - Front-End


## Apresentação Gravada do funcinamento da aplicação
[Assista a apresentação](https://drive.google.com/file/d/1ey5QZu8Va-Cw867kn66cfxrQIUKKqidv/view?usp=drive_link)

## Descrição
Esta aplicação front-end de postagens foi desenvolvida utilizando React e permite a criação, visualização, leitura e gerenciamento de postagens. Professores têm permissões de gerenciamento completo das postagens, enquanto os alunos podem apenas visualizar e ler as postagens publicadas.

### Funcionalidades
- **Alunos**:
  - Visualizam uma lista de postagens na página principal.
  - Podem ler uma postagem específica ao clicar no título ou conteúdo.
  
- **Professores**:
  - Acessam uma área administrativa para gerenciar as postagens (login requerido).
  - Podem criar, editar, listar e excluir postagens.

## Requisitos
Para executar a aplicação localmente, você precisará ter o seguinte instalado:
- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) para gerenciamento de pacotes

## Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/TadeunASCIImento/tech-challenge-fiap-fase3.git
    ```

2. **Acesse o diretório do projeto**:
    ```bash
    cd nome-do-repositorio
    ```

3. **Instale as dependências**:
    Com npm:
    ```bash
    npm install
    ```

## Executando a Aplicação

1. **Inicie o servidor de desenvolvimento**:
    Com npm:
    ```bash
    npm run dev
    ```

2. Abra o navegador e acesse:
    ```
    http://localhost:5173
    ```


## Fluxo da Aplicação

### Visão dos Alunos:
- Os alunos acessam a página principal e veem a lista de postagens.
- Ao clicar em uma postagem, eles podem visualizar o conteúdo completo da postagem.

### Visão dos Professores (Área Administrativa):
- Os professores fazem login para acessar a área administrativa.
- Na área administrativa, os professores podem:
  - Criar novas postagens.
  - Editar postagens existentes.
  - Listar todas as postagens criadas.
  - Excluir postagens.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **React Router**: Gerenciamento de rotas da aplicação.
- **CSS Modules**: Estilização dos componentes.


### Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção.


## Estrutura de Pastas
```bash
├── public
│   └── index.html        # HTML principal da aplicação
├── src
├── ├── assets            # Componentes React da aplicação   
│   ├── components        # assests da aplicação   
│   ├── App.tsx           # Componente principal
│   └── main.js           # Ponto de entrada da aplicação
├── .gitignore            # Arquivos e pastas a serem ignorados no Git
├── package.json          # Dependências e scripts do projeto
└── README.md             # Documentação do projeto
