"use client";
import { useState } from "react";
import { Trash2, X, ChevronDown, Plus, Edit, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddNewOptions() {
  const [attributes, setAttributes] = useState([
    {
      id: 1,
      isDefault: true,
      title: "",
      color: "#000000",
      image: null,
    },
    {
      id: 2,
      isDefault: false,
      title: "",
      color: "#000000",
      image: null,
    },
  ]);

  const addNewAttribute = () => {
    const newId = Math.max(...attributes.map((attr) => attr.id)) + 1;
    setAttributes([
      ...attributes,
      {
        id: newId,
        isDefault: false,
        title: "",
        color: "#000000",
        image: null,
      },
    ]);
  };

  const removeAttribute = (id) => {
    setAttributes(attributes.filter((attr) => attr.id !== id));
  };

  const updateAttribute = (id, field, value) => {
    setAttributes(
      attributes.map((attr) =>
        attr.id === id ? { ...attr, [field]: value } : attr,
      ),
    );
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateAttribute(id, "image", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-9">
        <div className="mb-6 rounded-sm border border-gray-200 bg-white p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            New option
          </h2>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Option value
            </h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <div className="col-span-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
              #
            </div>
            <div className="col-span-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
              Label
            </div>
            <div className="col-span-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
              Price
            </div>

            <div className="col-span-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
              Price Type
            </div>
            <div className="col-span-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
              REMOVE
            </div>
          </div>

          {/* Attribute Rows */}
          {attributes.map((attribute, index) => (
            <div
              key={attribute.id}
              className="grid grid-cols-12 gap-4 border-b border-gray-100 px-4 py-4 hover:bg-gray-50"
            >
              {/* Row Number */}
              <div className="col-span-1 flex items-center">
                <span className="font-medium text-gray-700">{index + 1}</span>
              </div>

              {/* Is Default Radio */}

              {/* Title Input */}
              <div className="col-span-3 flex items-center">
                <input
                  type="text"
                  value={attribute.title}
                  onChange={(e) =>
                    updateAttribute(attribute.id, "title", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Please fill label"
                />
              </div>

              {/* Color Selector */}
              <div className="col-span-3 flex items-center">
                <input
                  type="text"
                  value={attribute.title}
                  onChange={(e) =>
                    updateAttribute(attribute.id, "title", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Please fill affect price"
                />
              </div>

              {/* Image Upload */}
              <div className="col-span-3 flex items-center space-x-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Fixed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed">Fixed</SelectItem>
                    <SelectItem value="percent">Percent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Remove Button */}
              <div className="col-span-2 flex items-center justify-center">
                <button
                  onClick={() => removeAttribute(attribute.id)}
                  className="p-1 text-red-500 transition-colors hover:text-red-700"
                  disabled={attributes.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <button
                  className="TextBlue p-1 transition-colors"
                  disabled={attributes.length === 1}
                >
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          <div className="m-3">
            <button
              onClick={addNewAttribute}
              className="rounded-sm border px-4 py-2 text-[15px] font-medium text-black transition-colors hover:text-black"
            >
              Add new row
            </button>
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
          <p className="p-3"> Is required?</p>
          <hr />
          <div className="p-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Yes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="No">No</SelectItem>
                <SelectItem value="Yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
