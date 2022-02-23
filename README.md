# Next.JS

### Yarn Berry

`yarn create next-app —typescript`

`rm -rf .git`

`yarn set version stable`

`yarn plugin import typescript`

`yarn dlx @yarnpkg/sdks vscode`

`yarn`

`yarn dev`

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

### gitignore

Zero-Install을 사용하겠다면?
```
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

Zero-Install을 사용하지 않겠다면?
```
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
```

---

### Tailwind

```
yarn add -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p
```

```javascript
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`styles/globals.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---
