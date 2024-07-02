import Link from "next/link";
import ButtonBarText from "./ButtonBarText";


export default function ButtonBar() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <ButtonBarText title={'Schedule an appointment'} description={'Schedule an appointment today to start to remember your true self.'} />
                <Link href={'/BlogPost'}>
                    <ButtonBarText title={'Read the latest Blogs'} description={'Find inspiration by reading our latest blogs. '} />
                </Link>
                <ButtonBarText title={'Subscribe to our Newsletter'} description={'Subscribe to my newsletter for weekly inspiration.'} />
            </div>
        </>
    )
}