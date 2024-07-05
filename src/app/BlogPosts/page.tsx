import { BlogPostsDisplay } from "@/components/BlogPostsDisplay";
import ButtonBar from "@/components/ButtonBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rune from "@/components/Rune";
import { BlogPostData, GetAllBlogPostData } from "@/data/data";


export default async function Page() {
    var blogs: BlogPostData[] = [];
    await GetAllBlogPostData()
        .then((blogData) => {
            blogs = blogData;
        })
        .catch((error) => {
            //console.log(`Error: ${error}`)
        });

    return (
        <>
            <div className="relative z-50">
                <div className='absolute top-6 left-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    <Rune />
                </div>
                <div className='absolute top-4 right-2'>
                    <Navbar />
                </div>
            </div>
            <div className="relative justify-center items-center mx-2 mt-2 drop-shadow-1xl">
                <div className="relative bg-hero-image-mobile bg-cover bg-bottom h-[400px] w-full rounded-lg overflow-hidden">
                    <Hero subscribe={false} />
                </div>
                <div>
                    <BlogPostsDisplay blogPosts={blogs} />
                </div>
            </div>
        </>
    )
}