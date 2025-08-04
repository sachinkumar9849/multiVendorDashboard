"use client";
import React, { useState, useMemo } from "react";
import { Search, Plus, Download, Eye, Edit, Trash2 } from "lucide-react";
import { Switch } from "../ui/switch";

interface Product {
  id: number;
  name: string;
  type: "Digital" | "Physical";
  price: number;
  verifyStatus: "Approved" | "Pending" | "Rejected";
  activeStatus: boolean;
  brand: string;
  category: string;
  subCategory: string;
  subSubCategory: string;
}

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All brand");
  const [selectedCategory, setSelectedCategory] = useState("Select category");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    "Select Sub Category",
  );
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(
    "Select Sub Sub Category",
  );

  // Sample data based on your image
  const products: Product[] = [
    {
      id: 1,
      name: "Norton Utilities Ultimate",
      type: "Digital",
      price: 40.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "Norton",
      category: "Electronics & Gadgets",
      subCategory: "Software",
      subSubCategory: "Security",
    },
    {
      id: 2,
      name: "Office 2021 Professional",
      type: "Digital",
      price: 150.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "Microsoft",
      category: "Electronics & Gadgets",
      subCategory: "Software",
      subSubCategory: "Productivity",
    },
    {
      id: 3,
      name: "125 Childrens AudioBooks",
      type: "Digital",
      price: 50.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "AudioPress",
      category: "Books & Stationery",
      subCategory: "AudioBooks",
      subSubCategory: "Children",
    },
    {
      id: 4,
      name: "Kill Code Fiction",
      type: "Physical",
      price: 16.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "BookPress",
      category: "Books & Stationery",
      subCategory: "Fiction",
      subSubCategory: "Thriller",
    },
  ];

  const brands = [
    "All brand",
    "Norton",
    "Microsoft",
    "AudioPress",
    "BookPress",
    "Francisco Electrical",
    "Timmerman",
    "Borcelle ElectricVehicle",
  ];

  const categories = [
    "Select category",
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Health & Beauty",
    "Pet Supplies",
    "Home & Kitchen",
    "Baby & Toddler",
    "Sports & Outdoor",
    "Phone & Gadgets",
    "Electronics & Gadgets",
    "Travel & Luggage",
    "Books & Stationery",
    "Groceries & Dailies",
    "Musical Instruments",
    "Gifts & Crafts",
    "Automotive",
    "Digital Products",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesBrand =
        selectedBrand === "All brand" || product.brand === selectedBrand;
      const matchesCategory =
        selectedCategory === "Select category" ||
        product.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchTerm, selectedBrand, selectedCategory, products]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All brand");
    setSelectedCategory("Select category");
    setSelectedSubCategory("Select Sub Category");
    setSelectedSubSubCategory("Select Sub Sub Category");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-600 bg-green-50 border-green-200";
      case "Pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "Rejected":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500">
              <div className="h-4 w-4 rounded-sm bg-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Product List</h1>
            <span className="rounded-full bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700">
              {filteredProducts.length}
            </span>
          </div>

          {/* Filter Section */}
          <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Filter Products
            </h2>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Sub Category
                </label>
                <select
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Select Sub Category">
                    Select Sub Category
                  </option>
                  <option value="Software">Software</option>
                  <option value="AudioBooks">AudioBooks</option>
                  <option value="Fiction">Fiction</option>
                </select>
              </div>

              {/* Sub Sub Category Filter */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Sub Sub Category
                </label>
                <select
                  value={selectedSubSubCategory}
                  onChange={(e) => setSelectedSubSubCategory(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Select Sub Sub Category">
                    Select Sub Sub Category
                  </option>
                  <option value="Security">Security</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Children">Children</option>
                  <option value="Thriller">Thriller</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={resetFilters}
                className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Reset
              </button>
              <button className="bgBlue rounded-lg px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                Show data
              </button>
            </div>
          </div>

          {/* Search and Actions */}
        </div>
        {/* bg-white rounded-xl shadow-sm border border-gray-200 */}
        {/* Product Table */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
            <div className="flex max-w-md flex-1 gap-2">
              <div className="relative flex-1">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Product Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bgBlue rounded-lg px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                Search
              </button>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition-colors hover:bg-green-700">
                <Download className="h-4 w-4" />
                Export
              </button>

              <button className="bgBlue flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                Add new product
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      SL
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Product Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Product Type
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Unit Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Verify Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Active Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
                            <img
                              src="https://sb.kaleidousercontent.com/67418/1920x1100/0135fd63fd/transparent-boots.png"
                              alt=""
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {product.type}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(product.verifyStatus)}`}
                        >
                          {product.verifyStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {/* <button
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${product.activeStatus ? 'bgBlue' : 'bg-gray-200'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${product.activeStatus ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button> */}
                          <Switch />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="rounded-lg p-2 text-cyan-600 transition-colors hover:bg-cyan-50">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
