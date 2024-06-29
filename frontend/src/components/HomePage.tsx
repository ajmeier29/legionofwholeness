import { BlogPostsDisplay } from "./BlogPostsDisplay";
import ButtonBar from "./ButtonBar";
import Hero from "./Hero";
import { BlogPostData, getPosts } from '../../data/data';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'


export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {

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
                    <BlogPostsDisplay blogPosts={blogPosts} />
                </div>
            </div>
        </>
    )
}