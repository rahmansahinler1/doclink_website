import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";
import ScrollUp from "@/components/Common/ScrollUp";

const PricingPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Pricing Plans"
        description="Choose the perfect plan for your needs. Switch between plans anytime."
      />

      <Pricing />
    </>
  );
};

export default PricingPage;