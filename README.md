# Abhishek Raj | Portfolio

Personal portfolio of **Abhishek Raj**, Full Stack Java Developer.

Live: https://abhishekraj.is-a.dev/

Plain HTML, CSS and JavaScript, with no build step. All content lives in `data.js`.

## After editing `data.js`

The page is drawn by `script.js`, so `index.html` also carries a plain-HTML copy of the content for visitors and crawlers without JavaScript. Refresh it after changing `data.js`:

```bash
node tools/noscript.mjs          # rewrites the <noscript> block in index.html
node tools/noscript.mjs --check  # tells you if it is out of date
```

## React Bits effects

A few animations from [React Bits](https://reactbits.dev) (gradient name and headings, blur-in text, star border button, decrypting email, click sparks) are layered on top by `assets/reactbits/reactbits.js`. Their source is in `reactbits/src/`. After changing it, rebuild with:

```bash
cd reactbits
npm install
npm run build
```

The page works without the bundle, so the site still needs no build step to deploy.
