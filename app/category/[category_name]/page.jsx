"use client";
import React from "react";
import mockBlogData from "../../data/mockBlogData.json";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  const category_name = params.category_name.toUpperCase();
  const filteredPosts = mockBlogData.filter(
    (post) => post.topic.toLowerCase() === category_name.toLowerCase()
  );

  return (
    <div>
      <div
        className="relative h-[300px] flex items-center pt-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/categorypicture.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
        <div
          className="z-10 flex flex-col gap-3 mt-16  xl:ml-60 lg:ml-60 md:ml-44 sm:ml-12 xs:ml-8 
        xl:w-[45%]  lg:w-[45%] md:w-[60%]
        sm:w-full xs:w-full
        xl:mx-0
        lg:mx-0 md:mx-0 sm:mx-12 xs:mx-8
        "
        >
          <h1 className="font-bold text-white text-2xl">{category_name}</h1>
          <p className="text-slate-50 text-sm">
            asdsf asfsfa sfs sdfkljsdl sdfksd sdfd sdfsdf sdfdfs sdfsdfdfs
            sdffsd asdsf asfsfa sfs sdfkljsdl sdfksd sdfd sdfsdf sdfdfs
            sdfsdfdfs sdffsd asdsf asfsfa sfs sdfkljsdl sdfksd sdfd sdfsdf
            sdfdfs sdfsdfdfs sdffsd asdsf asfsfa sfs sdfkljsdl sdfksd sdfd
            sdfsdf sdfdfs sdfsdfdfs sdffsd
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-16">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="flex mx-auto w-[80%] bg-white rounded-lg overflow-hidden"
          >
            <img
              className="w-1/3 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-2">
                  {post.author} • {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="text-sm text-green-700 bg-green-100 py-2 px-5 rounded-full">
                  {post.topic}
                </button>
                <button
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className="text-sm text-purple-700 bg-purple-100 py-2 px-5 rounded-full"
                >
                  see more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
