import { HomePage } from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import { BlogPostData } from "../../data/data";

export const Home: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
  return (
    <>
      <div className="relative z-50">
        <div className='absolute top-6 left-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          <img className='h-20 w-15' src="/images/sowilo_rune_2.png" />
        </div>
        <div className='absolute top-4 right-2'>
          <Navbar />
        </div>
      </div>
      <HomePage blogPosts={blogPosts} />
    </>
  );
}
