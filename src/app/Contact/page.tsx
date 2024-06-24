import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ReactNode } from "react";



export default function Page() {
  return (
    <>
      <div className="relative z-50">
        <div className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          <img className='h-20 w-15' src="/images/sowilo_rune_2.png" />
        </div>
        <div className='absolute top-4 right-2'>
          <ContactNavbar />
        </div>
      </div>
      <Contact />
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
      <span className="mr-5 text-button-primary bg-black/30 px-3 py-1 rounded-xl backdrop-blur-sm text-navbar-font-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {children}
      </span>
      </Link>
  );
};