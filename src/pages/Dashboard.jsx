// src/pages/Dashboard.jsx

import React from "react";
import {
  Package,
  ShoppingBag,
  IndianRupee,
  Users,
  MessageCircle,
  ArrowUpRight,
  Plus,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Boxes,
  Truck,
} from "lucide-react";

const Dashboard = () => {
  // ==========================================================================
  //                            SELLER DASHBOARD DATA
  // ==========================================================================

  const sellerStatus = {
    storeStatus: "Active",
    lastUpdated: "Today, 4:15 PM",
  };

  const overviewMetrics = [
    {
      name: "Active Products",
      value: "24",
      icon: Package,
      change: "+4 this month",
      color: "text-blue-600 bg-blue-50",
    },
    {
      name: "Orders Received",
      value: "18",
      icon: ShoppingBag,
      change: "+12% this month",
      color: "text-violet-600 bg-violet-50",
    },
    {
      name: "Total Sales",
      value: "₹2.48L",
      icon: IndianRupee,
      change: "+18.5% this month",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      name: "Buyer Enquiries",
      value: "32",
      icon: Users,
      change: "8 require response",
      color: "text-amber-600 bg-amber-50",
    },
  ];

  const pendingOrders = [
    {
      id: "ORD-1024",
      buyer: "Green Valley Foods",
      product: "Premium Turmeric Powder",
      quantity: "500 Kg",
      amount: "₹82,500",
      status: "Pending Confirmation",
    },
    {
      id: "ORD-1023",
      buyer: "Sri Lakshmi Traders",
      product: "Organic Coconut",
      quantity: "1,000 Units",
      amount: "₹65,000",
      status: "Processing",
    },
    {
      id: "ORD-1022",
      buyer: "Fresh Basket Retail",
      product: "Cold Pressed Groundnut Oil",
      quantity: "250 Litres",
      amount: "₹48,750",
      status: "Ready to Ship",
    },
  ];

  const productPerformance = [
    {
      id: 1,
      name: "Premium Turmeric Powder",
      category: "Spices",
      orders: 12,
      enquiries: 18,
      sales: "₹82,500",
    },
    {
      id: 2,
      name: "Cold Pressed Groundnut Oil",
      category: "Edible Oils",
      orders: 8,
      enquiries: 11,
      sales: "₹64,750",
    },
    {
      id: 3,
      name: "Organic Coconut",
      category: "Fresh Produce",
      orders: 6,
      enquiries: 9,
      sales: "₹45,000",
    },
  ];

  const buyerEnquiries = [
    {
      id: 1,
      buyer: "ABC Foods Pvt. Ltd.",
      product: "Turmeric Powder",
      requirement: "2,000 Kg",
      time: "25 min ago",
    },
    {
      id: 2,
      buyer: "South India Organics",
      product: "Groundnut Oil",
      requirement: "500 Litres",
      time: "1 hour ago",
    },
    {
      id: 3,
      buyer: "Green Mart",
      product: "Organic Coconut",
      requirement: "5,000 Units",
      time: "3 hours ago",
    },
  ];

  // ==========================================================================
  //                                DASHBOARD
  // ==========================================================================

  return (
    <div className="space-y-8 max-w-7xl mx-auto">

      {/* =====================================================================
                                  HEADER
          ===================================================================== */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-200">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, John
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Here's an overview of your Hivictus seller account and business
            performance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl text-gray-600">
            <Clock size={14} />

            <span>
              Updated:{" "}
              <strong className="font-semibold">
                {sellerStatus.lastUpdated}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 px-3 py-2 rounded-xl text-emerald-700 font-medium">
            <CheckCircle2
              size={14}
              className="text-emerald-500"
            />

            <span>
              Store Status:{" "}
              <strong>{sellerStatus.storeStatus}</strong>
            </span>
          </div>

        </div>
      </div>


      {/* =====================================================================
                              QUICK ACTIONS
          ===================================================================== */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <button className="flex items-center gap-3 p-4 bg-violet-600 text-white rounded-2xl shadow-sm hover:bg-violet-700 transition-all">

          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
            <Plus size={20} />
          </div>

          <div className="text-left">
            <p className="text-sm font-bold">
              Add Product
            </p>

            <p className="text-xs text-violet-100">
              List a new product
            </p>
          </div>

        </button>


        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-violet-300 hover:bg-violet-50/30 transition-all">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Package size={20} />
          </div>

          <div className="text-left">
            <p className="text-sm font-bold text-gray-900">
              Products
            </p>

            <p className="text-xs text-gray-500">
              Manage inventory
            </p>
          </div>

        </button>


        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-violet-300 hover:bg-violet-50/30 transition-all">

          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShoppingBag size={20} />
          </div>

          <div className="text-left">
            <p className="text-sm font-bold text-gray-900">
              Orders
            </p>

            <p className="text-xs text-gray-500">
              Manage your orders
            </p>
          </div>

        </button>


        <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:border-violet-300 hover:bg-violet-50/30 transition-all">

          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <MessageCircle size={20} />
          </div>

          <div className="text-left">
            <p className="text-sm font-bold text-gray-900">
              Enquiries
            </p>

            <p className="text-xs text-gray-500">
              Respond to buyers
            </p>
          </div>

        </button>

      </div>


      {/* =====================================================================
                              OVERVIEW METRICS
          ===================================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {overviewMetrics.map((metric, idx) => {

          const Icon = metric.icon;

          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
            >

              <div className="flex items-start justify-between">

                <span className="text-sm font-medium text-gray-500">
                  {metric.name}
                </span>

                <div className={`p-2 rounded-xl ${metric.color}`}>
                  <Icon size={20} />
                </div>

              </div>

              <div className="mt-4">

                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {metric.value}
                </h3>

                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <TrendingUp
                    size={12}
                    className="text-emerald-500"
                  />

                  <span>{metric.change}</span>
                </p>

              </div>

            </div>
          );
        })}

      </div>


      {/* =====================================================================
                            ORDERS + ENQUIRIES
          ===================================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ===================================================================
                                  RECENT ORDERS
            =================================================================== */}

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm lg:col-span-2">

          <div className="flex items-center justify-between pb-4 border-b border-gray-100">

            <div>
              <h2 className="font-bold text-gray-900">
                Recent Orders
              </h2>

              <p className="text-xs text-gray-500 mt-0.5">
                Orders requiring your attention.
              </p>
            </div>

            <button className="text-xs text-violet-600 font-semibold hover:underline flex items-center gap-0.5">
              View All
              <ArrowUpRight size={14} />
            </button>

          </div>


          <div className="divide-y divide-gray-100">

            {pendingOrders.map((order) => (

              <div
                key={order.id}
                className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >

                <div className="space-y-1">

                  <div className="flex items-center gap-2">

                    <span className="text-xs font-bold text-violet-600">
                      {order.id}
                    </span>

                    <span className="text-sm font-semibold text-gray-900">
                      {order.buyer}
                    </span>

                  </div>

                  <p className="text-xs text-gray-500">
                    {order.product}
                  </p>

                  <p className="text-xs text-gray-400">
                    Quantity: {order.quantity}
                  </p>

                </div>


                <div className="flex items-center gap-4 justify-between md:justify-end">

                  <div className="text-right">

                    <p className="text-sm font-bold text-gray-900">
                      {order.amount}
                    </p>

                    <span
                      className={`inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-lg font-semibold ${
                        order.status === "Pending Confirmation"
                          ? "bg-amber-50 text-amber-700"
                          : order.status === "Processing"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >

                      {order.status === "Pending Confirmation" ? (
                        <AlertCircle size={11} />
                      ) : order.status === "Processing" ? (
                        <Clock size={11} />
                      ) : (
                        <Truck size={11} />
                      )}

                      {order.status}

                    </span>

                  </div>

                  <button className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">
                    View
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ===================================================================
                              BUYER ENQUIRIES
            =================================================================== */}

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

          <div className="flex items-center justify-between pb-4 border-b border-gray-100">

            <div>
              <h2 className="font-bold text-gray-900">
                Buyer Enquiries
              </h2>

              <p className="text-xs text-gray-500 mt-0.5">
                Recent buyer requirements.
              </p>
            </div>

            <MessageCircle
              size={18}
              className="text-violet-600"
            />

          </div>


          <div className="space-y-4 mt-4">

            {buyerEnquiries.map((enquiry) => (

              <div
                key={enquiry.id}
                className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl"
              >

                <div className="flex items-start justify-between gap-2">

                  <div>

                    <p className="text-sm font-semibold text-gray-900">
                      {enquiry.buyer}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {enquiry.product}
                    </p>

                  </div>

                  <span className="text-[10px] text-gray-400 whitespace-nowrap">
                    {enquiry.time}
                  </span>

                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">

                  <span className="text-xs text-gray-500">
                    Requirement:
                    <strong className="text-gray-700 ml-1">
                      {enquiry.requirement}
                    </strong>
                  </span>

                  <button className="text-xs text-violet-600 font-semibold hover:underline">
                    Respond
                  </button>

                </div>

              </div>

            ))}

          </div>

          <button className="w-full mt-4 py-2.5 rounded-xl bg-violet-50 text-violet-600 text-xs font-semibold hover:bg-violet-100">
            View All Enquiries
          </button>

        </div>

      </div>


      {/* =====================================================================
                          PRODUCT PERFORMANCE
          ===================================================================== */}

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

        <div className="flex items-center justify-between pb-4 border-b border-gray-100">

          <div>
            <h2 className="font-bold text-gray-900">
              Product Performance
            </h2>

            <p className="text-xs text-gray-500 mt-0.5">
              See which products are generating the most business.
            </p>
          </div>

          <button className="text-xs text-violet-600 font-semibold hover:underline flex items-center gap-1">
            Manage Products
            <ArrowUpRight size={14} />
          </button>

        </div>


        <div className="overflow-x-auto mt-4">

          <table className="w-full text-sm">

            <thead>
              <tr className="text-left text-xs text-gray-400 border-b border-gray-100">

                <th className="pb-3 font-medium">
                  Product
                </th>

                <th className="pb-3 font-medium">
                  Category
                </th>

                <th className="pb-3 font-medium">
                  Orders
                </th>

                <th className="pb-3 font-medium">
                  Enquiries
                </th>

                <th className="pb-3 font-medium text-right">
                  Sales
                </th>

                <th className="pb-3 font-medium text-right">
                  Action
                </th>

              </tr>
            </thead>


            <tbody className="divide-y divide-gray-100">

              {productPerformance.map((product) => (

                <tr
                  key={product.id}
                  className="hover:bg-gray-50/70 transition-colors"
                >

                  <td className="py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
                        <Package size={17} />
                      </div>

                      <span className="font-semibold text-gray-900">
                        {product.name}
                      </span>

                    </div>

                  </td>

                  <td className="py-4 text-gray-500">
                    {product.category}
                  </td>

                  <td className="py-4 text-gray-700 font-medium">
                    {product.orders}
                  </td>

                  <td className="py-4 text-gray-700 font-medium">
                    {product.enquiries}
                  </td>

                  <td className="py-4 text-right font-bold text-gray-900">
                    {product.sales}
                  </td>

                  <td className="py-4 text-right">

                    <button className="inline-flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50">

                      <Eye size={13} />

                      View

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================================================
                              INVENTORY ALERT
          ===================================================================== */}

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Boxes size={24} />
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Inventory Attention Required
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                4 products are running low on available stock. Update your
                inventory to avoid missing buyer orders.
              </p>

            </div>

          </div>

          <button className="px-4 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-semibold hover:bg-gray-800 whitespace-nowrap">
            Update Inventory
          </button>

        </div>

      </div>


      {/* =====================================================================
                              FOOTER NOTE
          ===================================================================== */}

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pb-4">

        <CheckCircle2 size={14} />

        <span>
          Your Hivictus seller account is active and ready to receive orders.
        </span>

      </div>

    </div>
  );
};

export default Dashboard;
