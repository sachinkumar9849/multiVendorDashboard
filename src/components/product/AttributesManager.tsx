import React, { useState } from "react";

const AttributesManager = () => {
  const [isAddingAttribute, setIsAddingAttribute] = useState(false);
  const [attributeName, setAttributeName] = useState("Weight");
  const [attributeValue, setAttributeValue] = useState("1KG");

  const handleAddNewAttributes = () => {
    setIsAddingAttribute(true);
  };

  const handleCancel = () => {
    setIsAddingAttribute(false);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-md bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Attributes</h2>
        {!isAddingAttribute && (
          <button
            onClick={handleAddNewAttributes}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            Add new attributes
          </button>
        )}
        {isAddingAttribute && (
          <button
            onClick={handleCancel}
            className="rounded-md border border-orange-300 px-4 py-2 text-orange-600 transition-colors duration-200 hover:bg-orange-50"
          >
            Cancel
          </button>
        )}
      </div>

      <p className="mb-6 text-[15px] text-gray-600">
        Adding new attributes helps the product to have many options, such as
        size or color.
      </p>

      {isAddingAttribute && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Attribute name
              </label>
              <div className="relative">
                <select
                  value={attributeName}
                  onChange={(e) => setAttributeName(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="Weight">Weight</option>
                  <option value="Size">Size</option>
                  <option value="Color">Color</option>
                  <option value="Material">Material</option>
                  <option value="Brand">Brand</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Value
              </label>
              <div className="relative">
                <select
                  value={attributeValue}
                  onChange={(e) => setAttributeValue(e.target.value)}
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="1KG">1KG</option>
                  <option value="2KG">2KG</option>
                  <option value="5KG">5KG</option>
                  <option value="10KG">10KG</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttributesManager;
