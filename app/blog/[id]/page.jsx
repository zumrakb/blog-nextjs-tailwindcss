import React from "react";

import mockBlogData from "../../data/mockBlogData.json";

const Page = ({ params }) => {
  const post = mockBlogData.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div
        className="relative xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[400px] xs:h-[500px] flex items-center pt-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/categorypicture.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
        <div className="z-10 flex xl:gap-96 lg:gap-44 md:gap-20 sm:gap-12 xs:gap-12 xl:mx-56 lg:mx-36 md:mx-32 sm:mx-24 xs:mx-12 mt-16">
          <div className="flex flex-col gap-3 xl:w-[45%] lg:w-[60%] md:w-[60%] sm:w-[60%] xs:w-[60%]">
            <h1 className="font-bold text-white text-3xl">{post.title}</h1>
            <p className="text-slate-50 text-sm">{post.description}</p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <img
              src="/images/profile.png"
              alt="author"
              className="w-20 h-20 rounded-full"
            />
            <div className="text-white">
              <div className="font-bold">{post.author}</div>
              <div className="text-slate-100"> {post.author_job}</div>
            </div>
          </div>
          <div className="absolute right-32 bottom-10 text-pink-300">
            {post.date}
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-10 mt-16 xl:mx-48 lg:mx-48 md:mx-20 sm:mx-12 xs:mx-12">
        <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full">
          <p className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            These are just a handful of the questions creative teams might ask
            themselves ahead of a website redesign. In-house creative teams play
            such a crucial role in the design, planning, and execution of a
            modern website redesign project — so we chatted with Dani Balenson,
            an independent creative director who’s worked with brands like Oscar
            Health and Vox Media (and helped Webflow with our homepage refresh
            in 2021!), Michael Rossi, Senior UX/UI Designer at Hubilo, and
            Webflow’s Principal Brand Designer, Kyle Benson, on the
            complexities, must-dos, and processes they stick to when approaching
            a website redesign. The modern website is much different and more
            involved than web development was during the early ages of the
            internet.
            <img className="w-full h-auto" src="/images/furniture.jpg" alt="" />
            It’s often a — if not the — primary marketing asset for any company.
            “The web has changed so drastically in the last decade, it’s pushed
            everyone to come to the realization that rethinking how their
            website looks and functions is a necessity,” Michael explained.
            “I’ve worked on a few projects where a team thought redesigning
            their site meant they had to rebrand, but I was slowly able to help
            them understand that just because you need to redesign your website
            doesn’t mean you need to completely change every aspect of it.” Dani
            echoed this sentiment and sees a redesign as a type of site refresh,
            which means certain elements of your look, feel, or functionality
            can remain consistent. “[A website refresh] is a different lipstick,
            a different eyeliner, a different brow pencil — something you use to
            look fresher and more modern,” she explains. As a result, a redesign
            doesn’t need to be grounded in something as large as a rebrand. It
            simply needs to address a shift in your business or target audience.
            Dani added that design is a “service of communication” — one that
            allows you to either speak to a new audience or fix something that’s
            not working the way you want it to. Once a team comes to this
            realization, it must take a step back to reorient goals, define
            desired outcomes, and begin identifying next steps.
          </p>
        </div>
        <div>
          <div className="rounded-lg">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold">Products you should have</h2>
            </div>
            <div>
              <div className="p-4 flex gap-4">
                <img
                  className="w-28 h-28 object-cover "
                  src="/images/laptop.jpg"
                  alt="Product Image"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      What kind of websites Get this soon
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm">
                      Amazon
                    </p>
                  </div>
                  <button className="w-fit mt-2 text-sm text-purple-700 bg-purple-100 py-2 px-5 rounded-full">
                    visit site
                  </button>
                </div>
              </div>
              <div className="p-4 flex gap-4">
                <img
                  className="w-28 h-28 object-cover "
                  src="/images/laptop.jpg"
                  alt="Product Image"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      What kind of websites Get this soon
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm">
                      Amazon
                    </p>
                  </div>
                  <button className="w-fit mt-2 text-sm text-purple-700 bg-purple-100 py-2 px-5 rounded-full">
                    visit site
                  </button>
                </div>
              </div>
              <div className="p-4 flex gap-4">
                <img
                  className="w-28 h-28 object-cover "
                  src="/images/laptop.jpg"
                  alt="Product Image"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      What kind of websites Get this soon
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm">
                      Amazon
                    </p>
                  </div>
                  <button className="w-fit mt-2 text-sm text-purple-700 bg-purple-100 py-2 px-5 rounded-full">
                    visit site
                  </button>
                </div>
              </div>
              <div className="p-4 flex gap-4">
                <img
                  className="w-28 h-28 object-cover "
                  src="/images/laptop.jpg"
                  alt="Product Image"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-900">
                      What kind of websites Get this soon
                    </h3>
                    <p className="text-purple-600 font-semibold text-sm">
                      Amazon
                    </p>
                  </div>
                  <button className="w-fit mt-2 text-sm text-purple-700 bg-purple-100 py-2 px-5 rounded-full">
                    visit site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
