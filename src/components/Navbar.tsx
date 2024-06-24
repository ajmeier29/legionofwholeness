import Link from "next/link";
import { ReactNode } from "react";


export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-between text-white">
                <NavBarOption>
                    HOME
                </NavBarOption>
                <NavBarOption>
                    BLOG
                </NavBarOption>
                <NavBarOption>
                    CONTACT
                </NavBarOption>
            </div>
        </>
    )
}

interface MyComponentProps {
    children: ReactNode;
}

const NavBarOption: React.FC<MyComponentProps> = ({ children }) => {
    return (
        <Link href={'/Home'}>
        <span className="mr-5 text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {children}
        </span>
        </Link>
    );
};

