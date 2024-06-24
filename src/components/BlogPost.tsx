import GradiantText from "./GradientText";


export default function BlogPostPage() {
    return (
        <>
            <div className="relative justify-center items-center mx-2 mt-2 drop-shadow-1xl">
                <div className="relative bg-bottom h-[600px] w-full rounded-lg overflow-hidden">
                    <img src="/images/shadow-filled-valley-in-the-mountains.jpg" />
                    <img className='absolute blur-sm opacity-75 object-cover h-[25%] object-bottom w-full justify-center rounded-lg bottom-0 left-0 z-20' src="/images/shadow-filled-valley-in-the-mountains.jpg" />


                </div>
                <div className="absolute bottom-6 md:bottom-12 left-7 md:left-12 z-40">
                    <h2 className='text-[40px] font-normal text-primary inline drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>The Collective, and the Impending Beginning of the World&nbsp;</h2>
                </div>
            </div>
        </>
    )
}