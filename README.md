# Circle Rice — Website

Professional website for **Circle Rice** mill: premium rice production, local distribution, and international export.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts**: Cormorant Garamond (display), Source Sans 3 (body)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Sections

- **Hero** — Brand headline and CTAs (Products, Export)
- **About** — Company intro, quality focus, export readiness
- **Products** — Rice varieties (Keeri Samba, Samba, Nadu, Red, Raw, etc.)
- **Export** — International trade: FOB/CIF, packaging, certifications, logistics
- **Health Benefits** — Cholesterol-free, energy, vitamins, fibre
- **Contact** — Address, phone, email (placeholders to replace with your details)
- **Footer** — Links and copyright

## Customise

1. **Contact** — In `src/components/Contact.tsx`, replace placeholders with your real address, phone numbers, and emails.
2. **Images** — Add mill/field photos: replace the placeholder in `src/components/About.tsx` with an `<Image>` or `<img>` pointing to your assets.
3. **Products** — Edit the list in `src/components/Products.tsx` to match your actual product range and names.
4. **Colours** — Adjust the `circle` palette in `tailwind.config.ts` if you want a different look.

## Export focus

The site highlights export readiness: flexible packaging, documentation, logistics, and a dedicated “Contact Export Team” CTA for international buyers.
