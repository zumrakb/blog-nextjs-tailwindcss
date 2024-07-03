"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className="absolute top-0 left-0   w-full flex   justify-between  items-center   bg-transparent 
     py-16 xl:px-60 lg:px-60 md:px-44 sm:px-12 xs:px-12 z-50  "
    >
      <div
        className="text-white cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img className="w-10 h-10 " src="/images/logo.svg" alt="" />
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex xs:flex sm:flex-col xs:flex-col xl:gap-16 lg:gap-16 md:gap-16 sm:gap-5 xs:gap-5 text-white">
        <button
          className="hover:text-gray-500 flex gap-2 items-center justify-center"
          onClick={() => router.push("/")}
        >
          <IoHomeSharp size={24} />
        </button>
        <button
          onClick={() => router.push("/about")}
          className="hover:text-gray-500"
        >
          <CgProfile size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
