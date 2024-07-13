"use client";
import React from "react";
import HeaderLayout from "./HeaderLayout";
import MainSidebar from "./MainSidebar";
import { useGlobalContext } from "@/ContextApi";
import TopBar from "./dashboard/TopBar";
import ContentArea from "./dashboard/ContentArea";

export default function MainLayout() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <>
      <MainSidebar />
      <main
      className={`${
        darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
      } p-4 sm:ml-64`}
      >
        <TopBar />
        <ContentArea/>
      </main>
    </>
  );
}
