"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="mt-16 h-[200px] w-full bg-purple-900 flex justify-between xl:px-60 lg:px-60 md:px-24 sm:px-10 xs:px-10 items-center ">
      <div
        className="text-white cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img className="w-10 h-10 " src="/images/logo.svg" alt="" />
      </div>
      <div className="flex gap-12 items-center">
        <div className="w-4 h-32 bg-white"></div>
        <div className="flex gap-8 text-white">
          <button
            onClick={() => router.push("/")}
            className="hover:text-gray-300"
          >
            Home
          </button>

          <button
            className="hover:text-gray-300"
            onClick={() => router.push("/about")}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
