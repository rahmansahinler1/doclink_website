import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

const FAQPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Learn about our AI-powered document analysis platform, intelligent search capabilities, and enterprise document management solutions"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Getting Started */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Getting Started
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What is Doclink?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Doclink is an AI-powered document analysis platform that helps you understand and extract insights from your documents. Upload your documents and interact with them through natural language queries.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What types of documents can I analyze?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    We support various document formats including PDFs, Word documents, Excel spreadsheets, text files, and more. Our platform is designed to handle both simple text documents and complex formatted files.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How do I get started?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Simply sign up for an account, verify your email, and you can start uploading documents immediately. Our free tier allows you to test the platform's capabilities before committing to a paid plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology and Innovation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Our Technology
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What is RAG technology and how do you use it?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Retrieval-Augmented Generation (RAG) is a cutting-edge AI technology that combines powerful language models with precise information retrieval. We've implemented RAG from scratch to ensure accurate, context-aware document analysis. This means our AI provides answers strictly based on your documents, eliminating hallucinations and ensuring reliable information extraction.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How does your AI understand complex documents?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Our custom-built RAG implementation processes documents through multiple layers of analysis: semantic understanding, context mapping, and intelligent chunking. This allows us to maintain context across long documents and provide precise answers while understanding document structure, tables, and relationships between different sections.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What makes your document analysis unique?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Our platform combines enterprise-grade document processing with advanced semantic search capabilities. Using our proprietary RAG implementation, we can handle complex document structures, maintain context across large documents, and provide precise information retrieval with source attribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Features and Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Features and Usage
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How does the document chat work?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    After uploading a document, you can ask questions naturally, as if you were talking to a knowledgeable assistant. Our AI analyzes your document and provides accurate answers based solely on the content within.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Can I analyze multiple documents together?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Yes, you can create knowledge bases that combine multiple documents. This allows you to find connections and insights across your entire document collection.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What is the maximum file size?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Individual files can be up to 50MB. For larger documents, we recommend splitting them into smaller files or contacting our support for assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Document Intelligence */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Document Intelligence
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How does semantic search work in Doclink?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Our semantic search capabilities go beyond keyword matching. Using advanced natural language processing, we understand the context and meaning of your queries, delivering relevant results even when exact terms don't match.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Can Doclink analyze relationships between documents?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Yes, our platform uses advanced document intelligence to identify connections, similarities, and relationships across your document collection. This enables knowledge discovery and helps surface relevant information across your entire document library.
                  </p>
                </div>
              </div>
            </div>

            {/* Security and Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Security and Privacy
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How secure are my documents?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    We use enterprise-grade encryption (AES-256) for all stored documents and TLS 1.3 for data in transit. Our security practices align with ISO 27001 standards, ensuring your data remains protected.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Can other users see my documents?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    No, your documents are private and can only be accessed by you and users you explicitly share them with. We maintain strict access controls and isolation between user accounts.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Do you use my documents to train AI models?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    No, we do not use your documents to train our AI models. Your content is only used to provide you with analysis and insights through our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Enterprise Solutions
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How can Doclink help with knowledge management?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Our platform transforms enterprise document management by creating an intelligent knowledge base from your existing documents. Through advanced document processing and semantic analysis, we make your organizational knowledge searchable, accessible, and actionable.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Do you support document workflow automation?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Yes, our platform includes intelligent document workflow features, automated information extraction, and integration capabilities to streamline your document processes. This includes automated categorization, data extraction, and custom workflow triggers.
                  </p>
                </div>
              </div>
            </div>

            {/* Billing and Plans */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Billing and Plans
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    What's included in the free tier?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    The free tier includes 20 sources, 3 knowledge bases, and a daily limit of 50 questions. This allows you to thoroughly test our platform's capabilities.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Can I upgrade or downgrade my plan anytime?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Yes, you can change your plan at any time. Plan changes take effect immediately, and we'll prorate any charges or credits accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
                Support
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    How can I get help if I have issues?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    You can contact our support team through the Support section.
                  </p>
                </div>

                <div className="border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Do you offer custom solutions?
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Yes, our Enterprise plan offers custom solutions, including dedicated support, custom integrations, and specific feature development. Contact our sales team to discuss your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Updated Contact Section with Technical Support */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                Need Technical Support?
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Our team of document intelligence experts is ready to help you implement the perfect solution for your organization. Contact us using our contact page or socials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;