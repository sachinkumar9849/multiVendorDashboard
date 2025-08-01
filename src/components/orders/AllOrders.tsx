"use client";
import { useState, useMemo } from "react";
import { OrdersHeader } from "@/components/orders/OrdersHeader";
import { OrdersFilter } from "@/components/orders/OrdersFilter";
import { OrdersTable, Order } from "@/components/orders/OrdersTable";
// import { useToast } from "@/hooks/use-toast";

// Mock data - in a real app, this would come from an API
const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "Alice Johnson",
    customerEmail: "alice@example.com",
    orderType: "online",
    status: "delivered",
    total: 299.99,
    date: new Date("2024-01-15"),
    items: 3,
  },
  {
    id: "ORD-002",
    customerName: "Bob Smith",
    customerEmail: "bob@example.com",
    orderType: "in-store",
    status: "processing",
    total: 149.50,
    date: new Date("2024-01-14"),
    items: 2,
  },
  {
    id: "ORD-003",
    customerName: "Carol Williams",
    customerEmail: "carol@example.com",
    orderType: "subscription",
    status: "shipped",
    total: 89.99,
    date: new Date("2024-01-13"),
    items: 1,
  },
  {
    id: "ORD-004",
    customerName: "David Brown",
    customerEmail: "david@example.com",
    orderType: "wholesale",
    status: "pending",
    total: 1299.99,
    date: new Date("2024-01-12"),
    items: 25,
  },
  {
    id: "ORD-005",
    customerName: "Eva Davis",
    customerEmail: "eva@example.com",
    orderType: "online",
    status: "cancelled",
    total: 199.99,
    date: new Date("2024-01-11"),
    items: 4,
  },
  {
    id: "ORD-006",
    customerName: "Frank Miller",
    customerEmail: "frank@example.com",
    orderType: "in-store",
    status: "delivered",
    total: 79.99,
    date: new Date("2024-01-10"),
    items: 1,
  },
];

export default function AllOrders() {
//   const { toast } = useToast();
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [orderType, setOrderType] = useState("all");
  const [customer, setCustomer] = useState("all");
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  // Filter the orders based on current filters
  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => {
      // Search filter
      if (searchTerm && !order.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Order type filter
      if (orderType !== "all" && order.orderType !== orderType) {
        return false;
      }

      // Customer type filter (simplified for demo)
      if (customer !== "all") {
        // In a real app, you'd have proper customer categorization
        return true;
      }

      // Date range filter
      if (dateFrom && order.date < dateFrom) {
        return false;
      }
      if (dateTo && order.date > dateTo) {
        return false;
      }

      return true;
    });
  }, [searchTerm, orderType, customer, dateFrom, dateTo]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setOrderType("all");
    setCustomer("all");
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  const handleRefresh = () => {
    toast({
      title: "Orders refreshed",
      description: "The orders list has been updated with the latest data.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export started",
      description: "Your orders data is being prepared for download.",
    });
  };

  const handleNewOrder = () => {
    toast({
      title: "New order",
      description: "Redirecting to create new order...",
    });
  };

  const handleViewDetails = (orderId: string) => {
    toast({
      title: "Order details",
      description: `Viewing details for order ${orderId}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 p-6">
      <div className="max-w-7xl mx-auto">
        <OrdersHeader
          totalOrders={filteredOrders.length}
          onRefresh={handleRefresh}
          onExport={handleExport}
          onNewOrder={handleNewOrder}
        />

        <OrdersFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          orderType={orderType}
          onOrderTypeChange={setOrderType}
          customer={customer}
          onCustomerChange={setCustomer}
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={setDateFrom}
          onDateToChange={setDateTo}
          onClearFilters={handleClearFilters}
        />

        <OrdersTable
          orders={filteredOrders}
          onViewDetails={handleViewDetails}
        />
      </div>
    </div>
  );
}

function toast(arg0: { title: string; description: string; }) {
    throw new Error("Function not implemented.");
}
