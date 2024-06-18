import GradiantText from './GradientText';
import SubscribeButton from './SubscribeButton';

export default function Hero() {
    return (
        <>
            <div className='flex items-center justify-center mt-[150px] mb-1'>
                <h2 className='text-[50px] font-sans text-blue-900'>LEGION OF&nbsp;</h2>
                <GradiantText 
                    text='WHOLENESS' 
                    gradient='hero-gradient' 
                    options='text-[50px] font-extrabold ' />
            </div>
            <div className='flex items-center justify-center mb-9'>
                <p className='text-blue-900'>Helping others to find their strength through remembering their true self.</p>
            </div>
            <div className='flex items-center justify-center'>
                <SubscribeButton />
            </div>
        </>
    )
}