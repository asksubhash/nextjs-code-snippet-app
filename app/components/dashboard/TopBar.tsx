import React from "react";
import HeaderUserDetail from "./HeaderUserDetail";
import HeaderSearchBar from "./HeaderSearchBar";

export default function TopBar() {
  return (
      <div className="w-[80%] bg-slate-100 p-5">
        <div className=" rounded-lg flex justify-between items-center bg-white p-3">
          <HeaderUserDetail/>
          <HeaderSearchBar/>
        </div>
      </div>
  );
}
