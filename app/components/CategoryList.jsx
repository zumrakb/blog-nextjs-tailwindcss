"use client";

import { useRouter } from "next/navigation";
import React from "react";

const categories = [
  { name: "technology", image: "/images/categorypicture.jpg" },
  { name: "books", image: "/images/categorypicture.jpg" },
  { name: "sports", image: "/images/categorypicture.jpg" },
  { name: "travel", image: "/images/categorypicture.jpg" },
];

const CategoryList = () => {
  const router = useRouter();

  const handleCategoryClick = (categoryName) => {
    router.push(`/category/${categoryName}`);
  };

  return (
    <div className="flex flex-col  items-center  xl:px-60 lg:px-0 md:px-0 sm:px-0 xs:px-0">
      <h2 className="my-7 font-bold text-2xl xl:text-left  lg:text-center md:text-center sm:text-center xs:text-center w-full">
        Categories
      </h2>
      <div className="flex gap-7 xl:flex-row lg:flex-row sm:flex-col xl:flex md:flex -row xs:flex-col">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className="xl:w-60 lg:w-60 md:w-96 sm:w-96 xs:w-96 h-60 bg-cover bg-center rounded-md flex items-center justify-center text-slate-100 font-bold text-xl cursor-pointer hover:opacity-50"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
