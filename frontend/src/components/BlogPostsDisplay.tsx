'use client'
import Link from "next/link";
import { BlogPostData } from "@/data/data";


export const BlogPostsDisplay: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 justify-center mx-3">
                {blogPosts ? (
                    <>
                        <BlogPostTile blogPosts={blogPosts} />
                    </>
                ) : (
                    <>
                        <div className="font-2xl">Nothin!</div>
                    </>
                )}
            </div>
        </>
    )
}

const BlogPostTile = ({ blogPosts }: { blogPosts: BlogPostData[] }) => {
    return (
        <>

            {blogPosts ? (
                <>
                    {blogPosts.map(({ title, author, imageUrl, description, publish_date, ID }) => {
                        return (
                            <div key={title} className="rounded-lg p-3 w-full">
                                <div className="relative">
                                    <img className='object-cover w-full justify-center rounded-lg' src={imageUrl} />
                                    <img className='absolute blur-sm object-cover h-[25%] object-bottom w-full justify-center rounded-lg bottom-0 left-0 z-20' src={imageUrl} />
                                    <div className="absolute bottom-3 sm:bottom-9 md:bottom-3 lg:bottom-7 left-2 ml-3 w-full z-30">
                                        <h3 className="text-white text-xs sm:text-xl md:text-lg lg:text-lg font-normal">
                                            {author}
                                        </h3>
                                        <h4 className="text-white text-xs lg:text-md font-thin">
                                            {publish_date}
                                        </h4>
                                    </div>
                                </div>
                                <h2 className="text-xl mb-1 mt-3">
                                    {title}
                                </h2>
                                <div className="mb-2">
                                    {description}
                                </div>
                                <Link
                                    href={{
                                        pathname: `/Home/${ID}`,
                                        query: {
                                            id: ID
                                        }
                                    }}
                                >
                                    <span className=" text-lg w-full">
                                        Read Post
                                        <svg className="inline h-5 w-5 text-slate-700 right-9" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                </>
            ) :
                (
                    <>
                        <div>
                            Uh Oh!
                        </div>
                    </>
                )}
        </>
    )
}


