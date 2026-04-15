# Stealth Lens

Aplicacao React para cadastro e gestao de parceiros e empresas externas, usando PrimeReact e Vite.

## Stack

- React 18
- React Router DOM 6
- PrimeReact e PrimeFlex
- Axios
- Vite 7
- ESLint 9
- Docker com Nginx para servir o build de producao

## Scripts

```sh
npm install
npm run dev
npm run lint
npm run build
```

## Desenvolvimento local

O servidor de desenvolvimento sobe em:

```txt
http://localhost:5173
```

## Build de producao

```sh
npm run build
```

O resultado fica em `dist/`.

## Docker

Build da imagem:

```sh
docker build -t stealth-lens .
```

Executar localmente:

```sh
docker run -p 4173:80 stealth-lens
```

Ou com Compose:

```sh
docker compose up --build
```

Aplicacao disponivel em:

```txt
http://localhost:4173
```

## Deploy

O projeto esta configurado como SPA. Em ambientes como Vercel, rotas internas sao redirecionadas para `index.html`.

## Observacoes

- O login atual e uma sessao local simples usando cookie ou localStorage.
- As listagens consomem APIs mockadas externas.
- O codigo foi reorganizado para centralizar rotas, sessao, normalizacao de dados e servicos HTTP.
- Se a API externa falhar, o front usa dados seedados e um CRUD local persistido em `localStorage`, mantendo o site funcional para estudo e demonstracao.
