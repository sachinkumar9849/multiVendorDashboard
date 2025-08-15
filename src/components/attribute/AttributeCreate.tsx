"use client";
import { Save } from "lucide-react";
import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoriesList from "./CategoriesSelect";
import AddNewAttribute from "./AddNewAttribute";

const AttributeCreate: React.FC = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <AddNewAttribute />
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
                <p className="p-3"> Sort Order</p>
                <hr />
                <div className="p-3">
                  <input
                    type="number"
                    name="lastName"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
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
    </div>
  );
};

export default AttributeCreate;
