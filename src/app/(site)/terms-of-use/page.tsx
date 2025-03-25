import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";

const TermsOfUsePage = () => {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Terms of Use"
        description="Guidelines for using the Doclink platform"
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
                These Terms of Use provide guidelines for using Doclink. By using our platform, you agree to follow these terms.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                1. Acceptable Use
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                When using Doclink, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Upload only documents you have the right to use</li>
                <li className="mb-2">Keep your account credentials secure</li>
                <li className="mb-2">Use the platform for its intended purpose</li>
                <li className="mb-2">Respect the platform's rate limits and usage guidelines</li>
                <li className="mb-2">Not attempt to overwhelm or crash our systems</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                2. Prohibited Activities
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                You must not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Use the platform for any illegal purposes</li>
                <li className="mb-2">Upload malicious content or malware</li>
                <li className="mb-2">Attempt to access other users' accounts or data</li>
                <li className="mb-2">Scrape or harvest data from the platform</li>
                <li className="mb-2">Reverse engineer our AI models or systems</li>
                <li className="mb-2">Share your account access with others</li>
              </ul>
            </div>

            {/* Content Guidelines */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                3. Content Guidelines
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                Your uploaded content must not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Violate any intellectual property rights</li>
                <li className="mb-2">Contain sensitive personal information</li>
                <li className="mb-2">Include discriminatory or harmful content</li>
                <li className="mb-2">Contain inappropriate or adult content</li>
                <li className="mb-2">Include confidential information you're not authorized to share</li>
              </ul>
            </div>

            {/* Platform Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                4. Platform Usage
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                When using our platform:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Follow any published usage limits and guidelines</li>
                <li className="mb-2">Use the API responsibly if provided access</li>
                <li className="mb-2">Report any bugs or security issues you discover</li>
                <li className="mb-2">Keep your account information up to date</li>
                <li className="mb-2">Don't create multiple accounts to bypass limitations</li>
              </ul>
            </div>

            {/* Account Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                5. Account Security
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Maintaining strong password security</li>
                <li className="mb-2">Keeping your authentication tokens secure</li>
                <li className="mb-2">Reporting any unauthorized account access</li>
                <li className="mb-2">Logging out from shared devices</li>
                <li className="mb-2">Ensuring your account details remain confidential</li>
              </ul>
            </div>

            {/* Enforcement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                6. Enforcement
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark mb-6">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-base text-body-color dark:text-body-color-dark">
                <li className="mb-2">Suspend accounts that violate these terms</li>
                <li className="mb-2">Remove content that violates our policies</li>
                <li className="mb-2">Limit access to certain features</li>
                <li className="mb-2">Ban users who repeatedly violate these terms</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                7. Contact
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
                For questions about these Terms of Use, contact us at using our contact page.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Note: These Terms of Use complement our Terms of Service and Privacy Policy. We recommend reviewing all documents to fully understand your rights and responsibilities when using Doclink.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;