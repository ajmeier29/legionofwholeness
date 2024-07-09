import Link from "next/link";
import ButtonBarText from "./ButtonBarText";

type ButtonBarProps = {
    setSomeState?: () => void;
}
export default function ButtonBar({ setSomeState }: ButtonBarProps) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <ButtonBarText title={'Schedule an appointment'} description={'Schedule an appointment today to start to remember your true self.'} />
                <Link href={'/BlogPosts'}>
                    <ButtonBarText title={'Read the latest Blogs'} description={'Find inspiration by reading our latest blogs. '} />
                </Link>
                <div onClick={setSomeState}>
                    <Link href={''}>
                        <ButtonBarText title={'Subscribe to our Newsletter'} description={'Subscribe to my newsletter for weekly inspiration.'} />
                    </Link>
                </div>
            </div>
        </>
    )
}