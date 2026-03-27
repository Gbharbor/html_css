---
# Tailwind CSS — Setup
Guia para configuração do Tailwind CSS em projetos com HTML, CSS e JavaScript.
---
# Instalação

Inicializar o projeto:

```bash
npm init -y
```

Instalar o Tailwind CSS:

```bash
npm install -D tailwindcss
```

Gerar o ficheiro de configuração:

```bash
npx tailwindcss init
```

---

## Configuração

No ficheiro `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Estrutura inicial

Criar o ficheiro de entrada:

```bash
src/input.css
```

Conteúdo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Build do CSS

Gerar o ficheiro final:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

---

## Integração no HTML

No `<head>` do HTML:

```html
<link rel="stylesheet" href="./dist/output.css">
```

---

## Alternativa de saída

Gerar o CSS dentro da pasta `src`:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Atualizar no HTML:

```html
<link rel="stylesheet" href="./src/output.css">
```

---

## Estrutura do projeto

```bash
project/
├── node_modules/
├── src/
│   ├── input.css
│   └── index.html
├── dist/
│   └── output.css
├── tailwind.config.js
├── package.json
└── package-lock.json
```

---

## Observações

* Indicado para projetos simples sem bundler
* Em projetos com React ou Vite, o setup difere
* A propriedade `content` define onde o Tailwind procura classes utilizadas

---

## Resultado

Após a configuração, já é possível utilizar classes utilitárias diretamente no HTML:

```html
<h1 class="text-3xl font-bold text-blue-500">
  Hello Tailwind
</h1>
```

---
