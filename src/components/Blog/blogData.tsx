import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Data Security: How We Keep Your Documents Safe",
    paragraph: "Discover our comprehensive approach to document security, featuring end-to-end encryption for every sentence in your documents.",
    previewImage: "/images/blog/blog-security.png",
    fullImage: "/images/blog/blog-security-full.jpg",
    author: {
      name: "Ozgur Nazim Sahin",
      image: "/images/blog/blog-ozgur.png",
      designation: "Cofounder",
    },
    tags: ["Security"],
    publishDate: "12/21/2024",
    slug: "enterprise-security",
    introText: "In today's digital landscape, the security of your documents isn't just a feature – it's an absolute necessity...",
    content: "Understanding the complexities of modern document security..."
  },
  {
    id: 2,
    title: "Answer accuracy: Learn More About AI Technique We Use",
    paragraph: "We implemented from scratch RAG method to keep every answer based on the data provided. Because of it, we ensure high document capacity and high answer accuracy.",
    previewImage: "/images/blog/blog-ai.png",
    fullImage: "/images/blog/blog-ai-full.jpg",
    author: {
      name: "Rahman Sahinler",
      image: "/images/blog/blog-rahman.png",
      designation: "Founder",
    },
    tags: ["AI"],
    publishDate: "15/11/2024",
    slug: "ai-document-analysis",
    introText: "Artificial Intelligence is revolutionizing the way we interact with documents...",
    content: "The integration of AI into document processing represents..."
  },
  {
    id: 3,
    title: "Tips to get most out of Doclink.io",
    paragraph: "We optimize Doclink.io for your best experience. Learn step by step how to use it and best practices. You can extract table data, interact with Excel tables and many more.",
    previewImage: "/images/blog/blog-tips.png",
    fullImage: "/images/blog/blog-tips-full.jpg",
    author: {
      name: "Rahman Sahinler",
      image: "/images/blog/blog-rahman.png",
      designation: "Founder",
    },
    tags: ["Tips"],
    publishDate: "01/12/2025",
    slug: "tips-tricks",
    introText: "The way organizations manage and utilize their knowledge has fundamentally changed...",
    content: "Knowledge management has always been crucial for organizational success..."
  }
];

export default blogData;