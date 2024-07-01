import { BlogPostData } from "../../data/data";
import GradiantText from "./GradientText";


export const BlogPostPage: React.FC<{ post: BlogPostData }> = ({ post: blogPostData }) => {

    return (
        <>
            <div className="relative m-5 rounded-lg overflow-hidden">
                <img className="h-[400px] md:h-[600px] w-full object-cover object-bottom" src={blogPostData.header_image_full} />
                <div className="absolute bottom-6 md:bottom-9 z-40 w-full text-center bg-black/60 p-5 overflow-hidden backdrop-blur-sm">
                    <h2 className='text-md sm:text-3xl lg-text-[40px] font-normal text-primary inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{blogPostData.name}&nbsp;</h2>
                </div>
            </div>
            <div className="ml-10 mr-10 md:ml-32 md:mr-32 lg:ml-52 lg:mr-52">
                <div>{blogPostData?.content?.[0]?.value ?? 'No content available'}</div>
            </div>
        </>
    )
}