import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Logo from "../components/Logo";

export default async function page() {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      </div>
  );
}
