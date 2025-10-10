import React from "react";
import {
  Package,
  MapPin,
  User,
  Phone,
  Mail,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  Store,
  Weight,
  Calendar,
} from "lucide-react";

interface OrderItem {
  name: string;
  sku: string;
  weight: string;
  boxes: string;
  price: number;
  quantity: number;
  subtotal: number;
  shipping: string;
  store: string;
}

interface ShippingInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

interface Customer {
  name: string;
  email: string;
  phone: string;
  orderCount: number;
  hasAccount: boolean;
}

interface OrderDetails {
  orderNumber: string;
  item: OrderItem;
  discount: number;
  shippingFee: number;
  tax: number;
  total: number;
  paidAmount: number;
  paymentMethod: string;
  customerNote: string;
  privateNote: string;
  customer: Customer;
  shipping: ShippingInfo;
  store: string;
  shippingId: string;
  shippingStatus: string;
  shippingMethod: string;
  weight: string;
  lastUpdate: string;
  history: Array<{
    action: string;
    date: string;
  }>;
}

const OrderDetail: React.FC = () => {
  const orderData: OrderDetails = {
    orderNumber: "SF-10000006",
    item: {
      name: "Gorton's Beer Battered Fish Fillets",
      sku: "86-175-A1-A2",
      weight: "1KG",
      boxes: "3 Boxes",
      price: 1217.0,
      quantity: 1,
      subtotal: 1217.0,
      shipping: "Free delivery",
      store: "Stouffer",
    },
    discount: 0.0,
    shippingFee: 0.0,
    tax: 0.0,
    total: 1217.0,
    paidAmount: 1217.0,
    paymentMethod: "Stripe",
    customerNote:
      "Note about order, ex: time or shipping instruction. This note is added by customer at the checkout page, you should not change it.",
    privateNote:
      "Note for admin/manager about this order. This note is added by admin/manager, customer cannot see it.",
    customer: {
      name: "Katherine Nitzsche",
      email: "reichel.ashtyn@example.com",
      phone: "+13259162610",
      orderCount: 11,
      hasAccount: true,
    },
    shipping: {
      name: "Katherine Nitzsche",
      phone: "+15169994656",
      email: "reichel.ashtyn@example.com",
      address: "502 Viviane Shoals",
      city: "Margaritastad",
      state: "District of Columbia",
      country: "CM",
    },
    store: "Stouffer",
    shippingId: "#10000004",
    shippingStatus: "Delivered",
    shippingMethod: "Free delivery",
    weight: "548 g",
    lastUpdate: "2025-06-16 08:17:34",
    history: [
      { action: "Order confirmed by System", date: "2025-06-16 08:17:36" },
      {
        action: "Changed status of shipping to: Delivered. Updated by: System",
        date: "2025-06-16 08:17:34",
      },
      { action: "Created shipment for order", date: "2025-06-16 08:17:34" },
      {
        action: "Payment was confirmed (amount $1,217.00) by System",
        date: "2025-06-16 08:17:34",
      },
      { action: "Order was verified by System", date: "2025-06-02 20:17:34" },
      {
        action: "Order is created from the checkout page",
        date: "2025-06-02 20:17:34",
      },
    ],
  };

  const formatCurrency = (amount: number) => `Rs.${amount.toFixed(2)}`;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Order Information {orderData.orderNumber}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Order was confirmed
            </span>
            <span className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4 text-green-500" />
              Payment {formatCurrency(orderData.paidAmount)} was accepted
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Order Items */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h2 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                  <Package className="mr-2 h-5 w-5 text-[#216bc4]" />
                  Order Items
                </h2>

                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex flex-1 items-center">
                        <div className="">
                          <img
                            className="object-contain"
                            src="https://nest.botble.com/storage/products/10-150x150.jpg"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <h3 className="font-medium text-gray-900">
                            {orderData.item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            SKU:{" "}
                            <span className="font-mono">
                              {orderData.item.sku}
                            </span>
                          </p>
                          <p className="text-sm text-gray-600">
                            Weight: {orderData.item.weight}, Boxes:{" "}
                            {orderData.item.boxes}
                          </p>
                          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Truck className="mr-1 h-4 w-4" />
                              {orderData.item.shipping}
                            </span>
                            <span className="flex items-center">
                              <Store className="mr-1 h-4 w-4" />
                              {orderData.item.store}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {formatCurrency(orderData.item.price)} ×{" "}
                          {orderData.item.quantity}
                        </p>
                        <p className="text-lg font-bold text-[#216bc4]">
                          {formatCurrency(orderData.item.subtotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Quantity: {orderData.item.quantity}</span>
                      <span>
                        Sub amount: {formatCurrency(orderData.item.subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Discount:</span>
                      <span>{formatCurrency(orderData.discount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>
                        Shipping fee ({orderData.item.shipping}{" "}
                        {orderData.weight}):
                      </span>
                      <span>{formatCurrency(orderData.shippingFee)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax:</span>
                      <span>{formatCurrency(orderData.tax)}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold">
                      <span>Total amount:</span>
                      <span>{formatCurrency(orderData.total)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#216bc4]">
                      <span>Paid amount:</span>
                      <span>{formatCurrency(orderData.paidAmount)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Payment method:</span>
                      <span className="font-medium">
                        {orderData.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}

            {/* Order History */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <Clock className="mr-2 h-5 w-5 text-[#216bc4]" />
                Order History
              </h3>

              <div className="space-y-3">
                {orderData.history.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 border-b border-gray-100 pb-3 last:border-b-0"
                  >
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#216bc4]"></div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {event.action}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Shipping Info */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <Truck className="mr-2 h-5 w-5 text-[#216bc4]" />
                Delivery
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-gray-700">Shipping</h4>
                  <p className="font-mono text-sm text-gray-600">
                    {orderData.shippingId}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-gray-700">Status</h4>
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(orderData.shippingStatus)}`}
                  >
                    {orderData.shippingStatus}
                  </span>
                </div>

                <div>
                  <h4 className="mb-1 font-medium text-gray-700">
                    Shipping method
                  </h4>
                  <p className="text-sm text-gray-600">
                    {orderData.shippingMethod}
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-medium text-gray-700">Weight</h4>
                  <p className="flex items-center text-sm text-gray-600">
                    <Weight className="mr-1 h-4 w-4" />
                    {orderData.weight}
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-medium text-gray-700">
                    Last Update
                  </h4>
                  <p className="flex items-center text-sm text-gray-600">
                    <Calendar className="mr-1 h-4 w-4" />
                    {orderData.lastUpdate}
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <User className="mr-2 h-5 w-5 text-[#216bc4]" />
                Customer
              </h3>

              <div className="space-y-3">
                <img
                  className="w-[60px] rounded-[50px]"
                  src="https://nest.botble.com/storage/customers/4-150x150.jpg"
                  alt=""
                />
                <p className="text-sm text-gray-600">
                  {orderData.customer.orderCount} order(s)
                </p>
                <div>
                  <p className="font-medium text-gray-900">
                    {orderData.customer.name}
                  </p>
                  <div className="mt-2 flex flex-col items-start space-y-1">
                    <span className="flex items-center text-sm text-gray-600">
                      <Mail className="mr-2 h-4 w-4" />
                      {orderData.customer.email}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Phone className="mr-2 h-4 w-4" />
                      {orderData.customer.phone}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-green-600">
                    {orderData.customer.hasAccount
                      ? "Have an account already"
                      : "Guest user"}
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <MapPin className="mr-2 h-5 w-5 text-[#216bc4]" />
                Shipping Information
              </h3>

              <div className="space-y-3">
                <p className="font-medium text-gray-900">
                  {orderData.shipping.name}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {orderData.shipping.phone}
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {orderData.shipping.email}
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                    <div>
                      <p>{orderData.shipping.address}</p>
                      <p>{orderData.shipping.city}</p>
                      <p>{orderData.shipping.state}</p>
                      <p>{orderData.shipping.country}</p>
                    </div>
                  </div>
                </div>
                <button className="text-sm font-medium text-[#216bc4] hover:text-blue-800">
                  See on maps
                </button>
              </div>
            </div>

            {/* Store Info */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                <Store className="mr-2 h-5 w-5 text-[#216bc4]" />
                Store
              </h3>
              <p className="font-medium text-gray-900">{orderData.store}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
