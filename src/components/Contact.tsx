'use client'
import React from "react";
import GradiantText from "./GradientText";
import ReCAPTCHA from 'react-google-recaptcha';


export default function Contact() {

    const recaptcha = React.useRef<ReCAPTCHA>(null);

    async function onChange(value: any) {
        // verify captcha
        console.log('called on change');
    }

    return (
        <>
            <div className="grid grid-cols-1 content-center bg-hero-image bg-cover bg-bottom h-[600px] mx-3 md:mx-32 xl:mx-56 rounded-lg overflow-hidden">
                <div className="bg-black/40 p-5 backdrop-blur-sm grid grid-cols-1 mx-7 md:mx-32 xl:mx-56  justify-center justify-items-center rounded-lg overflow-hidden">
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
                            sitekey={''}
                            onChange={onChange}
                            data-size={'normal'}
                        />
                        <button type="button" className="w-1/4 px-3 py-2 bg-button-primary text-slate-800 rounded-md hover:bg-button-primary-hover">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}