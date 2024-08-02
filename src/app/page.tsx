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
    <div className="min-h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/a.png')"}}>
      <Head>
        <title>Excel Tutoring - Your Path to Academic Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <NonokaMessageSection/>
      <Step/>
      {/* <Section1/> */}
      <Question/>
      <InstructorProfile/>
      <Footer />
    </div>
  )
}
