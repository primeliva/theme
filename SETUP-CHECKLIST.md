# PrimeLiva — Store Setup Checklist

Follow top to bottom. ~30 minutes. After this, your live store matches the design 1:1.

---

## 0. Upload the theme correctly
1. Unzip the theme download.
2. If everything is inside a `theme/` folder, **re-zip the inner folders only** (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`) so they sit at the zip root.
3. Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.
4. On the uploaded "PrimeLiva" theme → **⋯ → Preview** (or **Publish** when ready).

---

## 1. Brand colors (already set, optional to tweak)
**Customize → Theme settings → Colors**
- Brand green `#146A53` · Green dark `#0E4F3E` · Green tint `#E7F0EB` · Page background `#F6F2EA` · Text/navy `#19213B`

---

## 2. Navigation menu
**Content → Menus → Main menu** — set links: Home (`/`), Shop (`/collections/all`), Track Order (your tracking page), Contact (`/pages/contact`).

---

## 3. Create collections
**Products → Collections → Create collection** (manual or automated):
- **Bestsellers** (for the homepage featured row)
- **Wellness**, **Kitchen**, **Self-care**, **Safety** (for category tiles)

---

## 4. Add products
**Products → Add product.** Create these 5 (price = Price, MRP = Compare-at price):

| Product | Price | Compare-at | Type |
|---|---|---|---|
| CalfRelief Pro | 2499 | 3999 | Wellness |
| HerShield | 499 | 899 | Safety |
| PrimeSlice Pro | 999 | 1999 | Kitchen |
| SmoothEase | 999 | 1999 | Self-care |
| SnapSeal | 1199 | — | Kitchen |

For each: set **Media** (your photos), **Description**, **Product type** (drives the card category label), and add it to the right collections.

---

## 5. CalfRelief Pro — exact content to paste

**Description:**
> Soothing air compression and gentle heat therapy to relieve leg fatigue, ease tightness and support everyday recovery.

**On the product page section blocks (Customize → a product → main-product blocks):**

- **Spec chips:** `Cordless, 3 Heat Levels, Whisper Quiet, Lightweight`
- **Benefits (separate with `|`):** `Reduces leg fatigue & swelling|3 levels of soothing heat|3 modes & 3 intensities|USB-C rechargeable, fully wireless`
- **Feature strip** (one per line, `Title :: Text`):
  ```
  Air Compression :: Simulated massage to relax tired muscles.
  Soothing Heat :: 3 levels of warmth for deeper relaxation.
  3 Modes · 3 Levels :: Personalised comfort for everyone.
  Wireless & Portable :: USB-C rechargeable. Use it anywhere.
  ```
- **Stats band** (`Value :: Label`):
  ```
  2–5 hrs :: Battery life
  3 :: Massage modes
  3 :: Heat levels
  USB-C :: Fast charging
  ```
- **How it works:** Step 1 Wrap / Step 2 Select / Step 3 Relax (+ images)
- **What's included:**
  ```
  1 × Air Compression Leg Massager
  1 × Type-C Charging Cable
  1 × User Manual
  ```
- **FAQ** (`Question :: Answer`):
  ```
  How long does delivery take? :: Orders ship within 24 hours and arrive in 3–6 days, free across India.
  Is Cash on Delivery available? :: Yes, COD is available everywhere in India.
  What is your return policy? :: Every order is covered by a 30-day money-back guarantee.
  Is there a warranty? :: Yes — 6-month warranty against manufacturing defects.
  ```

> Tip: instead of editing each product's section blocks, you can store this once per product in **metafields** (`custom.subtitle`, `custom.chips`, `custom.benefits`, `custom.rating`, `custom.reviews`) — the product page reads those automatically.

---

## 6. Homepage (Customize → Home)
- **Hero:** upload a lifestyle background image; headline/eyebrow/button are pre-filled.
- **Featured products:** pick the **Bestsellers** collection.
- **Featured product:** pick **CalfRelief Pro**.
- **Categories:** assign each tile to its collection + image.
- **Testimonials:** pre-filled; edit names/quotes as you like.

---

## 7. Contact page
**Content → Pages → Add page**, title **Contact**, then set its template to **contact** (Theme template dropdown). Details (email `support@primeliva.com`, hours Mon–Sat) are editable in that section.

---

## 8. Reviews (Loox)
Install **Loox** from the Shopify App Store → connect to theme. It auto-fills the "Loved by customers" review slot and adds star ratings to product cards.

---

## 9. Checkout extras
- **Settings → Payments:** enable Cash on Delivery + your payment provider (for the prepaid 5%-off offer, set up a discount or use the Fastrr app).
- **Settings → Shipping:** set Free Shipping.

---

Done — your storefront now mirrors the PrimeLiva design with your real catalog.
