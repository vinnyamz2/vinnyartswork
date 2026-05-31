# Vinny Arts

Site portfólio em React + Vite. SPA estática, deploy em qualquer host.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build      # gera dist/
npm run preview    # serve dist/ localmente
```

## Deploy

### Vercel
- Importe o repositório. `vercel.json` já está configurado.

### Netlify
- Conecte o repositório. `netlify.toml` já está configurado.
- Ou: `npm run build` e arraste a pasta `dist/` em https://app.netlify.com/drop.

### GitHub Pages
- Ative GitHub Pages em **Settings → Pages → Source: GitHub Actions**.
- Se o site for em `https://usuario.github.io/<repo>/`, edite `.github/workflows/deploy.yml`
  e descomente `VITE_BASE: "/<repo-name>/"`.
- Push para `main` faz o deploy automático.

## Contato

- WhatsApp: (94) 99102-2124
- Instagram: @vinny.art
- Email: vinnyfpamz@gmail.com
