"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Edit,
  CheckCircle,
  Upload,
  X,
  Store,
  PhoneCall,
  Trash2,
  Eye,
} from "lucide-react";
import type { Product } from "@/components/product/ProductList";

interface Review {
  id: string;
  productName: string;
  rating: number;
  maxRating: number;
  comment: string;
  timeAgo: string;
  productImage: string;
}

interface Address {
  id: string;
  name: string;
  isDefault: boolean;
  address: string;
}

interface VendorData {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  isEmailVerified: boolean;
  status: "Activated" | "Deactivated" | "Pending";
  dateOfBirth: string;
  createdAt: string;
  totalOrders: number;
  completedOrders: number;
  totalProducts: number;
  totalSpent: number;
  reviews: Review[];
  addresses: Address[];
}

const VendorDetailPage: React.FC = () => {
  const [, setSelectedImage] = useState<string | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);

  // Sample data based on your image
  const products: Product[] = [
    {
      id: 1,
      name: "Norton Utilities Ultimate",
      type: "Digital",
      price: 40.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "Norton",
      category: "Electronics & Gadgets",
      subCategory: "Software",
      subSubCategory: "Security",
    },
    {
      id: 2,
      name: "Office 2021 Professional",
      type: "Digital",
      price: 150.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "Microsoft",
      category: "Electronics & Gadgets",
      subCategory: "Software",
      subSubCategory: "Productivity",
    },
    {
      id: 3,
      name: "125 Childrens AudioBooks",
      type: "Digital",
      price: 50.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "AudioPress",
      category: "Books & Stationery",
      subCategory: "AudioBooks",
      subSubCategory: "Children",
    },
    {
      id: 4,
      name: "Kill Code Fiction",
      type: "Physical",
      price: 16.0,
      verifyStatus: "Approved",
      activeStatus: true,
      brand: "BookPress",
      category: "Books & Stationery",
      subCategory: "Fiction",
      subSubCategory: "Thriller",
    },
  ];

  // Mock data based on the image
  const vendorData: VendorData = {
    id: "1",
    name: "Rahul Sharma",
    email: "johns.lula@example.org",
    phone: "+18042072053",
    profileImage: "/api/placeholder/120/120",
    isEmailVerified: true,
    status: "Activated",
    dateOfBirth: "1989-04-26",
    createdAt: "2025-05-17 08:45",
    totalOrders: 0,
    completedOrders: 0,
    totalProducts: 0,
    totalSpent: 0.0,
    reviews: [
      {
        id: "1",
        productName: "All Natural Italian-Style Chicken Meatballs",
        rating: 2,
        maxRating: 5,
        comment:
          "Perfect ++++++++i love it really also i get to fast ticket answers... Thanks Lot BOTTLE Teams",
        timeAgo: "2 months ago",
        productImage: "https://nest.botble.com/storage/products/18-150x150.jpg",
      },
      {
        id: "2",
        productName: "Encore Seafoods Stuffed Alaskan (Digital)",
        rating: 1,
        maxRating: 5,
        comment:
          "The code is good, in general, if you like it, can you give it 5 stars?",
        timeAgo: "2 months ago",
        productImage: "https://nest.botble.com/storage/products/8-150x150.jpg",
      },
      {
        id: "3",
        productName: "Chobani Complete Vanilla Greek",
        rating: 3,
        maxRating: 5,
        comment:
          "Customer Support are grade (A*), however the code is a way too over engineered for it's purpose.",
        timeAgo: "2 months ago",
        productImage: "https://nest.botble.com/storage/products/18-150x150.jpg",
      },
      {
        id: "4",
        productName: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4,
        maxRating: 5,
        comment:
          "Good app, good backup service and support. Good documentation.",
        timeAgo: "2 months ago",
        productImage: "https://nest.botble.com/storage/products/18-150x150.jpg",
      },
      {
        id: "5",
        productName:
          "Naturally Flavored Cinnamon Vanilla Light Roast Coffee (Digital)",
        rating: 2,
        maxRating: 5,
        comment:
          "Amazing code, amazing support. Overall, im really confident in Botble and im happy I made the right choice! Thank you so much guys for coding this masterpiece",
        timeAgo: "2 months ago",
        productImage: "https://nest.botble.com/storage/products/11-150x150.jpg",
      },
    ],
    addresses: [
      {
        id: "1",
        name: "Rahul sharma",
        isDefault: true,
        address: "Sour, East Moshe, Louisiana 71639",
      },
    ],
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderStars = (rating: number, maxRating: number) => {
    return Array.from({ length: maxRating }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activated":
        return "bg-green-100 text-blue-800";
      case "Deactivated":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column - Customer Information */}
          <div className="lg:col-span-3">
            <div className="rounded-md bg-white p-3 shadow-sm">
              <h2 className="mb-6 flex items-center text-lg font-semibold">
                <User className="mr-2 h-4 w-4" />
                Vendor Information
              </h2>

              {/* Profile Image */}
              <div className="mb-6 flex flex-col items-center">
                <div className="relative">
                  <img
                    src="https://nest.botble.com/storage/customers/8-150x150.jpg"
                    alt={vendorData.name}
                    className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover"
                  />
                  <button
                    onClick={() => setIsEditingImage(!isEditingImage)}
                    className="absolute -top-1 -right-1 rounded-full bg-blue-500 p-1.5 text-white transition-colors hover:bg-blue-600"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </div>

                {isEditingImage && (
                  <div className="mt-4 space-y-2">
                    <label className="flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload New Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={() => setIsEditingImage(false)}
                      className="flex w-full items-center justify-center rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Customer Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{vendorData.name}</h3>
                  <div className="mt-1 flex items-center text-gray-600">
                    <Mail className="mr-2 h-4 w-4" />
                    <span className="text-sm">{vendorData.email}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="text-sm">{vendorData.phone}</span>
                </div>

                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    {vendorData.isEmailVerified
                      ? "Email verified?"
                      : "Email not verified"}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(vendorData.status)}`}
                      >
                        {vendorData.status}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Date of birth</span>
                      <span className="text-sm text-gray-600">
                        {vendorData.dateOfBirth}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Created At</span>
                      <span className="text-sm text-gray-600">
                        {vendorData.createdAt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total orders</span>
                    <span className="text-sm text-gray-600">
                      {vendorData.totalOrders}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Completed orders
                    </span>
                    <span className="text-sm text-gray-600">
                      {vendorData.completedOrders}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total products</span>
                    <span className="text-sm text-gray-600">
                      {vendorData.totalProducts}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total spent</span>
                    <span className="text-sm text-gray-600">
                      ${vendorData.totalSpent.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="bgBlue mt-6 flex w-full items-center justify-center rounded-lg px-4 py-2 text-white transition-colors hover:bg-blue-600">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit customer
                </button>
              </div>
            </div>
            <div className="mt-6 rounded-md bg-white p-3 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold">
                <Store className="mr-2 h-4 w-4" />
                Store information
              </h2>
              <hr />

              {vendorData.addresses.map((address) => (
                <div
                  key={address.id}
                  className="border-b py-4 last:border-b-0 last:pb-0"
                >
                  <img
                    className="mx-auto"
                    style={{ width: "50px", height: "50px" }}
                    src="https://nest.botble.com/storage/stores/6-150x150.png"
                    alt=""
                  />
                  <div className="flex items-center justify-center">
                    <div>
                      <h3 className="font-medium">Global Store</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    strosin.rachelle@example.com
                  </p>
                  <p className="mx-auto mt-2 flex justify-center text-sm text-gray-600">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    +16402355633
                  </p>
                </div>
              ))}
            </div>
            {/* Addresses Section */}
            <div className="mt-6 rounded-md bg-white p-3 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold">
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </h2>
              <hr />

              {vendorData.addresses.map((address) => (
                <div
                  key={address.id}
                  className="border-b py-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{address.name}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {address.address}
                  </p>

                  <p className="mt-2 flex text-sm text-gray-600">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    +16402355633
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Statistics and Reviews */}
          <div className="lg:col-span-9">
            {/* Top Statistics Cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Store Products
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    5
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Store Orders
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    15
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Total Revenue
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    Rs.5,473.00
                  </div>
                </div>
              </div>

              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Total Earnings
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    Rs. 5,473.00
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Withdrawals
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    Rs. 5,473.00
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Pending Withdrawals
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    Rs. 5,473.00
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Balance
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    Rs. 5,473.00
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white p-3 shadow-sm">
                <div className="">
                  <div className="mb-1 text-[13px] tracking-wide text-gray-500 uppercase">
                    Completed orders
                  </div>
                  <div className="text-[20px] font-semibold text-gray-900">
                    0
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 overflow-hidden rounded-md bg-white shadow-sm">
              <h2 className="mx-4 mt-3 mb-2 text-lg font-semibold">Products</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Product Name
                      </th>

                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Quantity
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Created
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>

                      <th className="px-6 py-2 text-left text-sm font-semibold text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product, index) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-200">
                              <img
                                src="https://sb.kaleidousercontent.com/67418/1920x1100/0135fd63fd/transparent-boots.png"
                                alt=""
                              />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                              {product.name} ({product.type})
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-2 text-sm font-medium text-gray-900">
                          44
                        </td>
                        <td className="px-6 py-2 text-sm font-medium text-gray-900">
                          2025
                        </td>
                        <td className="px-6 py-2 text-sm font-medium text-gray-900">
                          Rs. 323
                        </td>
                        <td className="px-6 py-2">
                          <span
                            className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(product.verifyStatus)}`}
                          >
                            {product.verifyStatus}
                          </span>
                        </td>

                        <td className="px-6 py-2">
                          <div className="flex items-center gap-2">
                            <button className="rounded-lg p-2 text-cyan-600 transition-colors hover:bg-cyan-50">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="rounded-md bg-white p-3 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold">
                Recent Reviews ({vendorData.reviews.length})
              </h2>

              <div className="space-y-6">
                {vendorData.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="flex gap-4 border-b pb-6 last:border-b-0 last:pb-0"
                  >
                    <img
                      src={review.productImage}
                      alt={review.productName}
                      className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="TextBlue cursor-pointer font-medium">
                            {review.productName}
                          </h3>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex">
                              {renderStars(review.rating, review.maxRating)}
                            </div>
                            <span className="text-sm text-gray-500">
                              ({review.rating}/{review.maxRating})
                            </span>
                          </div>
                        </div>
                        <span className="ml-4 text-sm whitespace-nowrap text-gray-500">
                          {review.timeAgo}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-gray-700">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailPage;
