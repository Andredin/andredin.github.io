# ⚡ QUICK CUSTOMIZATION CHECKLIST

Before deploying your portfolio, update these 5 things:

## 1. GitHub Link (src/App.tsx, line ~50)
```typescript
href="https://github.com/YOUR_GITHUB"
```
→ Replace `YOUR_GITHUB` with your actual GitHub username

## 2. Fiverr Link (src/App.tsx, lines ~71 & ~164)
```typescript
href="https://www.fiverr.com/YOUR_FIVERR_USERNAME"
```
→ Replace `YOUR_FIVERR_USERNAME` with your Fiverr profile name
→ There are 2 places - update both!

## 3. Dashboard Demo URL (src/App.tsx, line ~17)
```typescript
liveUrl: "#",
```
→ After deploying your dashboard, replace with:
→ `liveUrl: "https://your-dashboard.vercel.app"`

## 4. Project Screenshot (src/App.tsx, line ~18)
```typescript
image: "https://images.unsplash.com/..."
```
→ Take a screenshot of your dashboard
→ Save as `/public/assets/dashboard.png`
→ Replace with: `image: "/assets/dashboard.png"`

## 5. About Me Text (src/App.tsx, lines ~87-96)
→ Customize to tell your story
→ Keep it honest and concise
→ Mention what you're looking for (freelance, remote work)

---

## Optional (But Recommended)

### Add Your Photo
1. Save a professional photo as `/public/assets/profile.jpg`
2. In App.tsx, add before "About Me" section:
```typescript
<img 
  src="/assets/profile.jpg" 
  alt="André Diniz"
  className="w-32 h-32 rounded-full mx-auto mb-4"
/>
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

---

## If You Get Stuck

- GitHub link format: `https://github.com/username`
- Fiverr link format: `https://www.fiverr.com/username`
- Make sure links start with `https://`
- Test locally before deploying

Good luck! 🎉
