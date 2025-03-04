"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Pricing"
          paragraph="No complicated pricing. No forgotten subscriptions. You can also use Doclink for free. If you want full experience pay once and use it for lifetime!"
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
          <PricingBox
            packageName="Free"
            price="0"
            duration="No Credit Card"
            subtitle="Start experiencing Doclink.io right now."
          >
            <OfferList text="10 Sources" status="active" />
            <OfferList text="3 Folders" status="active" />
            <OfferList text="25 Daily question limit" status="active" />
          </PricingBox>
          
          <PricingBox
            packageName="Premium"
            price="20"
            duration="Lifetime"
            subtitle="Unlock full power with a one-time payment."
            buttonText="Try For Free"
          >
            <OfferList text="100 Sources" status="active" />
            <OfferList text="10 Folders" status="active" />
            <OfferList text="Limitless Questions" status="active" />
            <OfferList text="Priority Support" status="active" />
            <OfferList text="Early Access to New Features" status="active" />
          </PricingBox>
          
          <PricingBox
            packageName="Enterprise"
            price="Custom"
            duration=""
            subtitle="Customize the experience. Use with your team."
            buttonText="Book a Meeting"
          >
            <OfferList text="Everything in Premium Plan Per User" status="active" />
            <OfferList text="100 Person Limit" status="active" />
            <OfferList text="On-Prem Integration" status="active" />
            <OfferList text="24/7 Priority Customer Support" status="active" />
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