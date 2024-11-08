# Folha de Pagamento

Este projeto é composto por dois repositórios: um para o **front-end** e outro para a **API**. Ambos são dependentes e utilizam um banco de dados PostgreSQL rodando em um container Docker.

## Intenção do Projeto

A intenção deste projeto é explorar o uso do **Nest.js** no backend, uma vez que há muitas piadas sobre JavaScript no backend e eu queria ter uma experiência prática. A lógica simples de cálculo de INSS e IRRF, que muitos têm em planilhas Excel, foi aplicada em código para aprendizado. Comecei a estudar Nest.js há cerca de 15 dias, então o código pode estar básico e há muito espaço para melhorias. Este é um estudo contínuo e tenho muito a aprender.

## Limites do Projeto

- Não inclui todos os cálculos de uma folha de pagamento completa.
- Não entra em detalhes de composição salarial.
- Não gera relatórios; apenas cadastra funcionários com salário base e calcula os descontos.

## Front-end - Next.js

- Cadastro de usuário, grupo de usuário e permissões.
- Cadastro de funcionário com valor de salário base para cálculo de INSS e IRRF.
- Cadastro de empresas.
- Cadastro da tabela de alíquota INSS e IRRF.
- Algumas telas permitem edição e inclusão com formulário dentro da página ou em um modal.
- Interface com lógica mínima.
- Uso de hooks personalizados para cada tela.
- Autenticação JWT com validação de token e tempo de expiração.

## Back-end - Nest.js

- Controllers com CRUD de cada módulo.
- Camada de serviço utilizando Prisma para acesso aos dados.
- Camada de userCase para lógica de negócios, mantendo a responsabilidade única.
- JWT para criação e validação de tokens.
- Rotas seguras com validação de permissões.
- Função de semear dados iniciais com o comando `npm run seed`.

## Banco de Dados - PostgreSQL

- Utiliza Docker para criar o banco de dados.
- Documentação e orientação para o Docker-compose estão em: BancoLocal.

## ORM - Prisma

- Migrações e acesso a dados.

## Passos de Instalação

### Docker para o Banco de Dados

A documentação e o próprio Docker-compose estão em: BancoLocal.

### Front-end

1. Clone o repositório:

   ```bash
   git clone https://github.com/jonatasbmf/folha-pagamento
   ```

2. Instale as dependências:

   ```bash
   npm i
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

### Back-end

1. Clone o repositório:

   ```bash
   git clone https://github.com/jonatasbmf/folha-pagamento-api
   ```

2. Instale as dependências:

   ```bash
   npm i
   ```

3. Gere os arquivos do Prisma:

   ```bash
   npx prisma generate
   ```

4. Execute as migrações:

   ```bash
   npx prisma migrate dev --name construir_banco
   ```

5. Inicialize os dados:

   ```bash
   npm run seed
   ```

6. Inicie o servidor de desenvolvimento:

   ```bash
   npm run start:dev
   ```

### Contribuições
Esses repositórios são públicos, sinta-se à vontade para explorar e contribuir. Se tiver alguma sugestão de melhoria, faça um PR com a ideia. É muito melhor sugerir melhorias do que apenas apontar problemas.

### Usuario e senha inicial
sysadmin@sistema.com
P@ssw0rd