// featuresData.tsx
import { Feature } from "@/types/feature";
import { 
  MessagesSquare, 
  Network, 
  Files, 
  Share2, 
  SearchCheck,
  ShieldCheck 
} from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div className="text-primary">
        <MessagesSquare size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Smart Document Chat",
    paragraph: "Interact naturally with your documents through AI-powered chat. Ask questions, get summaries, and extract information instantly.",
  },
  {
    id: 2,
    icon: (
      <div className="text-primary">
        <Network size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Knowledge Connection",
    paragraph: "Link related documents automatically, discovering connections across your entire document library through semantic understanding.",
  },
  {
    id: 3,
    icon: (
      <div className="text-primary">
        <Files size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Multi-Format Support",
    paragraph: "Process and analyze PDFs, Word documents, Excel sheets, and more in a unified platform. Extract insights across different file types seamlessly.",
  },
  {
    id: 4,
    icon: (
      <div className="text-primary">
        <Share2 size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Platform Integration",
    paragraph: "Connect seamlessly with popular platforms like Google Drive, ensuring your documents are accessible and synchronized across your preferred storage solutions.",
  },
  {
    id: 5,
    icon: (
      <div className="text-primary">
        <SearchCheck size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Source Validation",
    paragraph: "Every response comes with precise reference links to source documents, ensuring complete transparency and verification of information accuracy.",
  },
  {
    id: 6,
    icon: (
      <div className="text-primary">
        <ShieldCheck size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Enterprise Security",
    paragraph: "Protect your data with ISO 27001 compatible security standards, ensuring complete encryption of all user information and document contents.",
  }
];
export default featuresData;

// SingleFeature.tsx
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

// index.tsx (Features component)
const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Transform Your Documents into Knowledge"
          paragraph="Leverage AI to unlock insights from your documents. Ask questions, find connections, and get accurate answers with source validation - all in one secure platform."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};