import { MetricCard } from './components/MetricCard';
import { RevenueChart } from './components/RevenueChart';
import { CategoryChart } from './components/CategoryChart';
import { TopProductsChart } from './components/TopProductsChart';
import { RecentOrders } from './components/RecentOrders';
import { monthlyRevenue, categoryData, topProducts, recentOrders } from './data/mockData';

function App() {
  // Calculate total metrics from data
  const totalRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
  const totalOrders = monthlyRevenue.reduce((sum, month) => sum + month.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your business performance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Revenue"
            value={`$${(totalRevenue / 1000).toFixed(1)}k`}
            change="+12.5%"
          />
          <MetricCard
            title="Total Orders"
            value={totalOrders.toLocaleString()}
            change="+8.2%"
          />
          <MetricCard
            title="Avg Order Value"
            value={`$${avgOrderValue.toFixed(2)}`}
            change="+3.1%"
          />
          <MetricCard
            title="Active Products"
            value={topProducts.length}
            change="+2"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart data={monthlyRevenue} />
          <CategoryChart data={categoryData} />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TopProductsChart data={topProducts} />
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">Best Selling Product</p>
                <p className="text-lg font-semibold">{topProducts[0].name}</p>
                <p className="text-sm text-gray-500">{topProducts[0].sales} units sold</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm">Top Category</p>
                <p className="text-lg font-semibold">{categoryData[0].name}</p>
                <p className="text-sm text-gray-500">${categoryData[0].sales.toLocaleString()} in sales</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm">Growth Rate</p>
                <p className="text-lg font-semibold text-green-600">+18.3%</p>
                <p className="text-sm text-gray-500">vs. last quarter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <RecentOrders orders={recentOrders} />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            Built with React + TypeScript + Recharts + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
