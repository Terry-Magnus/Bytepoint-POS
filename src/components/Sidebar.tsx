"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";
import {
  Calculator,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  SquareMenu,
  UserRound,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-white flex flex-col p-4">
      {/* Header */}
      <Logo />

      {/* Navigation Menu */}
      <div className="flex-1 py-6">
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const active = item.href === pathname;
            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                  active
                    ? "bg-yellow-400 text-teal-600 shadow-md font-semibold"
                    : "text-gray-600 hover:bg-yellow-200 hover:text-teal-400"
                }`}
              >
                <IconComponent />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <UserRound className="text-gray-600" />
          </div>
          <div>
            <div className="font-medium text-gray-800">Gladina Samantha</div>
            <div className="text-sm text-gray-500">Waiters</div>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200"
        >
          <LogOut />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

export const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/overview" },
  { icon: SquareMenu, label: "Menu", href: "/menu" },
  { icon: ShoppingBag, label: "Orders", href: "/orders" },
  { icon: Calculator, label: "Accounting", href: "/accounting" },
  { icon: Settings, label: "Settings", href: "/settings" },
];
