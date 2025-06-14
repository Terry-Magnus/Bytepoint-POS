"use client";

import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();

  // Split and filter pathname into segments
  const pathSegments = pathname.split("/").filter(Boolean); // remove empty strings

  // Generate breadcrumb label (capitalized)
  const breadcrumb = pathSegments.map((segment, index) => {
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    return (
      <span key={index} className="capitalize">
        {label}
        {index < pathSegments.length - 1 && (
          <span className="mx-1 text-gray-400">/</span>
        )}
      </span>
    );
  });

  return (
    <div className="flex justify-between items-center mb-10">
      <p className="text-lg font-medium">
        {pathname === "/overview"
          ? "Nice! We have a lot of orders🤩"
          : breadcrumb}
      </p>

      <span className="text-sm">{dayjs().format("dddd, DD MMMM YYYY")}</span>
    </div>
  );
}
