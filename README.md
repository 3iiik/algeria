# Which Algerian City Should You Live In?

A static web quiz — pure client-side HTML/CSS/JS.

## File Structure

```
index.html      — Single page with intro / quiz / result screens
style.css       — Dark theme, gold accents, mobile-first
data.js         — QUESTIONS array and CITIES object (edit this to add content)
quiz.js         — Scoring logic (dot product similarity) and UI state management
share.js        — Downloads a shareable result image via html2canvas (loaded from CDN)
```

## Run Locally

Any static file server will work:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .

# Or just open index.html directly (works for the quiz, but share may need a server)
```

Then open `http://localhost:8080` in your browser.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo into Vercel — it auto-detects a static project
3. Deploy (zero config needed)

## Adding Cities / Questions

Edit `data.js`:
- Add a new object to `CITIES` with `name`, `emoji`, `tagline`, `description`, and `tags`
- Add a new entry to `QUESTIONS` with `question` and two `options` (each with a `tags` map)

The scoring uses dot product similarity — no other code changes needed.
