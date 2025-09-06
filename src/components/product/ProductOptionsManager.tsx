import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const ProductOptionsManager = () => {
  const [options, setOptions] = useState([]);

  const addNewOption = ({ e }) => {
    event?.preventDefault();
    const newOption = {
      id: Date.now(),
      name: "",
      type: "Field",
      isRequired: false,
      rows: [
        {
          id: Date.now(),
          price: "0",
          priceType: "Fixed",
        },
      ],
    };
    setOptions([...options, newOption]);
  };

  const addNewRow = (optionId, e) => {
    event?.preventDefault(e);
    setOptions(
      options.map((option) => {
        if (option.id === optionId) {
          return {
            ...option,
            rows: [
              ...option.rows,
              {
                id: Date.now(),
                price: "0",
                priceType: "Fixed",
              },
            ],
          };
        }
        return option;
      }),
    );
  };

  const deleteOption = (optionId) => {
    setOptions(options.filter((option) => option.id !== optionId));
  };

  const deleteRow = (optionId, rowId) => {
    setOptions(
      options.map((option) => {
        if (option.id === optionId) {
          return {
            ...option,
            rows: option.rows.filter((row) => row.id !== rowId),
          };
        }
        return option;
      }),
    );
  };

  const updateOption = (optionId, field, value) => {
    setOptions(
      options.map((option) => {
        if (option.id === optionId) {
          return { ...option, [field]: value };
        }
        return option;
      }),
    );
  };

  const updateRow = (optionId, rowId, field, value) => {
    setOptions(
      options.map((option) => {
        if (option.id === optionId) {
          return {
            ...option,
            rows: option.rows.map((row) => {
              if (row.id === rowId) {
                return { ...row, [field]: value };
              }
              return row;
            }),
          };
        }
        return option;
      }),
    );
  };

  return (
    <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
      <h1 className="mb-4 text-lg font-semibold text-gray-800">
        Product options
      </h1>

      <div className="space-y-6">
        {options.map((option, optionIndex) => (
          <div
            key={option.id}
            className="rounded-lg border border-gray-200 bg-white p-6"
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-700">
                #{optionIndex + 1}
              </h2>
              {options.length > 1 && (
                <button
                  onClick={() => deleteOption(option.id)}
                  className="rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  value={option.name}
                  onChange={(e) =>
                    updateOption(option.id, "name", e.target.value)
                  }
                  placeholder="Name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Type
                </label>
                <select
                  value={option.type}
                  onChange={(e) =>
                    updateOption(option.id, "type", e.target.value)
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="Field">Field</option>
                  <option value="Dropdown">Dropdown</option>
                  <option value="Radio">Radio</option>
                  <option value="Checkbox">Checkbox</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="mt-6 flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={option.isRequired}
                    onChange={(e) =>
                      updateOption(option.id, "isRequired", e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Is required?</span>
                </label>
              </div>
            </div>

            {/* Rows for each option */}
            <div className="space-y-4">
              {option.rows.map((row, rowIndex) => (
                <div
                  key={row.id}
                  className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-3"
                >
                  <div>
                    <label className="mb-1 block text-xs font-medium tracking-wide text-gray-500 uppercase">
                      PRICE
                    </label>
                    <input
                      type="number"
                      value={row.price}
                      onChange={(e) =>
                        updateRow(option.id, row.id, "price", e.target.value)
                      }
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium tracking-wide text-gray-500 uppercase">
                      PRICE TYPE
                    </label>
                    <select
                      value={row.priceType}
                      onChange={(e) =>
                        updateRow(
                          option.id,
                          row.id,
                          "priceType",
                          e.target.value,
                        )
                      }
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="Fixed">Fixed</option>
                      <option value="Percentage">Percentage</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    {option.rows.length > 1 && (
                      <button
                        onClick={() => deleteRow(option.id, row.id)}
                        className="rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => addNewRow(option.id)}
              className="mt-4 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
            >
              Add new row
            </button>
          </div>
        ))}

        <button
          onClick={addNewOption}
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Add new option
        </button>
      </div>
    </div>
  );
};

export default ProductOptionsManager;
