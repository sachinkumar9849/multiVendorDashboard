"use client";
import { List, Save } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageComponent from "@/components/common/ImageComponent";
import TextArea from "@/components/form/input/TextArea";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const StoreCreate: React.FC = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-9">
              <div className="mb-6 rounded-md border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex justify-between">
                  <p className="mb-3 text-xl font-semibold text-gray-900">
                    New Stores
                  </p>
                  <Link href="/marketplace/stores-list">
                    <Button className="bgBlue rounded-sm">
                      <List /> Store List
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Tax ID
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Tax ID
"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Logo
                    </label>
                    <ImageComponent />
                  </div>
                  <div className="col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Cover Image
                    </label>
                    <ImageComponent />
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Facebook
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Facebook"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Instagram
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Instagram"
                      />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Messenger
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Messenger"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Whatsapp
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        placeholder="Whatsapp"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Description
                      </label>
                      {/* <input
                                                type="text"
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                                                placeholder="Short description"
                                            /> */}
                      <TextArea placeholder="Short description" />
                    </div>
                  </div>
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

              <div className="mb-6 rounded-md border border-gray-200 bg-white shadow-sm">
                <p className="p-3"> Store owner</p>
                <hr />
                <div className="p-3">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a store owner..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Dr. Chloe Towne</SelectItem>
                      <SelectItem value="draft">Carlee Mann</SelectItem>
                      <SelectItem value="pending">Carolina Maggio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCreate;
