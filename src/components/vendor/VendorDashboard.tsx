"use client";
import React, { useState } from "react";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  Filter,
  Download,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";

const VendorDashboard = () => {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "contact@techcorp.com",
      phone: "+1 (555) 123-4567",
      category: "Technology",
      status: "Active",
      joinDate: "2024-01-15",
      totalOrders: 45,
      revenue: 125000,
    },
    {
      id: 2,
      name: "Green Foods Ltd",
      email: "info@greenfoods.com",
      phone: "+1 (555) 987-6543",
      category: "Food & Beverage",
      status: "Active",
      joinDate: "2024-02-20",
      totalOrders: 32,
      revenue: 89000,
    },
    {
      id: 3,
      name: "Fashion Forward Inc",
      email: "hello@fashionforward.com",
      phone: "+1 (555) 456-7890",
      category: "Fashion",
      status: "Pending",
      joinDate: "2024-03-10",
      totalOrders: 12,
      revenue: 34000,
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [newVendor, setNewVendor] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    status: "Pending",
  });

  const categories = [
    "Technology",
    "Food & Beverage",
    "Fashion",
    "Electronics",
    "Home & Garden",
    "Sports",
    "Books",
  ];
  const statuses = ["All", "Active", "Pending", "Suspended"];

  const handleAddVendor = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !newVendor.name ||
      !newVendor.email ||
      !newVendor.phone ||
      !newVendor.category
    ) {
      return;
    }
    const vendor = {
      id: vendors.length + 1,
      ...newVendor,
      joinDate: new Date().toISOString().split("T")[0],
      totalOrders: 0,
      revenue: 0,
    };
    setVendors([...vendors, vendor]);
    setNewVendor({
      name: "",
      email: "",
      phone: "",
      category: "",
      status: "Pending",
    });
    setShowAddModal(false);
  };

  const handleDeleteVendor = (id: number) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setVendors(
      vendors.map((vendor) =>
        vendor.id === id ? { ...vendor, status: newStatus } : vendor,
      ),
    );
  };

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || vendor.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen rounded-md bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-5">
          <h1 className="text-[25px] font-semibold text-gray-900">
            Vendor Management
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Vendors
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {vendors.length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Vendors
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {vendors.filter((v) => v.status === "Active").length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Pending Approval
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {vendors.filter((v) => v.status === "Pending").length}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                <Filter className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  $
                  {vendors
                    .reduce((sum, v) => sum + v.revenue, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Download className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-4 sm:flex-row">
              <div className="relative">
                <Search className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 sm:w-64"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <Link
              href="/vendor/add"
              className="bgBlue flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Vendor
            </Link>
          </div>
        </div>

        {/* Vendors Table */}
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Vendor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {vendor.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Joined {vendor.joinDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {vendor.email}
                      </div>
                      <div className="text-sm text-gray-500">
                        {vendor.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {vendor.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={vendor.status}
                        onChange={(e) =>
                          handleStatusChange(vendor.id, e.target.value)
                        }
                        className={`inline-flex items-center rounded-full border-0 px-2.5 py-0.5 text-xs font-medium ${getStatusColor(vendor.status)}`}
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      <div>{vendor.totalOrders} orders</div>
                      <div className="font-medium text-green-600">
                        ${vendor.revenue.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteVendor(vendor.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Vendor Modal */}
        {showAddModal && (
          <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Add New Vendor
              </h2>
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Vendor Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newVendor.name}
                      onChange={(e) =>
                        setNewVendor({ ...newVendor, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={newVendor.email}
                      onChange={(e) =>
                        setNewVendor({ ...newVendor, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      required
                      value={newVendor.phone}
                      onChange={(e) =>
                        setNewVendor({ ...newVendor, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      required
                      value={newVendor.category}
                      onChange={(e) =>
                        setNewVendor({ ...newVendor, category: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleAddVendor}
                    className="bgBlue flex-1 rounded-lg px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    Add Vendor
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;
