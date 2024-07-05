
'use client'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';
import { BlogPostPage } from '@/components/BlogPost';
import { BlogPostData, GetBlogPostData } from '@/data/data';

export default async function Page({ params }: { params: { blogpost: string } }) {
    const searchParams = useSearchParams()
    const blogId = searchParams.get('id');
    var blogPostData: BlogPostData | null = {};

    await GetBlogPostData(blogId)
        .then((blogPost) => {
            //console.log(`BlogPostId: ${blogId} | BlogPostDat: ${JSON.stringify(blogPost)}`)
            blogPostData = blogPost
        })
        .catch((error) => {
            //console.log(`Error: ${error}`)
        })

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
            <BlogPostPage post={blogPostData} />
        </>
    )
}