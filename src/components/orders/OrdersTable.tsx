// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  orderType: "online" | "in-store" | "subscription" | "wholesale";
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  date: Date;
  items: number;
}

interface OrdersTableProps {
  orders: Order[];
  onViewDetails: (orderId: string) => void;
}

const statusColors = {
  pending: "bg-warning text-warning-foreground",
  processing: "bg-primary text-primary-foreground",
  shipped: "bg-accent text-accent-foreground",
  delivered: "bg-success text-success-foreground",
  cancelled: "bg-destructive text-destructive-foreground",
};

const typeColors = {
  online: "bg-primary/10 text-primary border-primary/20",
  "in-store": "bg-success/10 text-success border-success/20",
  subscription: "bg-accent/10 text-accent-foreground border-accent/20",
  wholesale: "bg-warning/10 text-warning-foreground border-warning/20",
};

export function OrdersTable({ orders, onViewDetails }: OrdersTableProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <Eye className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No orders found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border/50 backdrop-blur-sm bg-card/80 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-16 font-semibold">SL</TableHead>
            <TableHead className="font-semibold">Order ID</TableHead>
            <TableHead className="font-semibold">Order Date</TableHead>
            <TableHead className="font-semibold">Customer Info</TableHead>
            <TableHead className="font-semibold">Total Amount</TableHead>
            <TableHead className="font-semibold">Order Status</TableHead>
            <TableHead className="w-32 font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow 
              key={order.id} 
              className="hover:bg-accent/20 transition-colors duration-200 group"
            >
              <TableCell className="font-medium text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    #{order.id}
                  </span>
                  <Badge variant="outline" className={`${typeColors[order.orderType]} text-xs w-fit`}>
                    {order.orderType.charAt(0).toUpperCase() + order.orderType.slice(1)}
                  </Badge>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{format(order.date, "MMM dd, yyyy")}</span>
                  <span className="text-xs text-muted-foreground">{format(order.date, "HH:mm")}</span>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{order.customerName}</span>
                  <span className="text-sm text-muted-foreground">{order.customerEmail}</span>
                  <span className="text-xs text-muted-foreground">{order.items} items</span>
                </div>
              </TableCell>
              
              <TableCell>
                <span className="font-semibold text-lg">${order.total.toFixed(2)}</span>
              </TableCell>
              
              <TableCell>
                <Badge className={statusColors[order.status]}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </TableCell>
              
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewDetails(order.id)}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}