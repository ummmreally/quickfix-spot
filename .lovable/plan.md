
# Warranty & Return Policy Standardization Plan

## Overview
Update all warranty mentions across the site to be consistent and create a dedicated Warranty & Return Policy page.

## New Policy Terms (Summary)
- **Repairs:** 30-day warranty covering workmanship and parts only
- **Coverage:** Tech Medics will re-service device up to 3 times if fault is theirs
- **Exclusions:** No coverage for accidental damage (drops, water, etc.)
- **Services:** No returns on services
- **Water Damage:** Limited warranty (due to unpredictable outcomes)
- **Accessories:** 30-day return policy - must be undamaged, complete, no signs of use

---

## Phase 1: Create Dedicated Policy Page

### New File: `src/pages/WarrantyPolicy.tsx`
A comprehensive page at `/warranty-policy` including:

**Sections:**
1. **Repair Warranty (30 Days)**
   - Covers defects in workmanship and parts
   - 3 re-service attempts if issue is Tech Medics' fault
   - Does NOT cover accidental damage
   
2. **Water Damage Repairs (Limited)**
   - Best-effort basis due to unpredictable corrosion
   - 14-day limited warranty for component failure
   - No guarantee of full functionality restoration

3. **Accessory Returns (30 Days)**
   - Item must be in original condition
   - No damage or missing parts
   - No clear signs of use
   - Original packaging preferred

4. **What's NOT Covered**
   - Drops, cracks, water damage after repair
   - Physical abuse or neglect
   - Unauthorized modifications

5. **How to Make a Warranty Claim**
   - Bring device to store
   - Provide original receipt
   - We'll inspect and service if covered

---

## Phase 2: Update App Router

### File: `src/App.tsx`
Add route for the new policy page:
```
<Route path="/warranty-policy" element={<WarrantyPolicy />} />
```

---

## Phase 3: Update Neighborhood Pages (7 files)

### Files to Update:
- `src/pages/neighborhoods/SouthMacon.tsx`
- `src/pages/neighborhoods/Rutland.tsx`
- `src/pages/neighborhoods/Downtown.tsx`
- `src/pages/neighborhoods/EastMacon.tsx`
- `src/pages/neighborhoods/Ingleside.tsx`
- `src/pages/neighborhoods/NorthMacon.tsx`
- `src/pages/neighborhoods/Vineville.tsx`

### Changes:
- Change "Lifetime warranty on parts" → "30-day warranty on repairs"
- Update any FAQ answers mentioning warranty to say "30-day warranty"
- Link to `/warranty-policy` where appropriate

---

## Phase 4: Update Blog Posts (10+ files)

### High-Priority Blog Updates:

| File | Current | New |
|------|---------|-----|
| `IPhoneScreenRepair.tsx` | "lifetime warranty against defects" | "30-day warranty" |
| `IPadScreenRepair.tsx` | "lifetime warranty against defects" | "30-day warranty" |
| `MacBookRepairMacon.tsx` | "Lifetime warranty on screens, 1-year on batteries" | "30-day warranty on all repairs" |
| `CrackedScreenCost.tsx` | "lifetime warranty" (multiple places) | "30-day warranty" |
| `TechMedicsVsAppleStore.tsx` | "lifetime warranty" | "30-day warranty" |
| `iPhoneVsAndroidRepairCosts.tsx` | "Lifetime warranty on labor, 90-day on parts" | "30-day warranty on repairs" |
| `IPhoneBatteryReplacement.tsx` | "1-year warranty" | "30-day warranty" |
| `WaterDamagedIPhone.tsx` | "90-day warranty" | "Limited 14-day warranty (water damage)" |
| `IPhoneNotTurningOn.tsx` | "90-day warranty on all repairs" | "30-day warranty" |
| `OEMvsAftermarket.tsx` | "Industry-leading warranties" | "30-day warranty on all screen repairs" |

### Meta Description Updates:
- `IPhoneScreenRepair.tsx`: Remove "lifetime warranty" from meta description

---

## Phase 5: Update Main Pages

### Files:
- `src/pages/Home.tsx`
- `src/pages/iPhone.tsx`
- `src/pages/iPad.tsx`
- `src/pages/MacBook.tsx`

### Changes:
- Update "Warranty Protected" section to specify "30-day warranty"
- Update FAQ answers to be consistent
- Add link to warranty policy page in footer or relevant sections

---

## Phase 6: Footer Link Addition

Add "Warranty Policy" link to all footer sections alongside "Privacy Policy":

```
<Link to="/warranty-policy">Warranty Policy</Link>
```

Update footers in:
- Home.tsx
- iPhone.tsx
- iPad.tsx
- MacBook.tsx
- All neighborhood pages
- All blog posts with footers

---

## Technical Details

### SEO Schema Update
The new WarrantyPolicy page will include:
- Proper meta title/description
- Canonical URL: `https://techmedicsmacon.com/warranty-policy`

### Estimated Files to Modify
- **1 new file** created
- **~25 files** updated for consistency
- **~7 footers** updated with new link

### Text Replacements Summary:

| Find | Replace With |
|------|--------------|
| "lifetime warranty" | "30-day warranty" |
| "Lifetime warranty on parts" | "30-day warranty on repairs" |
| "1-year warranty" | "30-day warranty" |
| "90-day warranty" | "30-day warranty" (except water damage) |
| "warranty included" | "30-day warranty included" |

Water damage files get: "Limited 14-day warranty"
