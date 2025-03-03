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
      designation: "Co-founder",
    },
    tags: ["Security"],
    publishDate: "12/21/2024",
    slug: "enterprise-security",
    introText: "In today's digital landscape, data security isn't just a feature - it's a fundamental necessity. At Doclink, we understand that our users trust us with their valuable documents and sensitive information. That's why security has been at the core of our architecture from day one. When you're working with Doclink, whether you're uploading business documents, research papers, or personal files, our security infrastructure ensures that your data stays exactly where it belongs - in your control. Let's take you through our comprehensive security approach and the measures we've implemented to keep your data safe.",
    content: "Every interaction with Doclink begins with secure authentication. We've implemented Google OAuth 2.0 integration, providing you with industry-standard security practices. Our session management system uses encrypted cookies and secure tokens, ensuring that your session remains protected throughout your interaction with our platform. We believe in encryption everywhere. That's why we've implemented AES-GCM (Advanced Encryption Standard in Galois/Counter Mode), one of the most secure encryption methods available. Every document you upload is encrypted before storage, with unique encryption keys for each file. No body, even us can't read the sentences of the file you uploaded. Even a hacker reach the database, all of the sentences you provide are encrypted means undereadable. Also, because of our storage architecture every sentence of your documents are encrypted separately. We're doing every best practice to store your files and your information at maximum security."
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
    introText: "In today's AI-driven world, getting accurate answers from your documents shouldn't be a game of chance. At Doclink, we've implemented Retrieval-Augmented Generation (RAG), an advanced AI technique that ensures precise and reliable responses when chatting with your documents. Unlike traditional chatbots that might hallucinate or provide inconsistent answers, our custom-built RAG system carefully searches through your documents, finds the most relevant information, and generates responses that are always grounded in your actual content. We've developed our solution from the ground up, focusing on accuracy and reliability in every interaction.",
    content: "Our journey to perfect document-based AI chat began with a fundamental question: How can we make document interaction both powerful and trustworthy? The answer lies in our step-by-step crafted RAG implementation. We start by creating highly accurate document embeddings, transforming your content into a format that AI can understand deeply. These embeddings are then indexed using FAISS technology, enabling lightning-fast semantic search capabilities that understand the true meaning behind your questions. When you chat with your documents, our system doesn't just match keywords – it comprehends context, identifies relevant sections across multiple files, and weighs the importance of each piece of information. This sophisticated retrieval process feeds into our generation phase, where we've implemented careful prompt engineering to ensure responses are not only accurate but also natural and easy to understand. What sets our implementation apart is the balance between speed and precision – we've optimized every step of the process, from document processing to response generation, ensuring you get accurate answers within seconds. Our system also provides complete transparency by showing you exactly which parts of your documents were used to generate each response, giving you confidence in the accuracy of every interaction. This groundbreaking approach to document AI chat means you're not just getting quick answers – you're getting reliable insights that you can trust and verify. If you want to know better about our RAG integration, go checkout our github page. We're completely open source!"
  },
  {
    id: 3,
    title: "How to use better? Tips to get most out of Doclink",
    paragraph: "We optimize Doclink for your best experience. Doclink only generate answers from your files. Reaching information might take another shot. Learn how to use it best.",
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
    introText: "Getting the most out of your AI document assistant isn't just about uploading files and asking questions. Doclink offers powerful features that let you fine-tune your document interactions and receive precisely targeted answers. From organizing documents in custom domains to filtering specific files for targeted searches, our AI assistant puts you in complete control of your information. Whether you're researching across multiple documents or diving deep into a specific file, Doclink's intelligent features ensure you're always getting the most relevant and accurate responses.",
    content: "Mastering Doclink starts with smart document organization. Create separate domains for different projects or topics – this isn't just about keeping things tidy, it's about enhancing the accuracy of your AI interactions. When you're working with multiple documents, take advantage of our unique file filtering system: you can select specific files within your domain for more focused searches, ensuring your AI assistant only references the most relevant sources. Every answer you receive comes with detailed source tracking, showing you exactly which documents and pages contributed to the response. This transparency isn't just about verification – it's a powerful tool for deeper research. When reviewing responses, pay attention to the source references displayed in the right panel; they provide context and allow you to explore related information in your documents. For complex queries, try breaking them down into specific questions rather than broad requests. This approach, combined with our intelligent file filtering, helps you drill down to exactly the information you need. The AI will automatically highlight the most relevant sections from your documents, making it easy to verify information and discover related context. If you're working with large document collections, consider creating themed domains and use the file selection feature strategically – for instance, you might select only the most recent documents for up-to-date information, or combine specific policy documents with related guidelines for comprehensive answers. Remember, Doclink's power lies in its ability to not just search, but understand your documents contextually, so frame your questions naturally and let our AI assistant do the heavy lifting of finding and connecting relevant information across your selected sources."
  }
];

export default blogData;