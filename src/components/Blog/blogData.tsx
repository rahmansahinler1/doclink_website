import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Data Security: How We Keep Your Documents Safe",
    paragraph: "Discover our comprehensive approach to document security, featuring end-to-end encryption for every sentence in your documents.",
    image: "/images/blog/blog-security.png",
    author: {
      name: "Ozgur Nazim Sahin",
      image: "/images/blog/blog-ozgur.png",
      designation: "Cofounder",
    },
    tags: ["Security"],
    publishDate: "12/21/2024",
    slug: "enterprise-security",
    content: `
# Enterprise-Grade Security: How We Keep Your Documents Safe

Every document uploaded to our platform is protected with military-grade encryption. We take security seriously, implementing multiple layers of protection to ensure your data remains safe and private.

## Our Security Features

### End-to-End Encryption
All documents are encrypted using AES-256 encryption, the same standard used by financial institutions worldwide. Your files are encrypted before storage, ensuring they remain secure throughout their lifecycle.

### ISO27001 Certified Infrastructure 
Our infrastructure adheres to ISO27001 standards, which means:
- Regular security audits
- Comprehensive security policies
- Continuous monitoring
- Strict access controls
- Regular employee security training

### Secure Document Storage
Each file is stored with multiple layers of protection:
- Encrypted at rest and in transit
- Regular security backups
- Redundant storage systems
- Access logging and monitoring

## Your Privacy is Our Priority
We believe in complete transparency about how we handle your data. You maintain full control over your documents at all times.`
  },
  {
    id: 2,
    title: "Answer accuracy: Learn More About AI Technique We Use",
    paragraph: "We implemented from scratch RAG method to keep every answer based on the data provided. Because of it, we ensure high document capacity and high answer accuracy.",
    image: "/images/blog/blog-ai.png",
    author: {
      name: "Rahman Sahinler",
      image: "/images/blog/blog-rahman.png",
      designation: "Founder",
    },
    tags: ["AI"],
    publishDate: "15/11/2024",
    slug: "doclink-RAG"
  },
  {
    id: 3,
    title: "Tips to get most out of Doclink.io",
    paragraph: "We optimize Doclink.io for your best experience. Learn step by step how to use it and best practices. You can extract table data, interact with Excel tables and many more.",
    image: "/images/blog/blog-tips.png",
    author: {
      name: "Rahman Sahinler",
      image: "/images/blog/blog-rahman.png",
      designation: "Founder",
    },
    tags: ["Tips"],
    publishDate: "01/12/2025",
    slug: "tips-tricks"
  },
];

export default blogData;