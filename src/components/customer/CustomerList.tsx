"use client";
import React, { useState } from "react";
import { Search, Eye, Trash2, ChevronDown } from "lucide-react";
import { DatePickerDemo } from "../common/DatePicker";
import { Button } from "../ui/button";

const CustomerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("all");
  const [customer, setCustomer] = useState("");

  const orders = [
    {
      id: "ORD-001",
      date: "15/08/2024",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
      },
      total: "$1,250.00",
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

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-[25px] font-semibold text-gray-900">
                Customer list
              </h1>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Order Type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Customer Status
              </label>
              <div className="relative">
                <select
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All</option>
                  <option value="customer">Active</option>
                  <option value="Wholesale">Inactive</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Customer */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <div className="relative">
                <select
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Customer sorting order</option>
                  <option value="john">Sort By Order Amount</option>
                  <option value="sarah">Sort By Oldest</option>
                  <option value="mike">Sort By Newest</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Order Date
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
                Customer Joining Date
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
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Customer list
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
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    SL
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Customer name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Contact info
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Total Order
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
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
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                        
                      <div className="text-sm font-medium text-blue-600">
                        Rahul Sharma
                      </div>
                    </td> */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
                          <img
                            src="https://6valley.6amtech.com/storage/app/public/profile/2022-04-20-625fa7d513aa5.png"
                            alt=""
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Rahul Sharmas
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      98989899
                    </td>
                    <td className="px-6 py-4">44</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {order.total}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="rounded-md p-2 text-blue-600 transition-colors hover:bg-blue-50">
                          <Eye className="h-4 w-4" />
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
          <div className="border-t border-gray-200 px-6 py-4">
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

export default CustomerList;
