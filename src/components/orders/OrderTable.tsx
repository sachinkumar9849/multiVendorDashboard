import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Eye, Edit, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  orderId: string;
  orderDate: string;
  customerInfo: {
    name: string;
    email: string;
  };
  totalAmount: number;
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderId: "ORD-2024-001",
    orderDate: "2024-01-15",
    customerInfo: { name: "John Doe", email: "john@example.com" },
    totalAmount: 250.00,
    orderStatus: "delivered"
  },
  {
    id: "2",
    orderId: "ORD-2024-002",
    orderDate: "2024-01-14",
    customerInfo: { name: "Jane Smith", email: "jane@example.com" },
    totalAmount: 180.50,
    orderStatus: "processing"
  },
  {
    id: "3",
    orderId: "ORD-2024-003",
    orderDate: "2024-01-13",
    customerInfo: { name: "Mike Johnson", email: "mike@example.com" },
    totalAmount: 320.75,
    orderStatus: "shipped"
  },
  {
    id: "4",
    orderId: "ORD-2024-004",
    orderDate: "2024-01-12",
    customerInfo: { name: "Sarah Wilson", email: "sarah@example.com" },
    totalAmount: 95.25,
    orderStatus: "pending"
  },
  {
    id: "5",
    orderId: "ORD-2024-005",
    orderDate: "2024-01-11",
    customerInfo: { name: "David Brown", email: "david@example.com" },
    totalAmount: 445.00,
    orderStatus: "cancelled"
  }
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'status-delivered';
    case 'processing':
      return 'status-processing';
    case 'shipped':
      return 'status-shipped';
    case 'pending':
      return 'status-pending';
    case 'cancelled':
      return 'status-cancelled';
    default:
      return 'status-pending';
  }
};

interface OrderTableProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function OrderTable({ searchTerm, setSearchTerm }: OrderTableProps) {
  const filteredOrders = mockOrders.filter(order =>
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerInfo.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-card">
      {/* Header */}
      <div className="table-header">
        <div className="table-header-content">
          <div className="table-title-section">
            <h2 className="table-title">Order List</h2>
            <p className="table-subtitle">
              {filteredOrders.length} {filteredOrders.length === 1 ? 'order' : 'orders'} found
            </p>
          </div>
          
          <div className="search-container">
            <Search className="search-icon" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold text-foreground">SL</TableHead>
              <TableHead className="font-semibold text-foreground">Order ID</TableHead>
              <TableHead className="font-semibold text-foreground">Order Date</TableHead>
              <TableHead className="font-semibold text-foreground">Customer Info</TableHead>
              <TableHead className="font-semibold text-foreground">Total Amount</TableHead>
              <TableHead className="font-semibold text-foreground">Order Status</TableHead>
              <TableHead className="font-semibold text-foreground text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order, index) => (
              <TableRow key={order.id} className="table-row-hover">
                <TableCell className="font-medium text-foreground">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-primary">
                  {order.orderId}
                </TableCell>
                <TableCell className="text-foreground">
                  {new Date(order.orderDate).toLocaleDateString('en-GB')}
                </TableCell>
                <TableCell>
                  <div className="customer-info">
                    <div className="customer-name">{order.customerInfo.name}</div>
                    <div className="customer-email">{order.customerInfo.email}</div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-foreground">
                  ${order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge className={cn("status-badge", getStatusVariant(order.orderStatus))}>
                    {order.orderStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="action-button">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="dropdown-item">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="dropdown-item">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Order
                      </DropdownMenuItem>
                      <DropdownMenuItem className="dropdown-item-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="empty-state">
          <p className="empty-state-text">No orders found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}