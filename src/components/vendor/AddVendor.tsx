"use client";
import React, { useState } from "react";
import { User, Store, FileText, Eye, EyeOff } from "lucide-react";
import ImageComponent from "../common/ImageComponent";

export default function AddVendor() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    shopName: "",
    shopAddress: "",
    tin: "",
    expireDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="">
        {/* Header */}
        <div className="mb-4 flex items-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            <Store className="h-5 w-5 text-white" />
          </div>
          <h1 className="ml-2 text-2xl font-bold text-gray-900">
            Add New Vendor
          </h1>
        </div>

        <div className="space-y-8">
          {/* Vendor Information Card */}
          <div className="overflow-hidden rounded-md border border-gray-100 bg-white pb-5 shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center">
                <User className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-xl font-semibold text-black">
                  Vendor Information
                </h2>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Provide all mandatory details to create a new vendor profile
              </p>
            </div>

            <div className="px-6 py-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter last name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                      +977
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 rounded-r-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Vendor Image
                  </label>
                  <ImageComponent />
                </div>
              </div>
            </div>
          </div>

          {/* Account Information Card */}
          <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center">
                <User className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-xl font-semibold text-black">
                  Account Information
                </h2>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Provide the account details required for vendor operations
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-green-500"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Confirm password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-green-500"
                      placeholder="Confirm password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Information Card */}
          <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center">
                <Store className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-xl font-semibold text-black">
                  Shop Information
                </h2>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Basic shop details provide below
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Shop name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter shop name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Shop address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter shop address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Shop logo
                  </label>
                  <ImageComponent />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Shop cover image
                  </label>
                  <ImageComponent />
                </div>
              </div>
            </div>
          </div>

          {/* Business TIN Card */}
          <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center">
                <FileText className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-xl font-semibold text-black">
                  Business TIN
                </h2>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Provide vendor business tin and related information for taxpayer
                verification
              </p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Taxpayer identification number (TIN)
                  </label>
                  <input
                    type="text"
                    name="tin"
                    value={formData.tin}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter TIN number"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Expire Date
                  </label>
                  <input
                    type="date"
                    name="expireDate"
                    value={formData.expireDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    TIN Certificate
                  </label>

                  <ImageComponent />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-md bg-[#1455ac] px-8 py-4 text-white"
            >
              Create Vendor Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
