"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  Edit,
  Trash2,
  ChevronDown,
  X,
  Filter,
  Plus,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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
  isRequired: boolean;
  createdAt: string;
}

const ProductOptionsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All brand");
  const [selectedCategory, setSelectedCategory] = useState("Select category");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    "Select Sub Category",
  );
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(
    "Select Sub Sub Category",
  );
  const [selectedType, setSelectedType] = useState("All types");
  const [selectedVerifyStatus, setSelectedVerifyStatus] =
    useState("All status");
  const [selectedIsRequired, setSelectedIsRequired] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtersRef = useRef<HTMLDivElement>(null);

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
      isRequired: false,
      createdAt: "2025-05-10",
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
      isRequired: true,
      createdAt: "2025-04-15",
    },
    {
      id: 3,
      name: "Color",
      type: "Physical",
      price: 25.0,
      verifyStatus: "Pending",
      activeStatus: false,
      brand: "Adobe",
      category: "Design & Creative",
      subCategory: "Graphics",
      subSubCategory: "Tools",
      isRequired: false,
      createdAt: "2025-03-20",
    },
  ];

  // Get unique values for filter options
  const brands = [
    "All brand",
    ...Array.from(new Set(products.map((p) => p.brand))),
  ];
  const categories = [
    "Select category",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];
  const types = ["All types", "Digital", "Physical"];
  const verifyStatuses = ["All status", "Approved", "Pending", "Rejected"];
  const isRequiredOptions = ["All", "Required", "Not Required"];

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
      const matchesType =
        selectedType === "All types" || product.type === selectedType;
      const matchesVerifyStatus =
        selectedVerifyStatus === "All status" ||
        product.verifyStatus === selectedVerifyStatus;
      const matchesIsRequired =
        selectedIsRequired === "All" ||
        (selectedIsRequired === "Required" && product.isRequired) ||
        (selectedIsRequired === "Not Required" && !product.isRequired);

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        matchesType &&
        matchesVerifyStatus &&
        matchesIsRequired
      );
    });
  }, [
    searchTerm,
    selectedBrand,
    selectedCategory,
    selectedType,
    selectedVerifyStatus,
    selectedIsRequired,
    products,
  ]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All brand");
    setSelectedCategory("Select category");
    setSelectedSubCategory("Select Sub Category");
    setSelectedSubSubCategory("Select Sub Sub Category");
    setSelectedType("All types");
    setSelectedVerifyStatus("All status");
    setSelectedIsRequired("All");
  };

  const hasActiveFilters = () => {
    return (
      searchTerm !== "" ||
      selectedBrand !== "All brand" ||
      selectedCategory !== "Select category" ||
      selectedType !== "All types" ||
      selectedVerifyStatus !== "All status" ||
      selectedIsRequired !== "All"
    );
  };

  // Close filters when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-md border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
            <div className="flex gap-3">
              <p className="text-xl font-semibold text-gray-900">
                Product options
              </p>
              <p className="rounded-md bg-gray-200 px-2 py-1 text-[12px]">
                {filteredProducts.length}
              </p>
            </div>
            <div className="flex max-w-lg flex-1 gap-2">
              <Link href="/product-options/create">
                <Button className="bgBlue">
                  {" "}
                  <Plus /> Create
                </Button>
              </Link>
              {/* Filters Button with Dropdown */}
              <div className="relative" ref={filtersRef}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 rounded-md border px-6 py-2 text-[14px] font-medium transition-colors ${
                    hasActiveFilters()
                      ? "border-blue-200 bg-blue-50 text-blue-600"
                      : "text-black hover:bg-gray-50"
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {hasActiveFilters() && (
                    <span className="rounded-full bg-blue-500 px-1.5 py-0.5 text-[10px] text-white">
                      {
                        [
                          selectedBrand !== "All brand",
                          selectedCategory !== "Select category",
                          selectedType !== "All types",
                          selectedVerifyStatus !== "All status",
                          selectedIsRequired !== "All",
                        ].filter(Boolean).length
                      }
                    </span>
                  )}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Advanced Filters Dropdown */}
                {showFilters && (
                  <div className="absolute top-full left-0 z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-lg">
                    <div className="p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">
                          Advanced Filters
                        </h3>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        {/* Brand Filter */}
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Brand
                          </label>
                          <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Category
                          </label>
                          <select
                            value={selectedCategory}
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            {categories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Type Filter */}
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Type
                          </label>
                          <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            {types.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Verify Status Filter */}
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Verify Status
                          </label>
                          <select
                            value={selectedVerifyStatus}
                            onChange={(e) =>
                              setSelectedVerifyStatus(e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            {verifyStatuses.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Is Required Filter */}
                        <div>
                          <label className="mb-1 block text-xs font-medium text-gray-700">
                            Is Required
                          </label>
                          <select
                            value={selectedIsRequired}
                            onChange={(e) =>
                              setSelectedIsRequired(e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            {isRequiredOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Filter Actions */}
                      <div className="mt-6 flex gap-2 border-t border-gray-200 pt-4">
                        <button
                          onClick={resetFilters}
                          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          Clear All
                        </button>
                        <button
                          onClick={() => setShowFilters(false)}
                          className="bgBlue flex-1 rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex max-w-sm flex-1 gap-2">
                <div className="relative flex-1">
                  <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-7 text-[14px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bgBlue rounded-md px-6 py-2 text-[14px] font-medium text-white transition-colors hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-left text-[12px] font-semibold text-gray-900 uppercase">
                      SL
                    </th>
                    <th className="px-6 py-2 text-left text-[12px] font-semibold text-gray-900 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-2 text-left text-[12px] font-semibold text-gray-900 uppercase">
                      Is Required
                    </th>
                    <th className="px-6 py-2 text-left text-[12px] font-semibold text-gray-900 uppercase">
                      Created at
                    </th>
                    <th className="px-6 py-2 text-left text-[12px] font-semibold text-gray-900 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-2 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-900">
                        {product.name}
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-900">
                        <span
                          className={`rounded-sm px-2 py-1 text-[10px] text-white ${
                            product.isRequired ? "bg-green-600" : "bg-red-600"
                          }`}
                        >
                          {product.isRequired ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-6 py-2 text-sm text-gray-900">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-2">
                        <div className="flex items-center gap-2">
                          <button className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-50">
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

            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-gray-500">
                  No products found matching your criteria.
                </p>
                {hasActiveFilters() && (
                  <button
                    onClick={resetFilters}
                    className="textBlue mt-2 text-sm"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsList;
