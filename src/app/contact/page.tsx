import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doclink",
  description: "All in One AI Documentation Platform",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="If you need help or want to contact, please don't hesitate!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
