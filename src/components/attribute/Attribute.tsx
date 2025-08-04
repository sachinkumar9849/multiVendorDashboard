"use client";
import React, { useState, useMemo } from "react";
import { Search, Edit, Trash2 } from "lucide-react";
import { Switch } from "../ui/switch";
import ImageComponent from "../common/ImageComponent";

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

const Attribute: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All brand");
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const products: Product[] = [
    {
      id: 1,
      name: "Size",
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
      name: "Type",
      type: "Digital",
      price: 150.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "Microsoft",
      category: "Electronics & Gadgets",
      subCategory: "Software",
      subSubCategory: "Productivity",
    },
  ];

  const categories = ["Set priority", "1", "2", "3", "4", "5", "6"];

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
    setSelectedCategory("Select Sub Category");
    setSelectedCategory("Select Sub Sub Category");
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500">
              <div className="h-4 w-4 rounded-sm bg-white"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Attribute Setup
            </h1>
          </div>

          <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-5">
              <div className="col-span-1">
                <div className="mb-6 grid grid-cols-1 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Attribute Name* (EN)
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="New Category"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-end gap-3">
              <button
                onClick={resetFilters}
                className="rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Reset
              </button>
              <button className="bgBlue rounded-lg px-6 py-2 font-medium text-white transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
            <div className="flex gap-3">
              <p className="text-xl font-semibold text-gray-900">
                Attribute list
              </p>
              <p className="rounded-md bg-gray-200 px-2 py-1 text-[12px]">2</p>
            </div>
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
              <button className="bgBlue rounded-lg px-6 py-2 font-medium text-white transition-colors">
                Search
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
                      Attribute Name
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

                      <td className="px-6 py-4 text-sm text-gray-900">
                        {product.name}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
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

export default Attribute;
