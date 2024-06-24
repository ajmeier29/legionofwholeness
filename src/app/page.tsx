import BlogPostsDisplay from "@/components/BlogPostsDisplay";
import ButtonBar from "@/components/ButtonBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative justify-center items-center mx-2 mt-2 drop-shadow-1xl">
        <div className="relative bg-hero-image bg-cover bg-bottom h-[600px] w-full rounded-lg overflow-hidden">
          <Hero />
        </div>
        <div>
          <ButtonBar />
        </div>
        <div>
          <BlogPostsDisplay />
        </div>
      </div>
    </>
  );
}
