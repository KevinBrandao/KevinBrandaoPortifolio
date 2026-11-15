# Portfólio — Kevin Brandão

Portfólio profissional de Kevin Brandão (Quality Assurance · Web Development · Software Engineering · Innovation).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** para estilos, com tokens de tema em `src/app/globals.css`
- **Motion** para animações de entrada (respeita `prefers-reduced-motion`)
- **Lucide** para ícones
- **Vercel Analytics** (sem cookies), ativo somente em deploys na Vercel

Todas as páginas são geradas estaticamente. Não há backend nem banco de dados.

## Estrutura

```
src/
  app/
    page.tsx                 página inicial (todas as seções)
    projetos/[slug]/         página de detalhes de cada projeto
    curriculo/               currículo em HTML, com impressão e download do PDF
    not-found.tsx            página 404
    opengraph-image.tsx      imagem de compartilhamento (LinkedIn, WhatsApp)
    sitemap.ts, robots.ts    SEO
  components/                seções e componentes reutilizáveis
  data/
    profile.ts               dados pessoais, links, textos de apresentação
    career.ts                experiência, formação, cursos e stack
    projects.ts              projetos e repositórios
public/
  kevin-brandao-curriculo.pdf
  kevin-brandao.jpg
  projetos/                  screenshots dos projetos
legacy/                      versão anterior do portfólio (HTML/CSS/JS), preservada
```

**Para atualizar o conteúdo, edite apenas os arquivos em `src/data/`.** Para trocar o currículo, substitua
`public/kevin-brandao-curriculo.pdf` mantendo o mesmo nome.

## Desenvolvimento

Requer Node.js 20 ou superior.

```bash
npm install
```

```bash
npm run dev
```

O site abre em http://localhost:3000.

```bash
npm run build
```

```bash
npm run typecheck
```

## Publicação na Vercel

1. Envie o projeto para o GitHub (branch `main`).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta o Next.js sozinha:
   não é preciso alterar comando de build nem diretório de saída.
3. Clique em **Deploy**. A partir daí, cada push na `main` publica automaticamente, e cada pull request
   ganha uma URL de pré-visualização. O HTTPS é automático.

### Variáveis de ambiente

| Variável | Obrigatória | Para que serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Não | URL pública usada em SEO, Open Graph e sitemap. Sem ela, o site usa o domínio de produção do projeto na Vercel. Defina ao configurar um domínio próprio (ex.: `https://seudominio.com.br`). |

### Domínio personalizado

Em **Project → Settings → Domains**, adicione o domínio e siga as instruções de DNS. Depois defina
`NEXT_PUBLIC_SITE_URL` com o novo endereço e faça um novo deploy.

### Analytics

Em **Project → Analytics**, clique em **Enable**. O componente já está no layout e não usa cookies.
