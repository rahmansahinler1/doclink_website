"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Pricing"
          paragraph="Start for free to change your interaction with information. Interact all of your documentation from single platform."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 2xl:gap-x-8">
          <PricingBox
            packageName="Free"
            price={isMonthly ? "0" : "0"}
            duration={isMonthly ? "mo" : "mo"}
            subtitle="Start experiencing Doclink.io right now."
          >
            <OfferList text="20 Sources" status="active" />
            <OfferList text="3 Knowledge Base" status="active" />
            <OfferList text="50 Daily QA Limit" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "7.99" : "4.99"}
            duration={isMonthly ? "mo" : "mo"}
            subtitle="Increase your limits. Use anytime."
          >
            <OfferList text="100 Sources" status="active" />
            <OfferList text="10 Knowledge Base" status="active" />
            <OfferList text="Limitless QA" status="active" />
            <OfferList text="Source & Knowledge Base Summarization" status="active" />
            <OfferList text="Personilzed Chat Storage" status="active" />
            <OfferList text="Priority Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "14.99" : "9.99"}
            duration={isMonthly ? "mo" : "mo"}
            subtitle="Go deeper analysis. Use additional features."
          >
            <OfferList text="200 Sources" status="active" />
            <OfferList text="20 Knowledge Base" status="active" />
            <OfferList text="Limitless QA" status="active" />
            <OfferList text="Source & Knowledge Base Summarization" status="active" />
            <OfferList text="Personilzed Chat Storage" status="active" />
            <OfferList text="Prio Support Calls" status="active" />
            <OfferList text="Automatic Reporting" status="active" />
            <OfferList text="Information Comparison" status="active" />
            <OfferList text="Source Sharing" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Enterprise"
            price="Custom"
            duration=""
            subtitle="Customize the experience. Use with your team."
            buttonText="Book a Meeting"
          >
            <OfferList text="Everything in Pro Plan Per User" status="active" />
            <OfferList text="100 Person Limit" status="active" />
            <OfferList text="On-Prem Integration" status="active" />
            <OfferList text="24/7 Prio Customer Support" status="active" />
            <OfferList text="Customizable Experience" status="active" />
            <OfferList text="Share Within Your Organization" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;