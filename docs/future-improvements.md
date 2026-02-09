# Future Improvements - ATF Challenge Website

> **Status**: Pending - awaiting more information before implementation

---

## 1. Fix #apply Anchor (Footer Issue)

**Problem**: The CTA button in the footer links to `#apply`, but that anchor is defined *inside* the footer itself (line 19 of `footer.tsx`). Clicking "Apply Now" does nothing useful.

**Solution options**:
- Move `#apply` to a dedicated application section above the footer
- Link to an external application portal
- Trigger a modal with an application form

**Files affected**: `components/sections/footer.tsx`

---

## 2. Add Google.org Attribution

**Problem**: Mission section says "supported by our strategic partners" but guidelines require exact phrasing: **"supported by Google.org"**

**Location**: `components/sections/mission.tsx:38`

**Fix**: Change text from:
```
supported by our strategic partners
```
to:
```
supported by Google.org
```

---

## 3. Header Enhancements

- Mobile menu animation (slide-down instead of instant appear)
- Replace inline SVG hamburger with Hugeicons
- Active section highlighting in nav during scroll

**Files affected**: `components/sections/header.tsx`

---

## 4. Key Dates Timeline

- Progress fill showing current position in timeline
- Pulse/glow animation on active milestone
- Sequential reveal animation on scroll
- Review `-z-10` on mobile vertical line (potential stacking issue at line 43)

**Files affected**: `components/sections/key-dates.tsx`

---

## 5. Footer Enhancements

- Partner logos row (Google.org, etc.)
- Social media links
- Newsletter signup option

**Files affected**: `components/sections/footer.tsx`

---

## 6. Hero Section Ideas

- Staggered entrance animations (headline -> subheadline -> CTA)
- Country visualization (flags, animated city names, or map)
- Social proof badge ("Join 15,000 learners")
- Secondary ghost CTA ("Learn More")
- Parallax background on scroll
- Scroll indicator fade-out after scrolling

**Files affected**: `components/sections/hero.tsx`

---

## 7. Eligibility Section

- Interactive checklist feel - checkmarks animate in sequence on scroll
- Self-assessment styling

**Files affected**: `components/sections/eligibility.tsx`
