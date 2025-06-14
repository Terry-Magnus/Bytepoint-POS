"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TextInput from "@/components/ui/TextInput";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with real login logic
    console.log("Login", form);
    router.push("/overview");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white w-full py-2 rounded hover:bg-teal-700 transition"
        >
          Login
        </button>
      </form>
    </>
  );
}
