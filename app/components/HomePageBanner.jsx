"use client";
import React from "react";
import mockBlogData from "../data/mockBlogData.json";
import { useRouter } from "next/navigation";
const HomePageBanner = () => {
  const router = useRouter();
  return (
    <div
      className="relative  h-[600px] flex items-center pt-16  bg-cover bg-center"
      style={{ backgroundImage: `url('/images/big-banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex xl:flex  justify-between  w-full xl:relative lg:relative md:relative">
        <div
          className="bg-cover h-[250px] w-[450px]  absolute  top-[70px] z-40 xl:left-52 lg:left-12 md:left-0 sm:left-0 xs:left-0  xs:hidden sm:hidden md:hidden xl:inline lg:inline rounded-lg"
          style={{ backgroundImage: `url('/images/big-banner.jpg')` }}
        ></div>
        <div className="bg-white bg-opacity-5 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-12 xs:mt-12 xl:h-[380px] lg:h-[350px] md:h-[380px] sm:h-[400px] xs:h-[400px] xl:w-[970px] lg:w-[800px] md:w-fit py-16 px-12 backdrop-blur-md  flex  rounded-xl ml-[22%] sm:ml-0 xs:ml-0 md:ml-24 lg:ml-[20%] xl:ml-[22%] ">
          <div className="flex flex-col justify-center gap-5 xl:w-[550px] lg:w-[550px] md:w-[600px] sm:w-[600px] xs:w-[450px] ml-[40%] xl:ml-[40%] lg:ml-[40%] md:ml-[0%] sm:ml-[0%] xs:ml-[0%]">
            <div className="font-bold text-white text-xl items-center">
              {mockBlogData[0].title}
            </div>
            <div className="text-pink-300 ">{mockBlogData[0].author}</div>
            <div className="text-white text-md">
              {mockBlogData[0].description}
              {mockBlogData[0].description}
              {mockBlogData[0].description}
            </div>
            <button
              onClick={() => router.push(`/blog/${mockBlogData[0].id}`)}
              className="text-white py-2 px-5 bg-white bg-opacity-50 w-fit rounded-lg
            hover:bg-opacity-25"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
