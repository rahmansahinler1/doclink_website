import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

const TermsPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Terms of Service"
        description="Please read these terms carefully before using our service."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Notice */}
            <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-base text-body-color dark:text-body-color-dark">
                Last Updated: January 28, 2025
              </p>
              <p className="mt-4 text-base font-medium text-body-color dark:text-body-color-dark">
                Please read these terms of service carefully. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>

            {/* Beta Service Notice */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                1. Service
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                Doclink is currently in beta. We value to complete transperancy and integrity. By agreeing our terms, you acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">The service may contain bugs, errors, and limitations</li>
                <li className="mb-2">Service availability and features may change without notice</li>
              </ul>
            </div>

            {/* Data and Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                2. Your Data and Content
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                You retain all rights to your content. We're encrypting of your personal information and document content. However, by using our service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">You are solely responsible for all content you upload</li>
                <li className="mb-2">You must have all necessary rights and permissions for any content you upload</li>
                <li className="mb-2">You accept full responsibility for the security of any sensitive information you upload</li>
                <li className="mb-2">We cannot guarantee the absolute security of uploaded content despite our best efforts</li>
                <li className="mb-2">You should not upload any illegal, confidential, or sensitive content that could harm you or others if exposed</li>
              </ul>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                3. Limitations of Liability
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">The service is provided "as is" without any warranties</li>
                <li className="mb-2">We are not liable for any damages arising from your use of the service</li>
                <li className="mb-2">We are not responsible for any loss of data or breaches beyond our reasonable control</li>
                <li className="mb-2">We do not guarantee the accuracy of AI-generated results or analysis</li>
              </ul>
            </div>

            {/* Your Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                4. Your Responsibilities
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Use the service in compliance with all applicable laws</li>
                <li className="mb-2">Not share your account credentials with others</li>
                <li className="mb-2">Not attempt to reverse engineer the service or our AI systems</li>
                <li className="mb-2">Not use the service for any illegal or unauthorized purpose</li>
                <li className="mb-2">Maintain appropriate security measures for your account and data</li>
              </ul>
            </div>

            {/* Changes and Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                5. Changes and Termination
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Modify or terminate the service at any time</li>
                <li className="mb-2">Change these terms at any time</li>
                <li className="mb-2">Suspend or terminate your access for any reason</li>
                <li className="mb-2">Delete any content or data without notice</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                6. Contact
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
                If you have any questions about these Terms, please contact us using contact page. You can book a call, we're doing our best to ensure high quality and transparent service.
              </p>
            </div>

            {/* Additional */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-body-color dark:text-body-color-dark">
                These terms are provided as a basic framework and may not cover all legal requirements. If you have any additional safety, please contact us. We will do our best to fulfill your additional requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;