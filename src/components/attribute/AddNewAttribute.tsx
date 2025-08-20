import { useState } from "react";
import { Trash2, X, ChevronDown, Plus, Edit } from "lucide-react";

export default function AddNewAttribute() {
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
    <>
      <div className="mb-6 rounded-sm border border-gray-200 bg-white p-5">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          New product attribute
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
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Attributes list
          </h2>
          <button
            onClick={addNewAttribute}
            className="rounded-sm border px-4 py-2 text-[15px] font-medium text-black transition-colors hover:text-black"
          >
            Add new attribute
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-4 py-3">
          <div className="col-span-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
            #
          </div>
          <div className="col-span-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
            IS DEFAULT?
          </div>
          <div className="col-span-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
            TITLE
          </div>
          <div className="col-span-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
            COLOR
          </div>
          <div className="col-span-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
            IMAGE
          </div>
          <div className="col-span-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
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
            <div className="col-span-2 flex items-center">
              <input
                type="radio"
                name="defaultAttribute"
                checked={attribute.isDefault}
                onChange={() => {
                  setAttributes(
                    attributes.map((attr) => ({
                      ...attr,
                      isDefault: attr.id === attribute.id,
                    })),
                  );
                }}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>

            {/* Title Input */}
            <div className="col-span-3 flex items-center">
              <input
                type="text"
                value={attribute.title}
                onChange={(e) =>
                  updateAttribute(attribute.id, "title", e.target.value)
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter title"
              />
            </div>

            {/* Color Selector */}
            <div className="col-span-2 flex items-center">
              <div className="relative">
                <div
                  className="flex h-8 w-12 cursor-pointer items-center justify-center rounded border border-gray-300"
                  style={{ backgroundColor: attribute.color }}
                  onClick={() =>
                    document.getElementById(`color-${attribute.id}`).click()
                  }
                >
                  <div
                    className="h-6 w-8 rounded"
                    style={{ backgroundColor: attribute.color }}
                  ></div>
                </div>
                <input
                  id={`color-${attribute.id}`}
                  type="color"
                  value={attribute.color}
                  onChange={(e) =>
                    updateAttribute(attribute.id, "color", e.target.value)
                  }
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <ChevronDown className="absolute top-1/2 right-1 h-3 w-3 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {/* Image Upload */}
            <div className="col-span-3 flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded border-2 border-dashed border-gray-300 bg-gray-50">
                  {attribute.image ? (
                    <img
                      src={attribute.image}
                      alt=""
                      className="h-6 w-6 rounded object-cover"
                    />
                  ) : (
                    <Plus className="h-4 w-4 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(attribute.id, e)}
                  className="hidden"
                  id={`image-${attribute.id}`}
                />
                <label
                  htmlFor={`image-${attribute.id}`}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  or
                </label>
                <button className="TextBlue text-sm font-medium">
                  Add from URL
                </button>
              </div>
              {attribute.image && (
                <button
                  onClick={() => updateAttribute(attribute.id, "image", null)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Remove Button */}
            <div className="col-span-1 flex items-center justify-center">
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
      </div>
    </>
  );
}
