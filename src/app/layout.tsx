import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doclink - AI Document Q&A",
  description: "Ask questions about your documents using AI",
  keywords: "AI, document analysis, question answering, document QA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* Main content */}
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
