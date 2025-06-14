import { Store } from "lucide-react";

export default function Logo() {
  return (
    <div className="border-b border-gray-100 mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-yellow-500 rounded-md p-1 flex items-center justify-center">
          <Store className="w-6 h-6 text-teal-700" />
        </div>
        <span className="text-2xl font-semibold text-teal-800">bytepoint</span>
      </div>
    </div>
  );
}
