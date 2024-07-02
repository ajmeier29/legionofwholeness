import Link from "next/link";
import { ReactNode } from "react";


export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between text-white">
                <NavBarOption link='/Home'>
                    HOME
                </NavBarOption>
                <NavBarOption link='#'>
                    BLOG
                </NavBarOption>
                <NavBarOption link='/Contact'>
                    CONTACT
                </NavBarOption>
            </div>
        </>
    )
}

interface Props {
    children: ReactNode;
    link: string;
}

const NavBarOption: React.FC<Props> = ({ children, link }) => {
    return (
        <Link href={link}>
            <span className="mr-5 text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {children}
            </span>
        </Link>
    );
};

