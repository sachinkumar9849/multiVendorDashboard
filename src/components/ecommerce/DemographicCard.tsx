// "use client";
// import Image from "next/image";

// import CountryMap from "./CountryMap";
// import { useState } from "react";
// import { MoreDotIcon } from "@/icons";
// import { Dropdown } from "../ui/dropdown/Dropdown";
// import { DropdownItem } from "../ui/dropdown/DropdownItem";

// export default function DemographicCard() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleDropdown() {
//     setIsOpen(!isOpen);
//   }

//   function closeDropdown() {
//     setIsOpen(false);
//   }

//   return (
//     <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
//       <div className="flex justify-between">
//         <div>
// <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
//   Customers Demographic
// </h3>
//           <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
//             Number of customer based on country
//           </p>
//         </div>

//         <div className="relative inline-block">
//           <button onClick={toggleDropdown} className="dropdown-toggle">
//             <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
//           </button>
//           <Dropdown
//             isOpen={isOpen}
//             onClose={closeDropdown}
//             className="w-40 p-2"
//           >
//             <DropdownItem
//               onItemClick={closeDropdown}
//               className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               View More
//             </DropdownItem>
//             <DropdownItem
//               onItemClick={closeDropdown}
//               className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
//             >
//               Delete
//             </DropdownItem>
//           </Dropdown>
//         </div>
//       </div>
//       <div className="px-4 py-6 my-6 overflow-hidden border border-gary-200 rounded-2xl bg-gray-50 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
//         <div
//           id="mapOne"
//           className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
//         >
//           <CountryMap />
//         </div>
//       </div>

//       <div className="space-y-5">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="items-center w-full rounded-full max-w-8">
//               <Image
//                 width={48}
//                 height={48}
//                 src="/images/country/country-01.svg"
//                 alt="usa"
//                 className="w-full"
//               />
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
//                 USA
//               </p>
//               <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                 2,379 Customers
//               </span>
//             </div>
//           </div>

//           <div className="flex w-full max-w-[140px] items-center gap-3">
//             <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
//               <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
//             </div>
//             <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
//               79%
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="items-center w-full rounded-full max-w-8">
//               <Image
//                 width={48}
//                 height={48}
//                 className="w-full"
//                 src="/images/country/country-02.svg"
//                 alt="france"
//               />
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800 text-theme-sm dark:text-white/90">
//                 France
//               </p>
//               <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                 589 Customers
//               </span>
//             </div>
//           </div>

//           <div className="flex w-full max-w-[140px] items-center gap-3">
//             <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
//               <div className="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
//             </div>
//             <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
//               23%
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from 'react';
import { Package, Clock, CheckCircle, Truck, MapPin, XCircle, RotateCcw, AlertTriangle, ShoppingCart, TrendingUp } from 'lucide-react';

const DemographicCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Today');

  // Sample data - in real app this would come from your API
  const orderStats = {
    pending: { count: 45, change: +12, color: 'bg-yellow-500', lightColor: 'bg-yellow-50', textColor: 'text-yellow-600', icon: Clock },
    confirmed: { count: 78, change: +8, color: 'bg-blue-500', lightColor: 'bg-blue-50', textColor: 'text-blue-600', icon: CheckCircle },
    packaging: { count: 32, change: -3, color: 'bg-purple-500', lightColor: 'bg-purple-50', textColor: 'text-purple-600', icon: Package },
    outForDelivery: { count: 24, change: +15, color: 'bg-indigo-500', lightColor: 'bg-indigo-50', textColor: 'text-indigo-600', icon: Truck },
    delivered: { count: 156, change: +23, color: 'bg-green-500', lightColor: 'bg-green-50', textColor: 'text-green-600', icon: MapPin },
    canceled: { count: 12, change: -5, color: 'bg-red-500', lightColor: 'bg-red-50', textColor: 'text-red-600', icon: XCircle },
    returned: { count: 8, change: +2, color: 'bg-orange-500', lightColor: 'bg-orange-50', textColor: 'text-orange-600', icon: RotateCcw },
    failedDelivery: { count: 6, change: -1, color: 'bg-gray-500', lightColor: 'bg-gray-50', textColor: 'text-gray-600', icon: AlertTriangle }
  };

  const totalOrders = Object.values(orderStats).reduce((sum, stat) => sum + stat.count, 0);

  const periods = ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month'];

  const orderCategories = [
    { key: 'pending', label: 'Pending', description: 'Orders awaiting confirmation' },
    { key: 'confirmed', label: 'Confirmed', description: 'Orders confirmed and being processed' },
    { key: 'packaging', label: 'Packaging', description: 'Orders being packed for shipment' },
    { key: 'outForDelivery', label: 'Out for Delivery', description: 'Orders currently being delivered' },
    { key: 'delivered', label: 'Delivered', description: 'Successfully delivered orders' },
    { key: 'canceled', label: 'Canceled', description: 'Orders canceled by customer or system' },
    { key: 'returned', label: 'Returned', description: 'Orders returned by customers' },
    { key: 'failedDelivery', label: 'Failed to Delivery', description: 'Orders that failed delivery attempts' }
  ];

  const StatCard = ({ category, data }) => {
    const Icon = data.icon;
    const isPositive = data.change >= 0;

    return (
      <div className="bg-[#f8f9fb] rounded-lg border border-gray-100 p-4  transition-shadow duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${data.lightColor}`}>
            <Icon className={`w-6 h-6 ${data.textColor}`} />
          </div>
          <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
             <h3 className="text-2xl font-bold text-gray-900">{data.count.toLocaleString()}</h3>
          </div>
        </div>

        <div className="space-y-2">
        
          <p className="text-sm font-medium text-gray-700">{category.label}</p>
          <p className="text-xs text-gray-500">{category.description}</p>
        </div>

        {/* <div className="mt-4 bg-gray-100 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${data.color}`}
            style={{ width: `${(data.count / totalOrders) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {((data.count / totalOrders) * 100).toFixed(1)}% of total orders
        </p> */}
      </div>
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Order Analytics
              </h3>
              <p className="text-gray-600">Monitor and track all your order statuses in real-time</p>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {periods.map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Orders</p>
                  <p className="text-3xl font-bold">{totalOrders.toLocaleString()}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Success Rate</p>
                  <p className="text-3xl font-bold">{((orderStats.delivered.count / totalOrders) * 100).toFixed(1)}%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 text-sm font-medium">In Progress</p>
                  <p className="text-3xl font-bold">{(orderStats.confirmed.count + orderStats.packaging.count + orderStats.outForDelivery.count).toLocaleString()}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm font-medium">Issues</p>
                  <p className="text-3xl font-bold">{(orderStats.canceled.count + orderStats.returned.count + orderStats.failedDelivery.count).toLocaleString()}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderCategories.map(category => (
            <StatCard
              key={category.key}
              category={category}
              data={orderStats[category.key]}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">View Pending</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">Process Orders</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              <Truck className="w-4 h-4" />
              <span className="text-sm font-medium">Track Shipments</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Handle Issues</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicCard;
