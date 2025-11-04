## GreenHaven Plants – Houseplant Shop (React + Redux, no build tools)

This is a minimal, deployable web app that satisfies the 50-point rubric:

- Landing page with background image, company name, paragraph, and Get Started button
- Product listing with 6 unique houseplants, grouped by categories
- Add to Cart behavior (increments cart icon, disables button, adds to cart)
- Header on both pages with navigation and live cart count
- Shopping cart page with list, thumbnails, unit prices, increase/decrease, delete, totals, checkout placeholder, and continue shopping

### Tech

- React 18, React Router 6, Redux Toolkit, React-Redux (via CDN ESM imports)
- No Node/npm required. Works on GitHub Pages.

### Run locally

Option A: Open `index.html` directly in a modern browser (recommended to use a local server for router refreshes).

Option B: Serve a local web server (prevents router refresh issues):

```bash
cd /path/to/Mooc-1
python3 -m http.server 5173
# then open http://localhost:5173 in your browser
```

### Project structure

```
Mooc-1/
  index.html
  styles.css
  src/
    main.js
    data/products.js
    store/store.js
    pages/
      Landing.jsx
      Products.jsx
      Cart.jsx
    ui/
      Header.jsx
```

### Deploy to GitHub Pages

Because this is a static site, you can deploy directly:

1. Create a new public GitHub repository (e.g., `greenhaven-plants`).
2. Copy this entire folder’s contents into the repo root and commit/push.
3. In GitHub, go to `Settings` → `Pages` → Set `Branch: main` and `Folder: / (root)` (or `/docs` if you place files there). Save.
4. Wait for Pages to publish, then share the provided website URL.

If your Pages requires a subpath (like `/greenhaven-plants/`), router refresh may 404. Two options:

- Navigate only via in-app links; avoid hard refresh on subroutes
- Or publish files into `/docs` and set Pages folder to `/docs` (still works the same)

### Redux-related files

- `src/store/store.js` contains the cart slice (actions: addItem, increment, decrement, removeItem, clear) and selectors for total count/cost.

### Notes for Peer Review

- Add-to-cart disables the button for that product on the listing after adding once, increments cart icon, and adds to cart state.
- Cart page supports increment/decrement, delete, total items, total cost, and provides checkout (Coming Soon) + continue shopping link.
- Header appears on product listing and cart pages; navigation to either page is available.


