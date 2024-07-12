import { BlogPostsDisplay } from "@/components/BlogPostsDisplay";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { PreloadStaticImage } from "@/components/PreloadImage";
import { BlogPostData, GetAllBlogPostData } from "@/data/data";
import heroPic from '../../../public/images/shadow-filled-valley-in-the-mountains.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Posts | Legion of Wholeness',
};


export default async function Page() {
    var blogs: BlogPostData[] = [];
    await GetAllBlogPostData()
        .then((blogData) => {
            blogs = blogData;
        })
        .catch((error) => {
            //console.log(`Error: ${error}`)
        });
    console.log(`All blog post data: ${JSON.stringify(blogs)}`)
    return (
        <>
            <Header />
            <div className="relative justify-center items-center mx-2 mt-2 lg:mx-40 drop-shadow-1xl">
                <PreloadStaticImage imgSrc={heroPic} styleProps={'absolute object-cover overflow-hidden rounded-lg h-[400px] w-full z-0'}></PreloadStaticImage>
                <div className="absolute z-50">
                    <Hero subscribe={false} />
                </div>

                {/* <div className="relative bg-hero-image-mobile bg-cover bg-bottom h-[400px] w-full rounded-lg overflow-hidden slideUpFromBottomFast">
                    <Hero subscribe={false} />
                </div> */}
                <div>
                    <BlogPostsDisplay blogPosts={blogs} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}