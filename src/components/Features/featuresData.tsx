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
    title: "Ask to Documents",
    paragraph: "Get answers directly from your documents. No more searching through pages of content manually. Just chat to get information.",
  },
  {
    id: 2,
    icon: (
      <div className="text-primary">
        <Network size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Find Connections",
    paragraph: "Ask PDF, Word, Text files, even Excel tables at the same time. Discover hidden relations just in seconds. Prevent manual searching.",
  },
  {
    id: 3,
    icon: (
      <div className="text-primary">
        <Files size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Multi-Format Support",
    paragraph: "Upload and ask PDFs, Excel files, Word documents, even the web URL's. All your important files in one platform.",
  },
  {
    id: 4,
    icon: (
      <div className="text-primary">
        <Share2 size={40} strokeWidth={1.5} />
      </div>
    ),
    title: "Break the Language Bareer",
    paragraph: "No language bareer with AI. Ask question with your natural language and get answers in same language from different language file.",
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
