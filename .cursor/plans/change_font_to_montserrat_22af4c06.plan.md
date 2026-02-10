---
name: Change Font to Montserrat
overview: Replace the current fonts (JetBrains Mono and Geist) with Montserrat for the primary sans-serif font, using Next.js's built-in Google Fonts optimization.
todos:
  - id: update-layout
    content: Update app/layout.tsx to import and configure Montserrat font
    status: completed
  - id: update-globals
    content: Update app/globals.css font variable mapping
    status: completed
isProject: false
---

# Change Font to Montserrat

## Current Setup

In `[app/layout.tsx](app/layout.tsx)`, the project currently uses:

- `JetBrains_Mono` as `--font-sans`
- `Geist` as `--font-geist-sans`
- `Geist_Mono` as `--font-geist-mono`

## Changes Required

### 1. Update `[app/layout.tsx](app/layout.tsx)`

Replace the font imports and configuration:

```tsx
import { Montserrat, Geist_Mono } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
```

Update the HTML/body classes:

```tsx
<html lang="en" className={montserrat.variable}>
  <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
```

### 2. Update `[app/globals.css](app/globals.css)`

Update the font variable mapping in the `@theme inline` block:

```css
--font-sans: var(--font-sans);
--font-mono: var(--font-mono);
```

This keeps the monospace font (Geist Mono) for code blocks while switching the primary font to Montserrat.

## Notes

- Next.js will automatically optimize and self-host the Montserrat font
- No need for external `<link>` tags or Google Fonts CDN
- Font weights are automatically included (Montserrat supports 100-900)
