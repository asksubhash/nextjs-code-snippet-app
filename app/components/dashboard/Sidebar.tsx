"use client";
import React from "react";
import Languages from "./Languages";
import { useGlobalContext } from "@/ContextApi";
import Logo from "../Logo";
import ContentArea from "./ContentArea";
export default function Sidebar() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
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
      <aside
        id="default-sidebar"
        className={`max-md:hidden pr-10 p-6 flex flex-col gap-2 h-screen pt-7  ${
          darkMode[1].isSelected ? "bg-slate-800" : "bg-white"
        }`}
        aria-label="Sidebar"
      >
        <div>
          <Logo />
          <div className="mt-20 text-sm ">
            <div className=" font-bold text-slate-400">Quick Links</div>
            <ul className="text-slate-400 mt-4 flex flex-col gap-2">
              {sideBarMenu.map((menu, index) => (
                <li
                  key={index}
                  onClick={() => ClickedMenu(index)}
                  className={`flex cursor-pointer select-none gap-2 items-center  ${
                    menu.isSelected
                      ? "bg-main text-white"
                      : "text-slate-400"
                  } p-[7px] px-2 rounded-md w-[100%]`}
                >
                  {menu.icon}
                  {menu.name}
                </li>
              ))}
            </ul>
            <Languages />
          </div>
        </div>
      </aside>
      <ContentArea />
    </>
  );
}
