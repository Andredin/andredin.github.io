export interface MonthlyData {
  month: string;
  revenue: number;
  orders: number;
}

export interface CategoryData {
  name: string;
  value: number;
  sales: number;
}

export interface Product {
  name: string;
  sales: number;
  revenue: number;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: 'Completed' | 'Processing' | 'Shipped' | 'Pending';
  date: string;
}
