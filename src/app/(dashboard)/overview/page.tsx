"use client";
import ActivityCard from "@/components/ActivityCard";
import Flex from "@/components/ui/Flex";
import { orders } from "@/utils/constants";
import { getStatusColor, getStatusIcon } from "@/utils/helper-functions";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OverviewPage() {
  const [orderSearch, setOrderSearch] = useState("");
  const [paymentSearch, setPaymentSearch] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4 mb-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ActivityCard
            title="New Orders"
            value={16}
            subtitle="* Updated every new order"
            icon="📋"
            cardClassName="bg-teal-600 text-white"
            iconBgClassName="bg-white bg-opacity-20"
            valueClassName="text-white"
            subtitleClassName="text-white opacity-90"
          />

          <ActivityCard
            title="Total Orders"
            value={86}
            subtitle="+2.5% than usual"
            icon="📊"
            iconBgClassName="bg-gray-100"
            valueClassName="text-gray-800"
            subtitleClassName="text-green-600"
          />

          <ActivityCard
            title="Waiting List"
            value={9}
            subtitle="+4.2% than usual"
            icon="⏰"
            iconBgClassName="bg-gray-100"
            valueClassName="text-gray-800"
            subtitleClassName="text-red-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Order List */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Order List</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search a Order"
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
              />
            </div>
            <div className="space-y-3">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 ${getStatusColor(
                        order.status
                      )} text-white rounded-lg flex items-center justify-center font-semibold text-sm`}
                    >
                      {order.id}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {order.customer}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.items.length} Items
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`inline-flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${
                        order.status === "ready"
                          ? "bg-green-100 text-green-700"
                          : order.status === "in-progress"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {getStatusIcon(order.status)}
                      <span>
                        {order.status === "in-progress"
                          ? "In Progress"
                          : order.status === "ready"
                          ? "Ready"
                          : "Completed"}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {order.notes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Payment</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search a Order"
                value={paymentSearch}
                onChange={(e) => setPaymentSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
              />
            </div>
            <div className="space-y-3">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                      {order.table}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {order.customer}
                      </div>
                      <div className="text-sm text-gray-500">
                        Order {order.id}
                      </div>
                    </div>
                  </div>
                  <button className="bg-yellow-400  hover:bg-yellow-500 cursor-pointer px-2 py-1 rounded text-sm font-medium transition-colors">
                    Pay Now {">"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {/* Create New Order Button */}
        <button className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
          + CREATE NEW ORDER
        </button>

        {/* Popular dishes */}
        <div className="bg-white rounded-lg p-4">
          <Flex justify="between" align="center" className="mb-4">
            <h3 className="text-md font-semibold">Popular Dishes</h3>

            <Link
              className="text-teal-600 font-semibold underline text-sm"
              href="/popular-dishes"
            >
              View all
            </Link>
          </Flex>
          <div className="space-y-3">
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {order.table}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {order.customer}
                    </div>
                    <div className="text-sm text-gray-500">
                      Order {order.id}
                    </div>
                  </div>
                </div>
                <button className="bg-yellow-400  hover:bg-yellow-500 cursor-pointer px-2 py-1 rounded text-sm font-medium transition-colors">
                  Pay Now {">"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Out of stock */}
        <div className="bg-white rounded-lg p-4">
          <Flex justify="between" align="center" className="mb-4">
            <h3 className="text-md font-semibold">Out of stock</h3>

            <Link
              className="text-teal-600 font-semibold underline text-sm"
              href="/popular-dishes"
            >
              View all
            </Link>
          </Flex>

          <div className="space-y-3">
            {orders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                    {order.table}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {order.customer}
                    </div>
                    <div className="text-sm text-gray-500">
                      Order {order.id}
                    </div>
                  </div>
                </div>
                <button className="bg-yellow-400  hover:bg-yellow-500 cursor-pointer px-2 py-1 rounded text-sm font-medium transition-colors">
                  Pay Now {">"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
