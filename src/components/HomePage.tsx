'use client'
import { BlogPostData } from "@/data/data";
import { BlogPostsDisplay } from "./BlogPostsDisplay";
import ButtonBar from "./ButtonBar";
import Hero from "./Hero";
import { useContext } from "react";
import Subscribe from "./Subscribe";
import { SubscribeContext } from "@/lib/SubscribeContext";
import ToastMessage from "./ToastMessage";

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="relative justify-center items-center mx-2 mt-2 drop-shadow-1xl">
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
                <div className="relative bg-hero-image-mobile bg-cover bg-bottom h-[600px] w-full rounded-lg overflow-hidden slideUpFromBottomFast">
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