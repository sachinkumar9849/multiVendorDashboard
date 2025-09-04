"use client";

import { Save } from "lucide-react";

import TextArea from "../form/input/TextArea";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateSpecificationTables() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-9">
        <div className="mb-6 rounded-sm border border-gray-200 bg-white p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Create Specification Table
          </h2>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Group name
            </label>
            <input
              type="text"
              className="w-full rounded-sm border border-gray-300 px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Group name"
            />
          </div>
          <div className="mt-3">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>
            <TextArea placeholder="Description"></TextArea>
          </div>
          <div className="mt-3">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Select the groups to display in this table
            </label>
            <div className="flex">
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-semibold text-gray-700">
                  Dimensions
                </label>
              </div>
              <div className="mx-3 flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-semibold text-gray-700">
                  Performance
                </label>
              </div>
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-semibold text-gray-700">
                  Battery
                </label>
              </div>
              <div className="ml-3 flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-semibold text-gray-700">
                  Display
                </label>
              </div>
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
      </div>
    </div>
  );
}
