
'use client'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar';
import { BlogPostPage } from '@/components/BlogPost';
import { BlogPostData, GetBlogPostData } from '@/data/data';

async function getData(id: string | null) {
    try {
        const res = await fetch(`${process?.env?.NEXT_PUBLIC_POSTS_URL}/${id}` || '');

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json(); // Parse the response as JSON
        // need to return .data until the json schema changes in /posts on the backend. 
        return data.data;
    } catch (error) {
        //console.error('Error fetching data:', error);
        return null; // Return a fallback value (e.g., empty array) or handle the error differently
    }
}

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