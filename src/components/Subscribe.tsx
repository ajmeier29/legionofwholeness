'use client'
import { SubscribeContext } from "@/lib/SubscribeContext";
import React, { useContext, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { SubmitHandler, useForm } from "react-hook-form"

type SubscribeProps =
    {
        closeModal: () => void;
    }


export default function Subscribe({ closeModal }: SubscribeProps) {
    const { showModal, setShowModal, setshowSuccessMessage } = useContext(SubscribeContext);
    const captchaKey: string = (process.env.NEXT_PUBLIC_CAPTCA_INVISIBLE_PUB_KEY as string);
    const verifyUrl: string = (process.env.NEXT_PUBLIC_VERIFY_INVISIBLE_URL as string);
    const emailSubUrl: string = (process.env.NEXT_PUBLIC_EMAIL_SUB_URL as string);
    const recaptcha = React.useRef<ReCAPTCHA>(null);
    const [loading, setLoading] = useState(false);
    var captchaPass: boolean = false;

    async function onChange(value: any) {
        // verify captcha
        await recaptcha?.current?.executeAsync();
        //console.log("captcha executed")
        const captchaValue = recaptcha?.current?.getValue()
        if (!captchaPass) {
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
                        //console.log(`reCAPTCHA validation Passed! ${JSON.stringify(data)}`)
                        captchaPass = data.success
                        return;
                    } else {
                        //console.log(`reCAPTCHA validation failed! ${JSON.stringify(data)}`)
                        return;
                    }
                } catch (e) {
                    //console.log(`Exception from verify: ${e}`);
                    return;
                }
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

        await onChange(null);

        if (!captchaPass) {
            //console.log('captcha form fail')
        } else {
            try {
                setLoading(true);
                //console.log("Submitting email");
                const subscriberData = {
                    email_address: data.email
                };
                fetch(emailSubUrl, {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(subscriberData),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        //console.log('New subscriber added:', data);
                    })
                    .catch(error => {
                        //console.error('Error adding subscriber:', error);
                    });
                reset();
                captchaPass = false;
                //recaptcha?.current?.reset();
                setshowSuccessMessage(true);
                setShowModal(false) // close the modal
                console.log('setshowtoast')
            } catch (error) {
                //console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }


    return (
        <>
            <div
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="500"
                className="fixed mt-28 md:mt-56 rounded-lg z-50">
                <div className="flex h-full justify-center items-center bg-[#eae1d5] mx-16 md:mx-20 rounded-lg">
                    <div className="p-6">
                        <div
                            className="relative flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded-lg lg:flex-nowrap md:p-8 ">
                            <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
                                <h3 className="mb-2 text-2xl font-bold text-gray-700">Subscribe to Newsletter</h3>
                                <p className="text-gray-500">Provide your email to get email notification when there is a new blog post
                                </p>
                            </div>
                            <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" name="tags" value="earlyaccess" />
                                    <div className="flex flex-col sm:flex-row">
                                        <input
                                            {...register("email",
                                                {
                                                    required: true
                                                })}
                                            type="email" id="email" name="email"
                                            placeholder={`${errors.email ? 'Email address is required' : 'Enter your email address'}`}
                                            className={`flex-1 px-3 py-2 ${errors.email ? 'placeholder-red-400' : 'placeholder-gray-300'} border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300`} />
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-4 mt-5 text-white  text-lg bg-rust rounded-md sm:mt-0 sm:w-auto whitespace-nowrap "> Subscribe </button>
                                    </div>
                                    <ReCAPTCHA
                                        ref={recaptcha}
                                        sitekey={captchaKey}
                                        size="invisible"
                                    />
                                </form>
                            </div>
                            <div
                                onClick={closeModal}
                                className="absolute top-0 right-0">
                                <svg
                                    className="h-8 w-8 text-neutral-400"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
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