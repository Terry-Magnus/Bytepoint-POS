// components/ui/TextInput.tsx
"use client";

import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        {...props}
      />
    </div>
  );
}
