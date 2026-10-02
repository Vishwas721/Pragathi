# Pragathi Solutions website

Next.js 16 + Tailwind 4 company site.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing business details

All contact info (email, WhatsApp, location, site URL) lives in `src/config/site.ts`.
Set `whatsapp` (digits with country code, e.g. `919876543210`) to show WhatsApp buttons.

## Contact form

- Without config, the form opens the visitor's email app pre-filled to `site.email`.
- To receive submissions directly, create a free form at https://formspree.io and set
  `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/<your-id>` in Vercel (or `.env.local`).
