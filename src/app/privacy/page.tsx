import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

const PrivacyPolicyPage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Privacy Policy"
        description="How we handle and protect your data"
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
                Your privacy and data security are our top priorities. This policy explains how we collect, use, and protect your information.
              </p>
            </div>

            {/* Security Commitment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                1. Our Security Commitment
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                At Doclink, we implement robust security measures aligned with ISO 27001 standards:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">End-to-end encryption for all document data</li>
                <li className="mb-2">Encryption of all personal information at rest and in transit</li>
                <li className="mb-2">Secure data storage with industry-standard encryption</li>
                <li className="mb-2">Regular security audits and updates</li>
                <li className="mb-2">Strict access controls and authentication protocols</li>
              </ul>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                2. Information We Collect
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Account information (email, name)</li>
                <li className="mb-2">Documents you upload to our platform</li>
                <li className="mb-2">Usage data and analytics</li>
                <li className="mb-2">Communication preferences</li>
                <li className="mb-2">Technical information about your device and connection</li>
              </ul>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                3. How We Use Your Information
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Provide and improve our document analysis services</li>
                <li className="mb-2">Process and analyze your documents as requested</li>
                <li className="mb-2">Maintain and enhance platform security</li>
                <li className="mb-2">Send important service updates and notifications</li>
                <li className="mb-2">Improve our AI models (with your explicit consent)</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                4. Data Protection Measures
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                We implement the following security measures:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">AES-256 encryption for all stored data</li>
                <li className="mb-2">TLS 1.3 for all data in transit</li>
                <li className="mb-2">Regular security assessments and penetration testing</li>
                <li className="mb-2">Secure data centers with physical security controls</li>
                <li className="mb-2">Compliance with ISO 27001 security standards</li>
                <li className="mb-2">Regular security training for all team members</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                5. Data Retention and Deletion
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                Our data retention policies:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">You can request deletion of your data at any time</li>
                <li className="mb-2">Documents are retained only as long as necessary</li>
                <li className="mb-2">Inactive accounts are reviewed after 12 months</li>
                <li className="mb-2">Secure data deletion procedures are in place</li>
              </ul>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                6. Your Rights
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Access your personal information</li>
                <li className="mb-2">Request data deletion</li>
                <li className="mb-2">Opt-out of data processing</li>
                <li className="mb-2">Export your data</li>
                <li className="mb-2">Update your information</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                7. Contact Us
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
                For privacy-related questions or concerns, contact us at using our contact page.
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Security Notice: While we implement security measures aligned with ISO 27001 standards and use industry-best practices for encryption and data protection, no system is completely secure. We continuously work to protect your data but cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;