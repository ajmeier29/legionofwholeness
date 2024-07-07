import Navbar from "./Navbar";
import Rune from "./Rune";


export default function Header() {
    return (
        <>
            <div className="relative z-50 flex items-center justify-center slideUpFromBottomSlow">
                <div className='absolute top-6 md:top-4 left-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    <Rune />
                </div>
                <Navbar />
            </div>
        </>
    )
}