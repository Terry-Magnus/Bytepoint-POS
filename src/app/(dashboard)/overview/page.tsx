// app/dashboard/page.tsx
"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholder_products } from "@/lib/data";
import Image from "next/image";

const fetchOrders = async () => {
  return placeholder_products;
};

export default function DashboardPage() {
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalSales =
    orders && orders?.length > 0
      ? orders.reduce((prev, current) => prev + current.price, 0)
      : 0;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">${totalSales.toFixed(2)}</p>
        </CardContent>

        <div>
          <Image
            src="/pancake.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </Card>
      {/* Add Chart.js for sales trends */}
    </div>
  );
}
