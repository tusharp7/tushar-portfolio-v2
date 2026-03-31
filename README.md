# Tushar Birajdar Portfolio

A personal developer portfolio for Tushar Birajdar, built with Next.js and customized from a portfolio starter template.

This version showcases Tushar's:
- software engineering profile
- work experience at Bitwise and BMC Software
- education at PICT
- featured projects
- competitive programming profiles
- Databricks certification
- downloadable resume

## Live Profile Highlights

- LinkedIn: [https://linkedin.com/in/TusharBirajdar](https://linkedin.com/in/TusharBirajdar)
- GitHub: [https://github.com/Tusharp7](https://github.com/Tusharp7)
- Codeforces: [https://codeforces.com/profile/Pineapple1_](https://codeforces.com/profile/Pineapple1_)
- CodeChef: [https://www.codechef.com/users/tu_sharp](https://www.codechef.com/users/tu_sharp)
- Databricks Credential: [https://credentials.databricks.com/a775b365-cf1e-4940-b2a0-1b985795a6fa#acc.evaxLf2G](https://credentials.databricks.com/a775b365-cf1e-4940-b2a0-1b985795a6fa#acc.evaxLf2G)

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Magic UI
- Framer Motion

## Features

- Responsive personal portfolio homepage
- Work experience and education sections
- Featured project cards with live and GitHub links
- Competitive programming and certification highlights
- Dock-style social navigation
- Resume download
- Vercel-ready deployment

## Project Structure

```text
.
├── public/
│   ├── resume.pdf
│   ├── tushar-profile.jpeg
│   ├── bitwise.svg
│   ├── codeforces.svg
│   ├── codechef.svg
│   └── databricks.svg
├── src/
│   ├── app/
│   ├── components/
│   └── data/
│       └── resume.tsx
├── package.json
└── README.md
```

## Main Customizations

- Replaced the starter profile data with Tushar Birajdar's information in `src/data/resume.tsx`
- Added Tushar's profile photo
- Added Bitwise logo support
- Added Codeforces and CodeChef profile links and highlight cards
- Added Databricks certification link and highlight card
- Replaced the bundled resume with Tushar's resume

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

This project can be deployed directly on Vercel.

Recommended workflow:

1. Push the code to GitHub
2. Import the repository into Vercel
3. Deploy

## Credits

This project started from the `portfolio-v2` starter by `shxntanu` and was customized extensively with Tushar Birajdar's content, assets, and links.
