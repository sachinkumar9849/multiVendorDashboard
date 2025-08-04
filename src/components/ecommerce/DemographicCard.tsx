"use client";
import React, { useState } from "react";
import {
  Package,
  Clock,
  CheckCircle,
  Truck,
  MapPin,
  XCircle,
  RotateCcw,
  AlertTriangle,
  ShoppingCart,
} from "lucide-react";

type OrderStatKey =
  | "pending"
  | "confirmed"
  | "packaging"
  | "outForDelivery"
  | "delivered"
  | "canceled"
  | "returned"
  | "failedDelivery";

interface OrderStat {
  count: number;
  change: number;
  color: string;
  lightColor: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface OrderCategory {
  key: OrderStatKey;
  label: string;
  description: string;
}

interface StatCardProps {
  category: OrderCategory;
  data: OrderStat;
}

const DemographicCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  const orderStats: Record<OrderStatKey, OrderStat> = {
    pending: {
      count: 45,
      change: +12,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      icon: Clock,
    },
    confirmed: {
      count: 78,
      change: +8,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      icon: CheckCircle,
    },
    packaging: {
      count: 32,
      change: -3,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      icon: Package,
    },
    outForDelivery: {
      count: 24,
      change: +15,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      icon: Truck,
    },
    delivered: {
      count: 156,
      change: +23,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      icon: MapPin,
    },
    canceled: {
      count: 12,
      change: -5,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-600",
      icon: XCircle,
    },
    returned: {
      count: 8,
      change: +2,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      icon: RotateCcw,
    },
    failedDelivery: {
      count: 6,
      change: -1,
      color: "bg-gray-500",
      lightColor: "bg-gray-50",
      textColor: "text-gray-600",
      icon: AlertTriangle,
    },
  };

  const totalOrders = Object.values(orderStats).reduce(
    (sum, stat) => sum + stat.count,
    0,
  );

  const periods = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "This month",
  ];

  const orderCategories: OrderCategory[] = [
    {
      key: "pending",
      label: "Pending",
      description: "Orders awaiting confirmation",
    },
    {
      key: "confirmed",
      label: "Confirmed",
      description: "Orders confirmed and being processed",
    },
    {
      key: "packaging",
      label: "Packaging",
      description: "Orders being packed for shipment",
    },
    {
      key: "outForDelivery",
      label: "Out for Delivery",
      description: "Orders currently being delivered",
    },
    {
      key: "delivered",
      label: "Delivered",
      description: "Successfully delivered orders",
    },
    {
      key: "canceled",
      label: "Canceled",
      description: "Orders canceled by customer or system",
    },
    {
      key: "returned",
      label: "Returned",
      description: "Orders returned by customers",
    },
    {
      key: "failedDelivery",
      label: "Failed to Delivery",
      description: "Orders that failed delivery attempts",
    },
  ];

  const StatCard = ({ category, data }: StatCardProps) => {
    const Icon = data.icon;
    const isPositive = data.change >= 0;

    return (
      <div className="rounded-lg border border-gray-100 bg-[#f8f9fb] p-4 transition-shadow duration-200">
        <div className="mb-4 flex items-center justify-between">
          <div className={`rounded-lg p-3 ${data.lightColor}`}>
            <Icon className={`h-6 w-6 ${data.textColor}`} />
          </div>
          <div
            className={`flex items-center space-x-1 text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {data.count.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">{category.label}</p>
          <p className="text-xs text-gray-500">{category.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Order Analytics
              </h3>
              <p className="text-gray-600">
                Monitor and track all your order statuses in real-time
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                {periods.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-100">
                    Total Orders
                  </p>
                  <p className="text-3xl font-bold">
                    {totalOrders.toLocaleString()}
                  </p>
                </div>
                <ShoppingCart className="h-8 w-8 text-blue-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-100">
                    Success Rate
                  </p>
                  <p className="text-3xl font-bold">
                    {((orderStats.delivered.count / totalOrders) * 100).toFixed(
                      1,
                    )}
                    %
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-100">
                    In Progress
                  </p>
                  <p className="text-3xl font-bold">
                    {(
                      orderStats.confirmed.count +
                      orderStats.packaging.count +
                      orderStats.outForDelivery.count
                    ).toLocaleString()}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-200" />
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-100">Issues</p>
                  <p className="text-3xl font-bold">
                    {(
                      orderStats.canceled.count +
                      orderStats.returned.count +
                      orderStats.failedDelivery.count
                    ).toLocaleString()}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Status Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {orderCategories.map((category) => (
            <StatCard
              key={category.key}
              category={category}
              data={orderStats[category.key]}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-blue-50 px-4 py-3 text-blue-700 transition-colors hover:bg-blue-100">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">View Pending</span>
            </button>
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-yellow-50 px-4 py-3 text-yellow-700 transition-colors hover:bg-yellow-100">
              <Package className="h-4 w-4" />
              <span className="text-sm font-medium">Process Orders</span>
            </button>
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-green-50 px-4 py-3 text-green-700 transition-colors hover:bg-green-100">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Track Shipments</span>
            </button>
            <button className="flex items-center justify-center space-x-2 rounded-lg bg-red-50 px-4 py-3 text-red-700 transition-colors hover:bg-red-100">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Handle Issues</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicCard;
