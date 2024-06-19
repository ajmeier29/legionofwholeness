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
        <span className="mr-5 text-button-primary text-navbar-font-xl">
            {children}
        </span>
    );
};

