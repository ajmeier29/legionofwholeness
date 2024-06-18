import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='bg-hero-gradient-background absolute inset-0 w-full h-full'>
        <Hero />
      </div>
    </>
  );
}
