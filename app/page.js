import Image from "next/image";
import HomePageBanner from "./components/HomePageBanner";
import CategoryList from "./components/CategoryList";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto">
      <HomePageBanner />
      <CategoryList />
      <PostList />
    </div>
  );
}
