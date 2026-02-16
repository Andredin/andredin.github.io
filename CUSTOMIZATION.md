# ⚡ QUICK CUSTOMIZATION CHECKLIST

## Dashboard Demo URL (src/App.tsx, line ~17)
```typescript
liveUrl: "#",
```
→ After deploying your dashboard, replace with:
→ `liveUrl: "https://your-dashboard.vercel.app"`

## Project Screenshot (src/App.tsx, line ~18)
```typescript
image: "https://images.unsplash.com/..."
```
→ Take a screenshot of your dashboard
→ Save as `/public/assets/dashboard.png`
→ Replace with: `image: "/assets/dashboard.png"`

---

## Optional (But Recommended)

```

### Update Skills
→ In App.tsx, lines ~23-27
→ Add/remove skills based on what you actually want to do
→ Put your strongest skills first

### Change Colors
Find all instances of:
- `bg-blue-500` → Your brand color
- `bg-green-500` → Accent color

Example: Change all blues to purple:
- `bg-blue-500` → `bg-purple-500`
- `text-blue-600` → `text-purple-600`

---

## Testing Before Deploy

1. Run `npm run dev`
2. Click all links - do they work?
3. Check on your phone (responsive test)
4. Read through all text - any typos?
5. Test email link - does it open your email app?

---

## Deployment Order

1. Deploy dashboard FIRST → Get URL
2. Update portfolio with dashboard URL
3. Deploy portfolio → Get URL
4. Add portfolio URL to:
   - Fiverr profile
   - LinkedIn summary
   - Resume (optional)
   - Email signature (optional)
