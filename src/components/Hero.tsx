'use client'
import { SubscribeContext } from "@/lib/SubscribeContext";
import { useContext } from "react";

type HeroProps =
    {
        subscribe: boolean
    }
export default function Hero(props: HeroProps) {
    const { showModal, setShowModal } = useContext(SubscribeContext)
    const openModal = () => setShowModal(true);
    return (
        <>
            <div className="absolute bottom-6 md:bottom-20 left-7 md:left-12 z-50">
                <div className='w-full'>
                    <h2 className='text-[30px] md:text-[40px] font-light text-primary inline'>LEGION OF&nbsp;</h2>
                    <h2 className='bg-hero-gradient text-[40px] md:text-[55px] font-extrabold inline text-transparent bg-clip-text'>WHOLENESS</h2>

                    <p className='text-primary text-[14px] md:text-[17px]'>Helping others to find their strength through remembering their true self.</p>
                    {props.subscribe ?
                        (<button
                            onClick={openModal}
                            type="button"
                            className="mt-5 px-3 py-3 bg-button-primary text-slate-800 rounded-md hover:bg-button-primary-hover relative items-end">
                            Subscribe
                            <svg className="inline h-5 w-5 text-slate-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
                        </button>)
                        : (<></>)
                    }
                </div>
            </div>
        </>
    )
}
