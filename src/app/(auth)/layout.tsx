import Logo from "@/components/Logo";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-yellow-500 flex items-center justify-center h-screen">
      <div
        className={`w-full max-w-md p-8 ${poppins.variable} rounded shadow-lg bg-white text-black`}
      >
        <Logo />
        {children}
      </div>
    </div>
  );
}
