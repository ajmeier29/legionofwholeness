'use client'
import React, { ReactNode, useEffect, useState } from "react";
import GradiantText from "./GradientText";
import ReCAPTCHA from 'react-google-recaptcha';
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from "react-hook-form"
import Rune from "./Rune";


export default function Contact() {
    const captchaKey: string = (process.env.NEXT_PUBLIC_CAPTCA_SECRET as string);
    const verifyUrl: string = (process.env.NEXT_PUBLIC_VERIFY_URL as string);
    const emailPubKey: string = (process.env.NEXT_PUBLIC_EMAIL_PUB_KEY as string);
    const emailServiceId: string = (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string);
    const emailTemplateId: string = (process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string);
    const recaptcha = React.useRef<ReCAPTCHA>(null);
    const [loading, setLoading] = useState(false);
    const [captchaPass, setCaptchaPass] = useState<boolean>();

    useEffect(() => emailjs.init(emailPubKey), []);

    async function onChange(value: any) {
        // verify captcha
        const captchaValue = recaptcha?.current?.getValue()
        if (!captchaValue) {
            // Create toast message
        } else {
            // make form submission
            try {
                const res = await fetch(verifyUrl, {
                    method: 'POST',
                    body: JSON.stringify({ captchaValue }),
                    mode: 'cors',
                    headers: {
                        'content-type': 'application/json',
                    },
                })
                const data = await res.json()
                if (data.success) {
                    setCaptchaPass(data.success)
                } else {
                    alert('reCAPTCHA validation failed!')
                }
            } catch (e) {
                //console.log(`Exception from verify: ${e}`);
            }
        }
    }
    // The form data type
    type FormData =
        {
            name: string,
            email: string,
            message: string
        }

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!captchaPass) {
            // toast({
            //     title: 'Unable to submit.',
            //     description: "You must check the Captcha checkbox!",
            //     status: 'error',
            //     duration: 5000,
            //     variant: 'subtle',
            //     isClosable: true,
            // })
        } else {
            try {
                setLoading(true);
                await emailjs.send(emailServiceId, emailTemplateId, {
                    from_name: data.name,
                    email: data.email,
                    message: data.message,
                });
                // toast({
                //     title: 'Message Sent!',
                //     description: "We will be in contact soon.",
                //     status: 'success',
                //     duration: 5000,
                //     variant: 'subtle',
                //     isClosable: true,
                // })
                // reset form and captcha
                reset();
                setCaptchaPass(false);
                recaptcha?.current?.reset();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="relative grid grid-cols-1 content-center bg-hero-image-mobile md:bg-hero-image bg-cover bg-bottom h-[700px] my-4 mx-3 md:mx-32 xl:mx-56 rounded-lg overflow-hidden">
                    <div className="absolute left-2 top-2 z-50">
                        <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                            <Rune />
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
                        <form className="grid grid-cols-1 gap-2 justify-items-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"
                                {...register("name", {
                                    required: true
                                })}
                                className="w-3/4 sm:w-1/2 lg:w-1/3 px-3 py-2 outline-none drop-shadow-xl rounded-lg h-[51px] z-0" placeholder="Enter your full name" />
                            <input type="text"
                                {...register("email",
                                    {
                                        required: true
                                    })}
                                className="w-3/4 sm:w-1/2 lg:w-1/3 px-3 py-2 outline-none drop-shadow-xl rounded-lg h-[51px] z-0" placeholder="Enter your email" />
                            <textarea
                                {...register("message", {
                                    required: true
                                })}
                                className="w-3/4 sm:w-1/2 lg:w-1/3 px-3 py-2 outline-none drop-shadow-xl rounded-lg z-0 h-28" placeholder="Message" />
                            <ReCAPTCHA
                                ref={recaptcha}
                                sitekey={captchaKey}
                                onChange={onChange}
                                data-size={'normal'}
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
                                            <svg className="inline h-5 w-5 text-slate-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
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