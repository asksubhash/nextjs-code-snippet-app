"use client";
import React from "react";
import HeaderLayout from "./HeaderLayout";
import MainSidebar from "./MainSidebar";
import { useGlobalContext } from "@/ContextApi";
import TopBar from "./dashboard/TopBar";
import ContentArea from "./dashboard/ContentArea";

export default function MainLayout() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useGlobalContext();

  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useGlobalContext();

  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  function ClickedMenu(index: number) {
    const updateSideBarMenu = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });
    setSideBarMenu(updateSideBarMenu);
  }

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
