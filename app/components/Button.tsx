import { auth } from '@clerk/nextjs/server';
import Link from "next/link"; // Make sure to import Link
import React from "react";

export default function Button() {
  const { userId } = auth();
  return (
    <div className=" max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
         <button className="max-sm:w-full bg-main p-[8px] px-6 text-sm text-white rounded-md">
          Access To The App
         </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
          <Link href="/sign-in"
            className={`max-sm:w-full bg-main p-[8px] px-6 text-sm text-white rounded-md`}
          >
            Sign In
          </Link>

         <Link href="/sign-up"
            className={`text-sm border border-main text-main hover:bg-main hover:text-white p-[8px] px-6 rounded-md`}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
