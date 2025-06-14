import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/context/AuthContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex font-poppins">
        <aside>
          <Sidebar />
        </aside>
        <main className="flex-1 min-h-screen p-6 overflow-y-auto bg-gray-200 text-black">
          <Header />
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
