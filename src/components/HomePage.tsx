'use client'
import { BlogPostData } from "@/data/data";
import { BlogPostsDisplay } from "./BlogPostsDisplay";
import ButtonBar from "./ButtonBar";
import Hero from "./Hero";
import { useContext } from "react";
import Subscribe from "./Subscribe";
import { SubscribeContext } from "@/lib/SubscribeContext";
import ToastMessage from "./ToastMessage";
import { PreloadStaticImage } from "./PreloadImage";
import heroPic from '../../public/images/shadow-filled-valley-in-the-mountains.webp';

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="relative justify-center items-center mx-2 lg:mx-40 mt-2 drop-shadow-1xl">
                <div className="flex w-full justify-center">
                    {showModal && (
                        <Subscribe closeModal={closeModal} />
                    )}
                    {showSuccessMessage ?
                        (
                            <ToastMessage message="Subscribed!" />
                        ) :
                        (<></>)}
                </div>
                <PreloadStaticImage imgSrc={heroPic} styleProps={'absolute object-cover overflow-hidden rounded-lg h-[600px] w-full z-0'}></PreloadStaticImage>
                <div className="absolute z-40">
                    <Hero subscribe />
                </div>
                <div className="slideUpFromBottomSlow">
                    <ButtonBar setSomeState={openModal} />
                </div>
                <div>
                    <BlogPostsDisplay blogPosts={blogPosts} />
                </div>
            </div>
        </>
    )
}