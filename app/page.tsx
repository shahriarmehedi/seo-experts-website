import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Packagaes from "@/components/home/Packages";
import FAQ from "@/components/home/FAQ";
import Services from "@/components/home/Services";
import Blogs from "@/components/home/Blogs";
import Platforms from "@/components/home/Platforms";
import Testimonials from "@/components/home/Testimonials";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Packagaes />
      <Platforms />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  );
}
