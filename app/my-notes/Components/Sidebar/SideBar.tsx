"use Client";
import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { useGlobalContext } from "@/ContextApi";
import { SiJavascript, SiPython, SiCplusplus } from "react-icons/si";

export default function SideBar() {
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
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div
            className={`max-md:hidden pr-10 p-6 flex flex-col gap-2 h-screen pt-7  ${
              darkMode[1].isSelected ? "bg-slate-800" : "bg-white"
            }`}
          >
            {/* logo */}
            <div className=" flex gap-2 items-center ">
              <div className={`bg-main p-[6px] rounded-md`}>
                <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
              </div>
              <div className=" flex gap-1 text-[19px]">
                <span className={`font-bold text-main `}>Snippet</span>
                <span className="text-slate-600">Master</span>
              </div>
            </div>
            {/* links  */}
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
                    } p-[7px] px-2 rounded-md w-[80%]`}
                  >
                    {menu.icon}
                    {menu.name}
                  </li>
                ))}
              </ul>
              <div className=" font-bold text-slate-400 mt-9">Languages</div>
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
