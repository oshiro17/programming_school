import Image from "next/image";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NonokaMessageSection from "@/components/NonokaMessage";
import Step from "@/components/Step";
import Section1 from "@/components/Section1";
import Question from "@/components/Section2";
import InstructorProfile from "@/components/InstructorProfile";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Head>
        <title>Excel Tutoring - Your Path to Academic Success</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>

      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/a.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 min-h-screen overflow-y-auto">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <NonokaMessageSection />
          <Step />
          {/* <Section1 /> */}
          <Question />
          <InstructorProfile />
        </main>
        <Footer />
      </div>
    </div>
  )
}