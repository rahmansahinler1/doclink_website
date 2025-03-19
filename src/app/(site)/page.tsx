import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Features from "@/components/Features";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Doclink",
  description: "Document question answering application",
};

export default async function Home() {
  const session = await getServerSession();

  // If the user is already logged in, redirect to the chat
  if (session && session.user) {
    redirect('/chat');
  }

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Video />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
} 