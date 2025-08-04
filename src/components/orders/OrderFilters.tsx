import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface OrderFiltersProps {
  orderType: string;
  setOrderType: (value: string) => void;
  startDate: Date | undefined;
  setStartDate: (date: Date | undefined) => void;
  endDate: Date | undefined;
  setEndDate: (date: Date | undefined) => void;
  onFilter: () => void;
}

export function OrderFilters({
  orderType,
  setOrderType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onFilter,
}: OrderFiltersProps) {
  return (
    <div className="filter-card">
      <h2 className="filter-title">Filter Orders</h2>

      <div className="filter-grid">
        {/* Order Type */}
        <div className="filter-field">
          <label className="filter-label">Order Type</label>
          <Select value={orderType} onValueChange={setOrderType}>
            <SelectTrigger className="bg-background border-border w-full">
              <SelectValue placeholder="Select your option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="wholesale">Wholesale</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Start Date */}
        <div className="filter-field">
          <label className="filter-label">Start Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "bg-background border-border w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                className="pointer-events-auto p-3"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="filter-field">
          <label className="filter-label">End Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "bg-background border-border w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "dd/MM/yyyy") : "dd/mm/yyyy"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                className="pointer-events-auto p-3"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Filter Button */}
        <div className="filter-field">
          <label className="filter-label-hidden">Filter</label>
          <Button
            onClick={onFilter}
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
          >
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
