import { BookCheck, CircleCheckBig, Timer } from "lucide-react";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "ready":
      return "bg-green-500";
    case "in-progress":
      return "bg-orange-500";
    case "completed":
      return "bg-teal-600";
    default:
      return "bg-gray-500";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "ready":
      return <CircleCheckBig className="w-4 h-4" />;
    case "in-progress":
      return <Timer className="w-4 h-4" />;
    case "completed":
      return <BookCheck className="w-4 h-4" />;
    default:
      return null;
  }
};
