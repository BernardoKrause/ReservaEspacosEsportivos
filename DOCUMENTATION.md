# 1. Descrição do Projeto

O Sistema de Gerenciamento de Reservas de Espaços Esportivos é uma aplicação projetada para facilitar o gerenciamento de reservas em diferentes espaços esportivos, como quadras, campos e ginásios. O sistema permite que os usuários reservem, cancelem e alterem reservas em horários específicos, além de garantir a integridade e a consistência das informações, evitando conflitos de agendamento.

# 2. Estrutura do Código
A estrutura do projeto está organizada da seguinte forma:

    /src
        /controllers
            - reservaController.js     # Lógica de controle de reservas
            - espacoController.js      # Lógica de controle dos espaços esportivos
        /models
            - Reserva.js               # Modelo de dados da reserva
            - Espaco.js                # Modelo de dados do espaço esportivo
            - Endereco.js              # Modelo de dados de endereço
        /routes
            - reservaRoutes.js         # Definição das rotas de reserva
            - espacoRoutes.js          # Definição das rotas de espaços esportivos
        /config
            - database.js              # Configuração de conexão com o banco de dados
    /tests
        - reserva.test.js              # Testes unitários de reservas
        - espaco.test.js               # Testes unitários de espaços
    /public
        - index.html                   # Interface de usuário (se aplicável)
    /documentation
        - DOCUMENTATION.md             # Documentação adicional do projeto
        - README.md   

## 2.1 controllers/
Esta pasta contém os controladores do sistema. Cada controlador é responsável pela lógica de negócio de sua respectiva entidade (reservas, espaços, etc.).

## 2.2 models/
Os modelos representam as entidades do banco de dados no código. Cada arquivo dentro de /models define a estrutura de uma tabela do banco de dados, incluindo atributos e restrições.

## 2.3 routes/
As rotas definem os caminhos e métodos HTTP (GET, POST, PUT, DELETE) que o sistema utiliza para interagir com os recursos. Cada entidade possui suas próprias rotas, mapeadas para funções no controlador.

## 2.4 config/
Contém arquivos de configuração, incluindo o arquivo de configuração de banco de dados, onde a conexão com o PostgreSQL é estabelecida.

## 2.5 public/
Esta pasta contém os arquivos de frontend, como HTML, CSS e JavaScript, para a interface do sistema.

# 3. Dependências

O projeto utiliza as seguintes dependências principais:

* Node.js: Ambiente de execução para o código JavaScript do servidor.
* Express.js: Framework para construção do servidor HTTP e manipulação de rotas.
* PostgreSQL: Banco de dados relacional utilizado para armazenar as informações do sistema.
* dotenv: Carrega variáveis de ambiente a partir de um arquivo .env.
* CORS: Permite a outros realizarem requisições à API.

Para visualizar todas as dependências, consulte o arquivo package.json.

# 4. Instalação

## 4.1 Pré-requisitos
Antes de iniciar a execução do projeto, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/en/download/package-manager)
* [PostgreSQL](https://www.postgresql.org/)

## 4.2 Configuração

* Clone este repositório: git clone https://github.com/usuario/projeto-gerenciamento-reservas.git

* Instale as dependências: npm install

* Crie um banco de dados no PostgreSQL: CREATE DATABASE reservas_espacos_esportivos;

* Configure a conexão com o banco de dados no arquivo .env:
    *    *DB_HOST=localhost
    *    DB_USER=seu_usuario
    *    DB_PASS=sua_senha
    *    DB_NAME=reservas_espacos_esportivos

# 5. Como Executar
Para executar o projeto em um ambiente de desenvolvimento, execute o seguinte comando: npm start

#### o servidor iniciará na porta especificada como http://localhost:3000

