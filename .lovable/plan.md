
# Warranty & Return Policy Standardization Plan

## ✅ COMPLETED

All warranty mentions across the site have been updated to be consistent, and a dedicated Warranty & Return Policy page has been created.

## New Policy Terms (Summary)
- **Repairs:** 30-day warranty covering workmanship and parts only
- **Coverage:** Tech Medics will re-service device up to 3 times if fault is theirs
- **Exclusions:** No coverage for accidental damage (drops, water, etc.)
- **Services:** No returns on services
- **Water Damage:** Limited 14-day warranty (due to unpredictable outcomes)
- **Accessories:** 30-day return policy - must be undamaged, complete, no signs of use

---

## ✅ Phase 1: Create Dedicated Policy Page

### Created: `src/pages/WarrantyPolicy.tsx`
- Comprehensive page at `/warranty-policy`
- Sections: Repair Warranty, Water Damage, Accessory Returns, Exclusions, Claims Process

---

## ✅ Phase 2: Update App Router

### Updated: `src/App.tsx`
- Added route: `/warranty-policy`

---

## ✅ Phase 3: Update Neighborhood Pages (7 files)

### Updated:
- `src/pages/neighborhoods/SouthMacon.tsx`
- `src/pages/neighborhoods/Vineville.tsx`
- `src/pages/neighborhoods/Rutland.tsx`
- `src/pages/neighborhoods/Downtown.tsx`
- `src/pages/neighborhoods/EastMacon.tsx`
- `src/pages/neighborhoods/Ingleside.tsx`
- `src/pages/neighborhoods/NorthMacon.tsx`

### Changes Made:
- Updated FAQ warranty answers to "30-day warranty"
- Added Warranty Policy link to footers

---

## ✅ Phase 4: Update Blog Posts

### Updated:
- `src/pages/blog/IPhoneScreenRepair.tsx` - 30-day warranty
- `src/pages/blog/IPadScreenRepair.tsx` - 30-day warranty
- `src/pages/blog/MacBookRepairMacon.tsx` - 30-day warranty
- `src/pages/blog/CrackedScreenCost.tsx` - 30-day warranty
- `src/pages/blog/TechMedicsVsAppleStore.tsx` - 30-day warranty
- `src/pages/blog/IPhoneBatteryReplacement.tsx` - 30-day warranty
- `src/pages/blog/WaterDamagedIPhone.tsx` - Limited 14-day warranty
- `src/pages/blog/IPhoneNotTurningOn.tsx` - 30-day warranty
- `src/pages/blog/OEMvsAftermarket.tsx` - 30-day warranty

---

## ✅ Phase 5: Update Main Pages

### Updated:
- `src/pages/Home.tsx` - "30-Day Warranty" badge, footer link
- `src/pages/iPhone.tsx` - FAQ warranty answer, footer link
- `src/pages/iPad.tsx` - Footer link
- `src/pages/MacBook.tsx` - Footer link

---

## ✅ Phase 6: Footer Links Added

Warranty Policy link added to footers in:
- Home.tsx
- iPhone.tsx
- iPad.tsx
- MacBook.tsx
- All neighborhood pages

---

## Summary of Changes

| Find | Replaced With |
|------|--------------|
| "lifetime warranty" | "30-day warranty" |
| "Lifetime warranty on parts" | "30-day warranty on repairs" |
| "1-year warranty" | "30-day warranty" |
| "90-day warranty" | "30-day warranty" (except water damage) |

Water damage repairs now have: "Limited 14-day warranty"
