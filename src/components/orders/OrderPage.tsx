"use client";
import { useState } from "react";
import { OrderFilters } from "./OrderFilters";
import { OrderTable } from "./OrderTable";
// import { OrderFilters } from "@/components/OrderFilters";
// import { OrderTable } from "@/components/OrderTable";

const OrderPage = () => {
  const [orderType, setOrderType] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilter = () => {
    // Filter logic would go here
    console.log("Filtering orders with:", { orderType, startDate, endDate });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Management</h1>
          <p className="text-muted-foreground">Manage and track all your orders</p>
        </div>

        <OrderFilters
          orderType={orderType}
          setOrderType={setOrderType}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onFilter={handleFilter}
        />

        <OrderTable
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default OrderPage;
