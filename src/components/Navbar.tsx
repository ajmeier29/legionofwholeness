import Link from "next/link";
import { ReactNode } from "react";


type NavBarProps =
    {
        marginTop?: string;
    }
export default function Navbar({ marginTop = 'mt-20' }: NavBarProps) {
    return (
        <>
            <div className={`absolute ${marginTop}`}>
                <div className="flex flex-row justify-between text-white">
                    <NavBarOption link='/'>
                        HOME
                    </NavBarOption>
                    <NavBarOption link='/BlogPosts'>
                        BLOG
                    </NavBarOption>
                    <NavBarOption link='/ReadingList'>
                        READING LIST
                    </NavBarOption>
                    <NavBarOption marginRight={false} link='/Contact'>
                        CONTACT
                    </NavBarOption>
                </div>
            </div>
        </>
    )
}

interface Props {
    children: ReactNode;
    link: string;
    marginRight?: boolean
}

const NavBarOption: React.FC<Props> = ({ children, link, marginRight = true }) => {

    return (
        <Link href={link}>
            <span className={`${marginRight ? 'mr-5' : ''} text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                {children}
            </span>
        </Link>
    );
};

