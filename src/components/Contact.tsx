'use client'
import React, { ReactNode, useState } from "react";
import GradiantText from "./GradientText";
import ReCAPTCHA from 'react-google-recaptcha';
import Link from "next/link";


export default function Contact() {

    const recaptcha = React.useRef<ReCAPTCHA>(null);
    const [loading, setLoading] = useState(false);

    async function onChange(value: any) {
        // verify captcha
        console.log('called on change');
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="relative grid grid-cols-1 content-center bg-hero-image bg-cover bg-bottom h-[600px] mx-3 md:mx-32 xl:mx-56 rounded-lg overflow-hidden">
                    <div className="absolute left-2 top-2 z-50">
                        <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                            <img className='h-20 w-15' src="/images/sowilo_rune_2.png" />
                        </div>
                    </div>
                    <div className='absolute top-4 right-0'>
                        <ContactNavbar />
                    </div>
                    <div className="relative bg-black/40 p-5 backdrop-blur-sm grid grid-cols-1 mx-7 md:mx-32 xl:mx-56  justify-center justify-items-center rounded-lg overflow-hidden">
                        <div>
                            <h2 className='text-[20px] md:text-[40px] font-light text-primary block relative top-3'>LEGION OF&nbsp;</h2>
                        </div>
                        <div>
                            <GradiantText
                                text='WHOLENESS'
                                options='relative bg-hero-gradient text-[25px] md:text-[55px] font-extrabold inline text-transparent bg-clip-text' />
                        </div>
                        <div className="text-center">
                            <p className='text-primary text-sm'>Contact me for a conslutation today.</p>
                        </div>
                    </div>
                    <div>
                        <form className="grid grid-cols-1 gap-2 justify-items-center mt-5">
                            <input type="text" className="w-3/4 sm:w-1/2 lg:w-1/3 px-3 py-2 outline-none drop-shadow-xl rounded-lg h-[51px] z-0" placeholder="Enter your full name" />
                            <input type="text" className="w-3/4 sm:w-1/2 lg:w-1/3 px-3 py-2 outline-none drop-shadow-xl rounded-lg h-[51px] z-0" placeholder="Enter your email" />
                            <ReCAPTCHA
                                ref={recaptcha}
                                sitekey={'6LfMdfgpAAAAAMKSHH_c7zjHwBl3DZ4YAQQwW2yp'}
                                onChange={onChange}
                            />
                            <button type="button" className="px-3 py-2 bg-button-primary-disabled text-slate-800 rounded-md hover:bg-button-primary-hover">
                                <div className="flex flex-row justify-center items-center p-3">
                                    {loading ? (
                                        <>
                                            <LoadingCircles />
                                            <div className="text-button-primary-txt-disabled">Submitting</div>
                                        </>
                                    ) : (
                                        <div className="text-slate-800">
                                            Submit
                                            <svg className="inline h-5 w-5 text-slate-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
                                        </div>
                                    )}
                                </div>
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const LoadingCircles = () => {
    return (
        <>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled"></div>
                <div className="w-2 h-2 rounded-full animate-pulse bg-button-primary-txt-disabled mr-2"></div>
            </div>
        </>
    )
}

const ContactNavbar = () => {
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
            <span className="mr-5 text-button-primary rounded-xl backdrop-blur-sm text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {children}
            </span>
        </Link>
    );
};