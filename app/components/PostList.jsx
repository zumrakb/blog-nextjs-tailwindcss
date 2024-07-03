"use client";
import React from "react";
import mockBlogData from "../data/mockBlogData.json";
import { useRouter } from "next/navigation";

const PostList = () => {
  const router = useRouter();
  return (
    <div className="xl:px-60 lg:px-24 md:px-auto sm:px-40 xs:px-0 ">
      <h2 className="my-7 font-bold text-2xl text-left xl:text-left  lg:text-center md:text-center sm:text-center xs:text-center w-full ">
        All Blog Posts
      </h2>
      <div
        className="flex flex-wrap w-full xl:gap-5 lg:gap-5 md:gap-5 sm:gap-5 xs:gap-5
      
      xl:flex-row lg:flex-row sm:flex-col xl:flex md:flex-row xs:flex-col xxs:flex-col
      justify-center items-center
      "
      >
        {mockBlogData.map((post) => (
          <div
            key={post.id}
            className="xl:w-[330px] lg:w-[250px] md:w-[450px] sm:w-[350px] xs:w-[300px] xl:h-[500px] lg:h-[550px] md:h-[500px] sm:h-[480px] xs:h-[480px] bg-white rounded-lg shadow-md cursor-pointer"
          >
            <img
              className="w-full h-[40%] object-cover rounded-t-lg"
              src={post.image}
              alt={post.title}
            />
            <div className="p-4 flex flex-col justify-between h-[60%]">
              <div>
                <div className="text-sm text-purple-600 font-semibold">
                  {post.author} • {post.date}
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
              </div>
              <div>
                <div className="mt-4 flex justify-between items-center">
                  <button
                    className="text-purple-600 bg-purple-200 py-2 px-3
                     rounded-lg bg-opacity-75 hover:bg-opacity-50
                  text-sm
                    "
                    onClick={() => router.push(`/blog/${post.id}`)}
                  >
                    See more
                  </button>
                  <button
                    className="text-blue-500 py-2 px-3 bg-blue-100 bg-opacity-75 w-fit rounded-lg hover:bg-opacity-50 
                  text-sm"
                  >
                    {post.topic}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
