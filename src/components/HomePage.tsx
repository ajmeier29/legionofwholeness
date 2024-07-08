'use client'
import { BlogPostData } from "@/data/data";
import { BlogPostsDisplay } from "./BlogPostsDisplay";
import ButtonBar from "./ButtonBar";
import Hero from "./Hero";
import { useState } from "react";
import Subscribe from "./Subscribe";

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    const [showModal, setShowModal] = useState(true);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="relative justify-center items-center mx-2 mt-2 drop-shadow-1xl">
                <div className="flex w-full justify-center">
                    {showModal && (
                        <Subscribe />
                    )}
                </div>
                <div className="relative bg-hero-image-mobile bg-cover bg-bottom h-[600px] w-full rounded-lg overflow-hidden slideUpFromBottomFast">
                    <Hero subscribe />
                </div>
                <div className="slideUpFromBottomSlow">
                    <ButtonBar />
                </div>
                <div>
                    <BlogPostsDisplay blogPosts={blogPosts} />
                </div>
            </div>
        </>
    )
}