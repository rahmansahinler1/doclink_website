import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const ProductShowcase = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Information. Fast."
          paragraph="Don't lack behind! Analyze multiple documents simultaneously. Save hours, do 2 times more work at the sime time!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[1080px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image 
                  src="/images/video/mockup.svg" 
                  alt="product showcase" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ProductShowcase;