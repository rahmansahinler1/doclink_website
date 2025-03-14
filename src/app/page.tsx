import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Doclink",
  description: "Document question answering application",
};

export default async function Home() {
  const session = await getServerSession();

  // If the user is already logged in, redirect to the dashboard
  if (session && session.user) {
    redirect('/dashboard');
  }

  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
