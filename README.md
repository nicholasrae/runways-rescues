# Runways and Rescues — Website

Official website for [Runways and Rescues](https://runwaysandrescues.org), a 501(c)3 nonprofit using volunteer pilots to fly rescue animals to safety.

> *"We don't just save animals — we give them wings."*

## Stack
- **Next.js 14** (App Router, fully static)
- **Tailwind CSS**
- **TypeScript**
- Deploy: [Vercel](https://vercel.com) (free tier)

## Pages
| Route | Description |
|---|---|
| `/` | Homepage — hero, stats, Lucy's story, How It Works, press section |
| `/about` | Origin story, founders, partners, 501(c)3 info |
| `/animals` | Animal stories (Lucy, Blaze & Rusty), mission photo grid |
| `/get-involved` | Donate (Ko-fi / Cash App / Vercel) + Volunteer as pilot or handler |
| `/contact` | Contact form, email, social links |

## Run Locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel (Free)
```bash
npx vercel login    # sign in with your email
npx vercel --prod   # deploys in ~2 minutes
```

Then point `runwaysandrescues.org` to your Vercel deployment.

## Donation Links
- Ko-fi: https://ko-fi.com/runwaysandrescues
- Cash App: https://cash.app/$runwaysandrescues
- Venmo: https://venmo.com/runwaysandrescues

## Social
- Instagram: [@runwaysandrescuesinc](https://www.instagram.com/runwaysandrescuesinc)
- Email: runwaysandrescues@gmail.com

## To Update Stats
Edit the `stats` array in `app/page.tsx`:
```js
const stats = [
  { number: "25+", label: "Animals Flown to Safety" },
  { number: "9",   label: "Rescue Flights Completed" },
  { number: "3+",  label: "Partner Organizations" },
];
```

## Built by
Nick Rae & Talos 🛡️ — Feb 2026
