

export default function BlogPostsDisplay() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 justify-center mx-3">
                <BlogPostTile
                    author="Justin Bredbenner"
                    date="Jan 1 2024"
                    title="The Collective, and the Impending Beginning of the World"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus."
                    imgPath="/images/autumn-hike-at-waterfall.jpg"
                />
                <BlogPostTile
                    author="Justin Bredbenner"
                    date="Jan 1 2024"
                    title="The Collective, and the Impending Beginning of the World"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus."
                    imgPath="/images/hand-on-tree-bark.jpg"
                />
                <BlogPostTile
                    author="Justin Bredbenner"
                    date="Jan 1 2024"
                    title="The Collective, and the Impending Beginning of the World"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus."
                    imgPath="/images/nature-photographer.jpg"
                />
                <BlogPostTile
                    author="Justin Bredbenner"
                    date="Jan 1 2024"
                    title="The Collective, and the Impending Beginning of the World"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus."
                    imgPath="/images/sunset-over-foggy-mountains.jpg"
                />
            </div>
        </>
    )
}

interface Props {
    author: string,
    title: string,
    date: string,
    description: string,
    imgPath: string
}

const BlogPostTile = (props: Props) => {
    return (
        <>
            <div>
                <div className="rounded-lg p-3 w-full">
                    <div className="relative">
                        <img className='object-cover w-full justify-center rounded-lg' src={props.imgPath} />
                        <img className='absolute blur-sm object-cover h-[25%] object-bottom w-full justify-center rounded-lg bottom-0 left-0 z-20' src={props.imgPath} />
                        <div className="absolute bottom-3 sm:bottom-9 md:bottom-3 lg:bottom-7 left-2 ml-3 w-full z-30">
                            <h3 className="text-white text-xs sm:text-xl md:text-lg lg:text-lg font-normal">
                                {props.author}
                            </h3>
                            <h4 className="text-white text-xs lg:text-md font-thin">
                                {props.date}
                            </h4>
                        </div>
                    </div>
                    <h2 className="text-xl mb-1 mt-3">
                        {props.title}
                    </h2>
                    <div className="mb-2">
                        {props.description}
                    </div>
                    <span className=" text-lg w-full">
                        Read Post
                        <svg className="inline h-5 w-5 text-slate-700 right-9" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg>
                    </span>
                </div>
            </div>
        </>
    )
}