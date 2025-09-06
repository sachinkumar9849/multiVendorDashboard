"use client";

import { Save } from "lucide-react";

import TextArea from "../form/input/TextArea";

export default function CreateGropup() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-9">
        <div className="mb-6 rounded-sm border border-gray-200 bg-white p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Create Specification Group
          </h2>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-sm border border-gray-300 px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>
          <div className="mt-3">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>
            <TextArea></TextArea>
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
