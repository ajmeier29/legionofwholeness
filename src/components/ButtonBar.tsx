import ButtonBarText from "./ButtonBarText";


export default function ButtonBar() {
    return (
        <>
            <div className="flex flex-row space-x-4 mt-4 justify-center mx-3">
                <ButtonBarText title={'Schedule an appointment today'} description={'Schedule an appointment today to start to remember your true self.'} />
                <ButtonBarText title={'Read the latest Blogs'} description={'Find inspiration by reading our latest blogs. '} />
                <ButtonBarText title={'Subscribe to our Newsletter'} description={'Subscribe to my newsletter for weekly inspiration.'} />
            </div>
        </>
    )
}