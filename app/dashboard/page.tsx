import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { UserButton } from "@clerk/nextjs";
import MainLayout from "../components/MainLayout";

export default async function page() {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <div className=" relative w-full">
      {/* <div className=""> */}
        {/* <Sidebar /> */}
        <MainLayout/>
      </div>
  );
}
