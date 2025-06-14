"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/ui/TextInput";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup", form);
    router.push("/dashboard");
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
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
        <button className="bg-teal-600 text-white w-full py-2 rounded mt-2 hover:bg-green-700 transition">
          Sign Up
        </button>
      </form>
    </>
  );
}
