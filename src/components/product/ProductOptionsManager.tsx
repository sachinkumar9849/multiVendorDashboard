import React, { useState } from "react";
import { Trash2, Upload, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductOptionsManager = () => {
  const [options, setOptions] = useState([]);
  const [selectedGlobalOption, setSelectedGlobalOption] = useState("");

  const addNewOption = (e) => {
    e?.preventDefault();
    const newOption = {
      id: Date.now(),
      name: "",
      type: "Field",
      isRequired: false,
      isGlobal: false,
      rows: [
        {
          id: Date.now(),
          label: "",
          price: "0",
          priceType: "Fixed",
          image: null,
          imagePreview: null,
        },
      ],
    };
    setOptions([...options, newOption]);
  };

  const addGlobalOption = () => {
    if (!selectedGlobalOption) return;

    const newOption = {
      id: Date.now(),
      name: selectedGlobalOption,
      type: "Checkbox",
      isRequired: false,
      isGlobal: true,
      rows: [
        {
          id: Date.now(),
          label: "",
          price: "0",
          priceType: "Fixed",
          image: null,
          imagePreview: null,
        },
      ],
    };
    setOptions([...options, newOption]);
    setSelectedGlobalOption("");
  };

  const addNewRow = (optionId, e) => {
    e?.preventDefault();
    setOptions(
      options.map((option) => {
        if (option.id === optionId) {
          return {
            ...option,
            rows: [
              ...option.rows,
              {
                id: Date.now() + Math.random(),
                label: "",
                price: "0",
                priceType: "Fixed",
                image: null,
                imagePreview: null,
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

  const handleImageUpload = (optionId, rowId, file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateRow(optionId, rowId, "image", file);
        updateRow(optionId, rowId, "imagePreview", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (optionId, rowId) => {
    updateRow(optionId, rowId, "image", null);
    updateRow(optionId, rowId, "imagePreview", null);
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
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium text-gray-700">
                  #{optionIndex + 1} {option.name}
                </h2>
                {option.isGlobal && (
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Global
                  </span>
                )}
              </div>
              {options.length > 1 && (
                <button
                  onClick={() => deleteOption(option.id)}
                  className="rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
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
                  disabled={option.isGlobal}
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
                      LABEL
                    </label>
                    <input
                      type="text"
                      value={row.label}
                      onChange={(e) =>
                        updateRow(option.id, row.id, "label", e.target.value)
                      }
                      placeholder="Enter label"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

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

                  {option.rows.length > 1 && (
                    <div className="flex items-end justify-end md:col-span-4">
                      <button
                        onClick={() => deleteRow(option.id, row.id)}
                        className="rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={(e) => addNewRow(option.id, e)}
              className="mt-4 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
            >
              Add new row
            </button>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <button
            onClick={addNewOption}
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Add new option
          </button>

          <div className="flex items-center gap-2" id="selectProduct">
            <Select
              value={selectedGlobalOption}
              onValueChange={setSelectedGlobalOption}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Global Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Warranty">Warranty</SelectItem>
                <SelectItem value="Ram">Ram</SelectItem>
                <SelectItem value="CPU">CPU</SelectItem>
                <SelectItem value="HDD">HDD</SelectItem>
              </SelectContent>
            </Select>

            <button
              onClick={addGlobalOption}
              disabled={!selectedGlobalOption}
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add Global Option
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsManager;
