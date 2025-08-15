"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import ImageComponent from "../common/ImageComponent";
import TextArea from "../form/input/TextArea";
import CategoriesList from "../attribute/CategoriesSelect";
import { Save } from "lucide-react";

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
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9">
            <div className="mb-6 rounded-md border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3">
                <p className="text-xl font-semibold text-gray-900">New brand</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Brand Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Permalink <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="https://nest.botble.com/brands
"
                    required
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: https://example.com
"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Sort order
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="0
"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <TextArea placeholder="Short description" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
              <p className="p-3"> Publish</p>
              <hr />
              <div className="p-3">
                <button className="bgBlue flex items-center rounded-md px-4 py-2 text-[14px] font-normal text-white transition-colors">
                  <Save className="mr-1 w-[16px]" /> Save
                </button>
              </div>
            </div>
            <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
              <p className="p-3"> Status</p>
              <hr />
              <div className="p-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Published" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
              <p className="p-3"> Logo</p>
              <hr />
              <div className="p-3">
                <ImageComponent />
              </div>
            </div>
            <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
              <p className="p-3"> Is featured?</p>
              <hr />
              <div className="p-3">
                <Switch />
              </div>
            </div>
            <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
              <p className="p-3"> Categories</p>
              <hr />
              <div className="p-3">
                <CategoriesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAdd;
