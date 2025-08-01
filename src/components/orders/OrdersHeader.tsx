import { Button } from "@/components/ui/button";
import { Plus, Download, RefreshCw } from "lucide-react";

interface OrdersHeaderProps {
  totalOrders: number;
  onRefresh: () => void;
  onExport: () => void;
  onNewOrder: () => void;
}

export function OrdersHeader({ totalOrders, onRefresh, onExport, onNewOrder }: OrdersHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          All Orders
        </h1>
        <p className="text-muted-foreground mt-1">
          {totalOrders} orders found
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          className="hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        
        <Button
          variant="gradient"
          size="sm"
          onClick={onNewOrder}
          className="shadow-lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Order
        </Button>
      </div>
    </div>
  );
}