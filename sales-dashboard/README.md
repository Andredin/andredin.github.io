# Sales Analytics Dashboard

A modern, responsive sales analytics dashboard built with React, TypeScript, Recharts, and Tailwind CSS.

## Features

✨ **Interactive Data Visualizations**
- Monthly revenue line chart
- Category breakdown pie chart
- Top products bar chart
- Real-time metric cards

📊 **Dashboard Components**
- Total revenue, orders, and average order value metrics
- Sales by product category
- Top-performing products
- Recent orders table with status indicators

🎨 **Modern UI/UX**
- Clean, professional design with Tailwind CSS
- Fully responsive (mobile, tablet, desktop)
- Smooth hover effects and transitions
- Color-coded status indicators

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready to deploy.

## Deployment

### Deploy to Vercel (Recommended - Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. Your dashboard will be live in minutes!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's web interface

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

## Project Structure

```
sales-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── MetricCard.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── CategoryChart.tsx
│   │   ├── TopProductsChart.tsx
│   │   └── RecentOrders.tsx
│   ├── data/
│   │   └── mockData.ts      # Sample data
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── README.md
```

## Customization Ideas (Day 2-3)

### Add Interactivity:
- [ ] Date range filter
- [ ] Search functionality
- [ ] Sort orders by column
- [ ] Dark mode toggle

### Connect Real Data:
- [ ] Replace mockData with API calls
- [ ] Add loading states
- [ ] Error handling
- [ ] Data refresh button

### Enhance UI:
- [ ] Add animations (framer-motion)
- [ ] Export to PDF/Excel
- [ ] Print-friendly view
- [ ] Skeleton loaders

## Skills Demonstrated

- Component architecture and reusability
- TypeScript for type safety
- Data visualization with Recharts
- Responsive design with Tailwind CSS
- Modern React patterns (hooks, props, state)
- Clean code organization
- Professional UI/UX design

## License

MIT - Feel free to use this for your portfolio!

## Author

André Martini Diniz
- Email: andrediniz1310@gmail.com
- LinkedIn: linkedin.com/in/andredin
