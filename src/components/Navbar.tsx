'use client'
import Link from "next/link";
import { ReactNode, useState } from "react";
import Hamburger from 'hamburger-react'


type NavBarProps =
    {
        marginTop?: string;
    }
export default function Navbar({ marginTop = 'mt-20' }: NavBarProps) {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={`absolute hidden md:block ${marginTop}`}>
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
            <div className="fixed bg-[#eae1d5] border-[#9b6a5c] border md:hidden top-4 right-4 inline-block rounded-lg z-50">
                <div className="relative">
                    <Hamburger color="#9b6a5c" toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen ?
                    (
                        <div
                            className="fixed py-3 block right-4 mt-1 bg-[#eae1d5] translate-y-[-100px] animate-slide-in rounded-lg ">
                            <NavBarOption hamburger marginRight={false} link='/'>
                                HOME
                            </NavBarOption>
                            <NavBarOption hamburger marginRight={false} link='/BlogPosts'>
                                BLOG
                            </NavBarOption>
                            <NavBarOption hamburger marginRight={false} link='/ReadingList'>
                                READING LIST
                            </NavBarOption>
                            <NavBarOption hamburger marginRight={false} link='/Contact'>
                                CONTACT
                            </NavBarOption>
                        </div>
                    )
                    :
                    (
                        <>
                        </>
                    )}
            </div>

        </>
    )
}

interface Props {
    children: ReactNode;
    link: string;
    marginRight?: boolean
    hamburger?: boolean
}

const NavBarOption: React.FC<Props> = ({ children, link, marginRight = true, hamburger = false }) => {

    return (
        <Link href={link}>
            {hamburger ?
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-rust px-3 py-2 text-right block text-navbar-font-xl`}>
                            {children}
                        </span>
                    </>
                ) :
                (
                    <>
                        <span className={`${marginRight ? 'mr-5' : ''} text-button-primary text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
                            {children}
                        </span>
                    </>
                )}
        </Link>
    );
};

