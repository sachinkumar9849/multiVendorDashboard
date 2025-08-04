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

const BrandAdd: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All brand");
  const [selectedCategory, setSelectedCategory] = useState("Select category");

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
            <h1 className="text-2xl font-bold text-gray-900">Brand Setup</h1>
          </div>

          <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1">
                <div className="mb-6 grid grid-cols-1 gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Brand Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="New Category"
                      required
                    />
                  </div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Image alt text<span className="text-red-500">*</span>
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
               <div className="col-span-1">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                 Brand Image
                </label>
                <ImageComponent />
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


    </div>

  );
};

export default BrandAdd;
