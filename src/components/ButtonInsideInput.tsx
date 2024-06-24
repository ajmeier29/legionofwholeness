

export default function ButtonInsideInput() {
    return (
        <>
            <input type="text" className="px-3 py-2 outline-none drop-shadow-xl rounded-full h-[51px] w-[40%] relative z-0" placeholder="Enter your email" />
            <button type="button" className="px-3 py-2 ml-[-217px] bg-hero-gradient text-white rounded-full hover:bg-blue-700 z-40 relative items-end">Subscribe To Newsletter</button>
        </>
    )
}