'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Privacy() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-8 py-16">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Privacy Policy
        </h1>
        
        <div 
          ref={contentRef}
          className={`w-full animate-on-scroll animate-scroll-delay-200 ${contentVisible ? 'animated' : ''}`}
        >
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="body-text text-gray-600 mb-4">
                At MannBuild, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our construction services or interact with our website.
              </p>
              <p className="body-text text-gray-600">
                This policy complies with the Isle of Man Data Protection Act 2018 and the UK GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <p className="body-text text-gray-600 mb-4">
                We may collect the following types of information:
              </p>
              
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4 mb-4">
                <li>Name and contact details (address, phone, email)</li>
                <li>Property information and project details</li>
                <li>Financial information for billing purposes</li>
                <li>Communication records</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Information</h3>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="body-text text-gray-600 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Providing construction and consultation services</li>
                <li>Project planning and management</li>
                <li>Billing and payment processing</li>
                <li>Communication about your project</li>
                <li>Legal and regulatory compliance</li>
                <li>Improving our services and website</li>
                <li>Marketing (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Legal Basis for Processing</h2>
              <p className="body-text text-gray-600 mb-4">
                We process your information based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li><strong>Contractual Necessity:</strong> To fulfill our construction contracts</li>
                <li><strong>Legal Obligation:</strong> To comply with building regulations and laws</li>
                <li><strong>Legitimate Interest:</strong> For business operations and communication</li>
                <li><strong>Consent:</strong> For marketing and non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="body-text text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Subcontractors and suppliers involved in your project</li>
                <li>Regulatory authorities and building inspectors</li>
                <li>Professional advisors (architects, engineers)</li>
                <li>Financial institutions for payment processing</li>
                <li>Legal advisors when required</li>
              </ul>
              <p className="body-text text-gray-600">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
              <p className="body-text text-gray-600 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Secure storage of digital and physical records</li>
                <li>Encrypted data transmission where appropriate</li>
                <li>Access controls and staff training</li>
                <li>Regular security assessments</li>
                <li>Secure document disposal procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="body-text text-gray-600 mb-4">
                We retain your information for the following periods:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Project records: 10 years after completion</li>
                <li>Financial records: 7 years for tax purposes</li>
                <li>Website analytics: 26 months</li>
                <li>Marketing communications: Until you unsubscribe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Rights</h2>
              <p className="body-text text-gray-600 mb-4">
                Under data protection law, you have the right to:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Request data transfer to another provider</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Limit how we use your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Cookies</h2>
              <p className="body-text text-gray-600 mb-4">
                Our website uses cookies to:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze website usage</li>
                <li>Improve user experience</li>
                <li>Provide security features</li>
              </ul>
              <p className="body-text text-gray-600">
                You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Website Analytics</h2>
              <p className="body-text text-gray-600">
                We use analytics tools to understand how our website is used. This information is anonymized and used only to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Policy</h2>
              <p className="body-text text-gray-600">
                We may update this Privacy Policy periodically. Changes will be posted on our website with the updated date. Continued use of our services indicates acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <p className="body-text text-gray-600 mb-4">
                For questions about this Privacy Policy or to exercise your data rights, please contact:
              </p>
              <div className="body-text text-gray-600">
                <p><strong>Data Protection Officer</strong></p>
                <p>MannBuild</p>
                <p>Isle of Man</p>
                <p>Phone: 07624 435430</p>
                <p>Email: privacy@mannbuild.com</p>
              </div>
              <p className="body-text text-gray-600 mt-4">
                If you have concerns about how we handle your data, you can also contact the Isle of Man Information Commissioner.
              </p>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <p className="body-text text-gray-500 text-sm">
                <strong>Last Updated:</strong> March 2026<br/>
                This policy was created to comply with Isle of Man data protection legislation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
