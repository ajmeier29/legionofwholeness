import Link from 'next/link';
import GradiantText from './GradientText';
import Navbar from './Navbar';
import SubscribeButton from './SubscribeButton';

export default function Hero() {
    return (
        <>
            <div className="absolute bottom-6 md:bottom-20 left-7 md:left-12">
                <div className='w-full'>
                    <h2 className='text-[40px] font-light text-primary inline'>LEGION OF&nbsp;</h2>
                    <GradiantText
                        text='WHOLENESS'
                        options='bg-hero-gradient text-[45px] md:text-[55px] font-extrabold inline text-transparent bg-clip-text' />
                    <p className='text-primary text-[17px]'>Helping others to find their strength through remembering their true self.</p>

                    <button type="button" className="mt-5 px-3 py-3 bg-button-primary text-slate-800 rounded-md hover:bg-button-primary-hover relative items-end">
                        Subscribe
                        <svg className="inline h-5 w-5 text-slate-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
                    </button>
                </div>
            </div>
        </>
    )
}
