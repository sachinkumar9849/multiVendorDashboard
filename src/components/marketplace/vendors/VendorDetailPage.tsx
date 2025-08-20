"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  ShoppingCart,
  Package,
  DollarSign,
  MapPin,
  Star,
  Edit,
  CheckCircle,
  Upload,
  X,
} from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);

  // Mock data based on the image
  const vendorData: VendorData = {
    id: "1",
    name: "Afton Braun I",
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
        name: "Afton Braun I",
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
        return "bg-blue-100 text-blue-800";
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column - Customer Information */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 flex items-center text-lg font-semibold">
                <User className="mr-2 h-5 w-5" />
                Customer Information
              </h2>

              {/* Profile Image */}
              <div className="mb-6 flex flex-col items-center">
                <div className="relative">
                  {/* <img
                    src={selectedImage || vendorData.profileImage}
                    alt={vendorData.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  /> */}
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

            {/* Addresses Section */}
            <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center text-lg font-semibold">
                <MapPin className="mr-2 h-5 w-5" />
                Addresses
              </h2>

              {vendorData.addresses.map((address) => (
                <div
                  key={address.id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{address.name}</h3>
                      {address.isDefault && (
                        <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                          Default
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {address.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Statistics and Reviews */}
          <div className="lg:col-span-2">
            {/* Top Statistics Cards */}
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-center">
                  <div className="mb-1 text-sm tracking-wide text-gray-500 uppercase">
                    Total Orders
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {vendorData.totalOrders}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-center">
                  <div className="mb-1 text-sm tracking-wide text-gray-500 uppercase">
                    Completed Orders
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {vendorData.completedOrders}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-center">
                  <div className="mb-1 text-sm tracking-wide text-gray-500 uppercase">
                    Total Products
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {vendorData.totalProducts}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-center">
                  <div className="mb-1 text-sm tracking-wide text-gray-500 uppercase">
                    Total Spent
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${vendorData.totalSpent.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
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
