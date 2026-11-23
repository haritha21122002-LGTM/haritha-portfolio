# Haritha K – Data Analyst Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Add your resume
Replace `public/resume.pdf` with your own PDF (keep the file name `resume.pdf`).

## Add GitHub / LinkedIn links
- Profile links: edit `src/data/profile.js` (`github`, `linkedin`). Empty = icon hidden.
- Project repos / live demos: edit `src/data/projects.js` (`github`, `demo`).
- Certificate PDFs: put them in `public/certificates/` and set `file` in `src/data/certifications.js`.

## Deploy
**Vercel:** push to GitHub, then vercel.com > Import Project > Framework "Vite" > Deploy.
**GitHub Pages:** `npm i -D gh-pages`, add `"deploy": "vite build && gh-pages -d dist"` to scripts, then `npm run deploy`
(`base: "./"` is already set in `vite.config.js`).
