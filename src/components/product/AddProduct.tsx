"use client";
import React, { useState } from "react";
import { ChevronDown, Save } from "lucide-react";
import ImageComponent from "../common/ImageComponent";
import { Switch } from "../ui/switch";
import CategoriesList from "../attribute/CategoriesSelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import AttributesManager from "./AttributesManager";
import ProductOptionsManager from "./ProductOptionsManager";
import { Checkbox } from "../ui/checkbox";

const AddProduct = () => {
  const [selectedColors] = useState([]);
  const [selectedAttributes] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showAttributePicker, setShowAttributePicker] = useState(false);

  const handleChoosePeriodClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Kid's Fashion",
    "Health & Beauty",
    "Pet Supplies",
    "Home & Kitchen",
    "Baby & Toddler",
    "Sports & Outdoor",
    "Phone & Gadgets",
    "Electronics & Gadgets",
    "Travel & Luggage",
    "Books & Stationery",
    "Groceries & Dailies",
    "Musical Instruments",
    "Gifts & Crafts",
    "Automotive",
    "Digital Products",
  ];

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Black",
    "White",
    "Gray",
    "Brown",
    "Navy",
    "Teal",
    "Lime",
    "Maroon",
    "Olive",
    "Silver",
    "Gold",
    "Violet",
    "Turquoise",
    "Magenta",
    "Cyan",
    "Indigo",
    "Crimson",
    "Coral",
    "Salmon",
    "Khaki",
    "Beige",
    "Tan",
    "Azure",
  ];

  const attributes = ["type", "size"];

  return (
    <>
      <div>
        <h1 className="mb-2 text-[25px] font-semibold text-gray-900 md:mb-2">
          Add New Product
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-9">
          <form className="">
            {/* Product Information */}
            <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Product name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-sm border border-gray-300 px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Permalink
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-sm border border-gray-300 px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="https://nest.botble.com/products"
                  />
                </div>
                <p>
                  {" "}
                  <span className="text-[13px] text-gray-500">
                    Preview:{" "}
                  </span>{" "}
                  <Link
                    className="text-[13px] text-[#216bc4]"
                    target="_"
                    href="https://nest.botble.com/products"
                  >
                    https://nest.botble.com/products
                  </Link>{" "}
                </p>

                <div className="">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <textarea
                    className="w-full rounded-sm border border-gray-300 px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product description"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Product Images
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="col-span-1">
                  <ImageComponent />
                </div>

                <div className="col-span-1">
                  <ImageComponent />
                </div>
              </div>
            </div>
            <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Overview
              </h3>
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    SKU
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="MJ-167"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Rs.1595"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Price sale
                    </label>
                    <p
                      className="text-[13px] text-[#216bc4]"
                      onClick={handleChoosePeriodClick}
                    >
                      Choose Discount Period
                    </p>
                  </div>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Rs.1595"
                  />
                  <small className="font-normal text-[#6c7a91]">
                    Discount 36% from original price.
                  </small>
                </div>

                {showDatePicker && (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        From date
                      </label>

                      <input
                        type="date"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Rs. Enter cost per item"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        To date
                      </label>

                      <input
                        type="date"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Rs. Enter cost per item"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Cost per item
                  </label>

                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Rs. Enter cost per item"
                  />
                  <small className="font-normal text-[#6c7a91]">
                    Customers won t see this price.
                  </small>
                </div>

                <div className="col-span-2">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="mt-[3px] mr-1 h-3 w-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      With storehouse management Quantity
                    </label>
                  </div>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="55"
                  />
                </div>
              </div>
            </div>

            {/* General Setup */}
            <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                General Setup
              </h3>
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Category *
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                    <option>Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Sub Category
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                    <option>Select Sub Category</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Sub Sub Category
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500">
                    <option>Select Sub Sub Category</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing & Others */}
            <div className="mb-3 rounded-md border border-gray-200 bg-white">
              <AttributesManager />
            </div>

            {/* Images */}
            {/* product options  */}
            {/* <div className="mb-3 rounded-md border border-gray-200 bg-white p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Product options
              </h3>
            </div> */}
            <ProductOptionsManager />
          </form>
        </div>
        <div className="col-span-3">
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Publish</p>
            <hr />
            <div className="p-3">
              <button className="bgBlue flex items-center rounded-md px-4 py-2 text-[14px] font-normal text-white transition-colors">
                <Save className="mr-1 w-[16px]" /> Save
              </button>
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
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
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Store</p>
            <hr />
            <div className="p-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Global">Global Office</SelectItem>
                  <SelectItem value="GlobalStore">Global Store</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Is featured?</p>
            <hr />
            <div className="p-3">
              <Switch />
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Brand</p>
            <hr />
            <div className="p-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Apple">Apple</SelectItem>
                  <SelectItem value="Samsung">Samsung</SelectItem>
                  <SelectItem value="Nokia">Nokia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Featured image (optional)</p>
            <hr />
            <div className="p-3">
              <ImageComponent />
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Product collections</p>
            <hr />
            <div className="p-4">
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  New Arrival
                </label>
              </div>
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  Best Sellers
                </label>
              </div>
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  Spicial Offer
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Labels</p>
            <hr />
            <div className="p-4">
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  Hot
                </label>
              </div>
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  New
                </label>
              </div>
              <div className="flex">
                <Checkbox />
                <label className="mt-[-2px] mb-2 ml-2 block text-sm font-normal text-gray-700">
                  Sale
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4 rounded-md border border-gray-200 bg-white shadow-sm">
            <p className="p-3"> Categories</p>
            <hr />
            <div className="p-3">
              <CategoriesList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
