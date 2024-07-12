import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact | Legion of Wholeness',
};


export default function Page() {
  return (
    <>
      <Contact />
      <Footer />
    </>

  )

}
