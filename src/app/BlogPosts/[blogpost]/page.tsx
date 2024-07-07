
'use client'
import { useSearchParams } from 'next/navigation'
import { BlogPostPage } from '@/components/BlogPost';
import { BlogPostData, GetBlogPostData } from '@/data/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
            <Header />
            <BlogPostPage post={blogPostData} />
            <Footer />
        </>
    )
}