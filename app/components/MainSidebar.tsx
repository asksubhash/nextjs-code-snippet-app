import React from "react";
import Logo from "./Logo";
import { useGlobalContext } from "@/ContextApi";
import Languages from "./dashboard/Languages";
import { SiCplusplus, SiJavascript, SiPython } from "react-icons/si";

export default function MainSidebar() {
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
      <aside
        id="logo-sidebar"
        className={`
          fixed top-0 left-0 z-40 w-64 h-screen
          transition-transform duration-300 ease-in-out
           ${openSideBar ? "shadow-lg" : "max-md:hidden"}
           `}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 py-4 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-300  scrollbar-thin
    ${darkMode[1].isSelected ? "bg-slate-800" : "bg-white"}
    `}
        >
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <Logo />
          </a>
          <div className="mt-20 text-sm flex-grow">
            <div className="font-bold text-slate-400">Quick Links</div>
            <ul className="text-slate-400 mt-4 flex flex-col gap-2">
              {sideBarMenu.map((menu, index) => (
                <li
                  key={index}
                  onClick={() => ClickedMenu(index)}
                  className={`flex cursor-pointer select-none gap-2 items-center ${
                    menu.isSelected ? "bg-main text-white" : "text-slate-400"
                  } p-[7px] px-2 rounded-md w-full`}
                >
                  {menu.icon}
                  {menu.name}
                </li>
              ))}
            </ul>
            <div className="mt-5 text-sm ">
              <div className=" font-bold text-slate-400">Languages</div>
              <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className=" flex gap-1 items-center">
                    <SiJavascript size={15} /> Javascript
                  </div>
                  <span className=" font-bold">3</span>
                </div>

                <div className="flex justify-between">
                  <div className=" flex gap-1 items-center">
                    <SiPython size={15} /> Python
                  </div>
                  <span className=" font-bold">3</span>
                </div>

                <div className="flex justify-between">
                  <div className=" flex gap-1 items-center">
                    <SiCplusplus size={15} /> C++
                  </div>
                  <span className=" font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
