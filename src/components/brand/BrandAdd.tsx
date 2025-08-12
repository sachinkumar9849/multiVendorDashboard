"use client";
import React, { useState } from "react";

import ImageComponent from "../common/ImageComponent";

const BrandAdd: React.FC = () => {
  const [, setSearchTerm] = useState("");
  const [, setSelectedBrand] = useState("All brand");
  const [, setSelectedCategory] = useState("Select category");

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

          <div className="mb-6 rounded-md border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-4 md:mb-6">
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
