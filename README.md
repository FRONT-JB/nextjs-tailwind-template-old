# Next.JS

## NextJS Setup

### Yarn

> ❗ 이미 node_modules이 생겼다면
>
> `"packageManager": "yarn@3.1.1" 를 패키지에 추가`

---

`yarn create next-app —typescript`

`yarn set version berry`

`echo ‘nodeLinker: “pnp”’ >> .yarnrc.yml`

`yarn plugin import typescript`

`yarn add -D typescript`

`yarn dlx @yarnpkg/sdks vscode`

`yarn`

`yarn dev`

---

### gitignore

```
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

---

### prettier

```javascript
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'auto',
  useTabs: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
};
```

---

### prettierignore

```
dist
reset.css
eslintrc.json
```

---

### Tailwind

```
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// GLOBAL.css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

---
