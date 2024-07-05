import { BlogPostsDisplay } from "@/components/BlogPostsDisplay";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
            <Header />
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