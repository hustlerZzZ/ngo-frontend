import React from "react";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "@/components/auth-provider";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="h-screen flex space-x-4">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
        <Toaster />
      </div>
    </AuthProvider>
  );
}
