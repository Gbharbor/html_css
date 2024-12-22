// Passo 1: Inicializar o projeto e criar o arquivo package.json
// No terminal, digite:
// npm init -y
// Isso cria o arquivo package.json, que gerencia dependências e scripts.

// Passo 2: Instalar o Tailwind CSS como dependência de desenvolvimento
// No terminal, execute:
// npm i -D tailwindcss
// Isso cria a pasta node_modules e o arquivo package-lock.json.

// Passo 3: Gerar o arquivo de configuração do Tailwind CSS
// No terminal, digite:
// npx tailwindcss init
// Isso cria o arquivo tailwind.config.js.

// Configuração no arquivo tailwind.config.js:
// module.exports = {
//   content: ["./src/**/*.{html,js,ts}"], // Define os arquivos onde o Tailwind buscará classes CSS.
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// Passo 4: Criar o arquivo CSS de entrada
// No diretório src, crie um arquivo chamado input.css.
// Adicione o seguinte código no input.css:
/*
@tailwind base;
@tailwind components;
@tailwind utilities;
*/

// Passo 5: Gerar o arquivo CSS final
// No terminal, execute:
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
// - "-i" especifica o arquivo de entrada (input.css).
// - "-o" define o arquivo de saída (output.css), que ficará na pasta dist.
// - "--watch" monitora mudanças e atualiza o CSS em tempo real.

// Passo 6: Importar o arquivo CSS no HTML
// No arquivo HTML, adicione a seguinte linha no <head>:
// <link rel="stylesheet" href="./dist/output.css">

// Passo 7: Alterar o local do arquivo CSS final (opcional)
// Caso prefira que o arquivo final esteja na pasta src, use o comando:
// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
// Depois, ajuste o caminho no HTML para:
// <link rel="stylesheet" href="./src/output.css">

// Passo 8: Parar o monitoramento do Tailwind
// No terminal, pressione "Ctrl + C" para interromper o processo de monitoramento.

// Estrutura final do projeto esperada:
/*

*/