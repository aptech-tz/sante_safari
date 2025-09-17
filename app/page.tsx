import Image from "next/image";
import {About, BookingForm, Footer, Gallery, Hero, Navbar, Services, Testimonials, WhyUs} from "@/components/";
import AdditionalOfferings from "@/components/AdditionalOfferings";


export default function Home() {
  return (
    <div className="">
       <Navbar/> 
       <Hero/>
       <About/>
       <Services/>
       <AdditionalOfferings/>
       <WhyUs/>
       <BookingForm/>
       <Gallery/>
       <Testimonials/>
       <Footer/>
    </div>
  );
}
