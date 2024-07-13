"use client";
import React from "react";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

export default function HeaderUserDetail() {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  const loadingUserImage = (
    <span className="w-9 h-9 rounded-full mb-[5px] bg-slate-200"></span>
  );
  const loadingUserName = (
    <span className=" font-semibold  bg-stone-100 h-4  w-[100px]"></span>
  );

  const loadingUserEmail = (
    <span className=" text-slate-500 text-[11px] bg-stone-100 h-2  w-[130px]"></span>
  );
  return (
    <div className="flex gap-3 items-center">
      {!user ? (
        loadingUserImage
      ) : (
        <img
          src={imageUrl}
          alt={`${user?.firstName} ${user?.lastName}`}
          className="w-9 h-9 rounded-full mb-[5px]"
        />
      )}

      <div className={`max-md:hidden  flex flex-col text-sm ${!user ? "gap-1" : ""}`}>
        {!user ? (
          loadingUserName
        ) : (
          <span className="font-semibold">
            {user?.firstName} {user?.lastName}
          </span>
        )}

        {!user ? (
          loadingUserEmail
        ) : (
          <span className="text-slate-500 text-[11px]">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
        )}
      </div>
    </div>
    );
  
}
