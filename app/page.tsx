import Image from "next/image";
import {About, BookingForm, Footer, Gallery, Hero, Navbar, Services, Testimonials, WhyUs} from "@/components/";


export default function Home() {
  return (
    <div className="">
       <Navbar/> 
       <Hero/>
       <About/>
       <Services/>
       <WhyUs/>
       <BookingForm/>
       <Gallery/>
       <Testimonials/>
       <Footer/>
    </div>
  );
}
