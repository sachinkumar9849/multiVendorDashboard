"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  ChevronDown,
  Plus,
} from "lucide-react";
import { DatePickerDemo } from "../common/DatePicker";
import { Button } from "../ui/button";

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("all");
  const [customer, setCustomer] = useState("");

  // Sample order data
  const orders = [
    {
      id: "ORD-001",
      date: "15/08/2024",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
      },
      total: "Rs.1,250.00",
      status: "completed",
      type: "online",
    },
    {
      id: "ORD-002",
      date: "14/08/2024",
      customer: {
        name: "Sarah Smith",
        email: "sarah@example.com",
        phone: "+1234567891",
      },
      total: "$850.50",
      status: "pending",
      type: "offline",
    },
    {
      id: "ORD-003",
      date: "13/08/2024",
      customer: {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1234567892",
      },
      total: "$2,100.75",
      status: "shipped",
      type: "online",
    },
    {
      id: "ORD-004",
      date: "12/08/2024",
      customer: {
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "+1234567893",
      },
      total: "$650.25",
      status: "cancelled",
      type: "online",
    },
    {
      id: "ORD-005",
      date: "11/08/2024",
      customer: {
        name: "David Wilson",
        email: "david@example.com",
        phone: "+1234567894",
      },
      total: "$1,875.00",
      status: "processing",
      type: "offline",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "processing":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-[25px] font-semibold text-gray-900">
                All Orders
              </h1>
            </div>
            <div className="mt-4 flex gap-3 md:mt-0">
              <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-50">
                <Download className="h-4 w-4" />
                Export
              </button>
              <button className="bgBlue flex items-center rounded-md px-4 py-2 text-white transition-colors hover:bg-blue-700">
                <Plus /> Add Order
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-md border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Filter Orders
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Order Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Order Type
              </label>
              <div className="relative">
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All</option>
                  <option value="customer">Customer</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="retail">Retail</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Customer */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Customer
              </label>
              <div className="relative">
                <select
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your option</option>
                  <option value="john">John Doe</option>
                  <option value="sarah">Sarah Smith</option>
                  <option value="mike">Mike Johnson</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Start Date
              </label>
              {/* <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="dd/mm/yyyy"
              /> */}
              <DatePickerDemo />
            </div>

            {/* End Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                End Date
              </label>
              <DatePickerDemo />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 opacity-0">
                f
              </label>
              <Button className="bgBlue w-full py-[20px]">Apply Filter</Button>
            </div>
          </div>
        </div>

        {/* Order List */}
        <div className="rounded-md border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Order List
                </h2>
                <p className="mt-1 text-sm text-gray-500">24 orders found</p>
              </div>

              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    SL
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Order Date
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Customer Info
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Total Amount
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Order Status
                  </th>
                  <th className="px-6 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-2 text-sm whitespace-nowrap text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">
                        {order.id}
                      </div>
                    </td>
                    <td className="px-6 py-2 text-sm whitespace-nowrap text-gray-900">
                      {order.date}
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex flex-col">
                        <div className="text-sm font-medium text-gray-900">
                          {order.customer.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.customer.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {order.total}
                      </div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getStatusColor(order.status)}`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="rounded-md p-2 text-green-600 transition-colors hover:bg-green-50">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="rounded-md p-2 text-red-600 transition-colors hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to 5 of 24 results
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50">
                  Previous
                </button>
                <button className="bgBlue rounded-md px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700">
                  1
                </button>
                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50">
                  2
                </button>
                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50">
                  3
                </button>
                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
