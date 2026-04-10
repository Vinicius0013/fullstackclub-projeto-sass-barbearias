Sistema que utiliza as tecnologias:
[Next.js](https://nextjs.org), [Prisma](https://www.prisma.io/docs), Typescript banco de dados [PostgreSQL](https://www.postgresql.org)

# Prisma
`npm install prisma --save-dev`

`npx prisma init --datasource-provider postgresql`

# Comando para gerar client
`npx prisma generate`

# Cria uma migration em modo de desenvolvimento
`npx prisma migrate dev --name init_db`

# Popular as tabelas com arquivo seed.ts
`npx prisma db seed`

# Comando para validar a estrutura
`npx prisma validate`

# Comando para abrir o Prisma Studio e verificar tabelas/dados
`npx prisma studio`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Plugin Prettier v3+ para Tailwind
Plugin para reordenar as informações das classes de estilo.
Acesse ao link da [documentação do plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

`npm install -D prettier prettier-plugin-tailwindcss`


# Shadcn
Shadcn é um conjunto de componentes com design elegante que podemos personalizar, estender e desenvolver para Next.js
[Link da documentação](https://ui.shadcn.com/docs/installation/next)

## Comando para instalação
`npx shadcn@latest init`

# NextAuth.js
Biblioteca que implementa a autenticação no Nextjs utilizando redes sociais.
Versão utilizada é a v4.

[Link da documentação](https://next-auth.js.org/getting-started/introduction)

## Comando para instalação
`npm install next-auth`