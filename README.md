# Gerenciador de Tarefas

Este é um projeto de um Gerenciador de Tarefas criado com React.

## Funcionalidades

- Adicionar novas tarefas com título e descrição.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- As tarefas são salvas no armazenamento local do navegador, para que persistam mesmo após a atualização da página.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/ValdirPinheiroDeveloper/create_task.git
   ```
2. Acesse a pasta do projeto:
    ```bash
    cd create_task
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Execute o projeto em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
5. Abra seu navegador e acesse `http://localhost:5173` (a porta pode variar).

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### `npm run build`

Cria o aplicativo para produção na pasta `dist`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

### `npm run lint`

Executa o linter para verificar erros de estilo de código.

### `npm run preview`

Inicia um servidor local para visualizar a versão de produção do seu aplicativo.
