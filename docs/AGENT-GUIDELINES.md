# ATF Challenge Website - Agent Guidelines

> **IMPORTANT**: All agents MUST read this file before working on any section of the website.

---

## Project Overview

This is the landing page for the ATF AI Challenge - a Pan-African AI education program targeting university students and recent graduates in Ghana, Nigeria, Kenya, and South Africa.

**Reference the content brief at**: `docs/content-brief.md`

---

## Critical Guidelines

### 1. Icon Library - HUGEICONS (Not Lucide)

This project uses **Hugeicons**, NOT Lucide icons.

```tsx
// ✅ CORRECT
import { Home01Icon } from "@hugeicons/react";

// ❌ WRONG - Do NOT use Lucide
import { Home } from "lucide-react";
```

The shadcn components.json is configured with `"iconLibrary": "hugeicons"`.

---

### 2. Strategic Partner Attribution

The strategic partner is **Google.org**.

**ALWAYS use this exact phrasing**:

> "supported by Google.org"

Example:

> "The African Technology Forum (ATF), supported by Google.org, is on a mission..."

**NEVER say**:

- "sponsored by Google.org"
- "partnered with Google.org"
- "funded by Google.org"

---

### 3. Mobile-First Development

**ALL styling must be mobile-first.**

```tsx
// ✅ CORRECT - Mobile-first (base styles for mobile, then scale up)
<div className="px-4 py-8 md:px-8 md:py-16 lg:px-16">

// ❌ WRONG - Desktop-first
<div className="px-16 py-16 md:px-8 md:py-8 sm:px-4 sm:py-8">
```

Always start with the mobile layout, then use `md:` and `lg:` breakpoints to enhance for larger screens.

---

### 4. Design System

| Property           | Value                                                                    |
| ------------------ | ------------------------------------------------------------------------ |
| **Primary Accent** | Red - defined in `globals.css` as `--primary: oklch(0.577 0.245 27.325)` |
| **Visual Style**   | Modern, minimal, lots of whitespace                                      |
| **Base Color**     | Stone (from shadcn config)                                               |

Use `bg-primary`, `text-primary`, `border-primary` etc. to access the red accent color.

---

### 5. Animations & Interactions

- Scroll animations and micro-interactions are **expected**
- Each section will be refined individually for polish
- **Primary animation library**: Framer Motion (installed)
- CSS animations: `tw-animate-css` (for simpler effects)

```tsx
// Framer Motion import
import { motion } from "framer-motion";
```

---

### 6. CTA Links

| Button                     | Link     |
| -------------------------- | -------- |
| "Apply for the AI School"  | `#apply` |
| "Start Your Journey Today" | `#apply` |
| "Apply Now"                | `#apply` |

> ⚠️ **IMPORTANT**: `#apply` should link to the application form section, NOT the footer. The footer has its own identity.

---

### 7. Images

Hero and other images will be added as assets in the `/public` folder. Use placeholder references for now:

```tsx
<Image src="/hero-image.jpg" alt="..." />
```

---

### 8. Page Structure

The page includes a **sticky header** with navigation links to each section:

- Hero
- Mission
- How It Works (Journey/Timeline)
- Why Join
- Eligibility
- Timeline/Dates
- Footer (with final CTA)

---

## Section-Specific Notes

### Timeline Section (How It Works - Phase 1/2/3)

**Layout**: Horizontal on desktop → Vertical on mobile

> ⚠️ **EDGE CASE REMINDER**: When implementing this section, pay careful attention to the breakpoint transitions. Test thoroughly at `md` breakpoint (~768px) to ensure the horizontal-to-vertical transition is smooth and doesn't cause layout jumps or awkward states. **Remind the user to review this edge case during implementation.**

---

## File Structure

```
docs/
├── content-brief.md      # Source of truth for all content (DO NOT EDIT)
├── AGENT-GUIDELINES.md   # This file - project guidelines
```

---

## Checklist Before Submitting Work

- [ ] Used Hugeicons (not Lucide)
- [ ] Mobile-first responsive styles
- [ ] "supported by Google.org" phrasing used correctly
- [ ] Animations feel smooth and purposeful
- [ ] Whitespace is generous and intentional
- [ ] Tested at mobile, tablet, and desktop breakpoints
