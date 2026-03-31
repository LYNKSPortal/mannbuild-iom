'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Terms() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [contentRef, contentVisible] = useIntersectionObserver();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-8 py-16">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Terms & Conditions
        </h1>
        
        <div 
          ref={contentRef}
          className={`w-full animate-on-scroll animate-scroll-delay-200 ${contentVisible ? 'animated' : ''}`}
        >
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="body-text text-gray-600 mb-4">
                Welcome to MannBuild. These Terms and Conditions govern your use of our construction services and website. By accessing our website or engaging our services, you agree to be bound by these terms.
              </p>
              <p className="body-text text-gray-600">
                MannBuild is a registered construction company operating in the Isle of Man, providing residential and commercial construction services since 2004.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services</h2>
              <p className="body-text text-gray-600 mb-4">
                MannBuild provides the following construction services:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Residential construction and renovations</li>
                <li>Commercial building projects</li>
                <li>Project management services</li>
                <li>Design and build solutions</li>
                <li>Consultation and planning services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Client Responsibilities</h2>
              <p className="body-text text-gray-600 mb-4">
                As a client of MannBuild, you agree to:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Provide accurate information about your project requirements</li>
                <li>Obtain necessary permits and approvals</li>
                <li>Make timely payments as per agreed schedules</li>
                <li>Provide access to the construction site</li>
                <li>Communicate any changes or concerns promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Terms</h2>
              <p className="body-text text-gray-600 mb-4">
                Payment schedules will be detailed in your specific project contract. Generally:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Deposit required upon contract signing</li>
                <li>Progress payments at predetermined milestones</li>
                <li>Final payment upon project completion</li>
                <li>Late payments may incur interest charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Project Timeline</h2>
              <p className="body-text text-gray-600 mb-4">
                While we strive to complete all projects on schedule, timelines may be affected by:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Weather conditions</li>
                <li>Material availability</li>
                <li>Client-requested changes</li>
                <li>Unforeseen site conditions</li>
                <li>Regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Warranty and Guarantees</h2>
              <p className="body-text text-gray-600 mb-4">
                MannBuild provides warranties on our workmanship as follows:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>12-month warranty on workmanship</li>
                <li>Manufacturer warranties on materials and fixtures</li>
                <li>Compliance with Isle of Man building regulations</li>
                <li>Post-completion support and maintenance services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="body-text text-gray-600">
                MannBuild shall not be liable for any indirect, incidental, or consequential damages arising from our services, except where required by Isle of Man law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
              <p className="body-text text-gray-600 mb-4">
                Either party may terminate the contract under the following conditions:
              </p>
              <ul className="list-disc list-inside body-text text-gray-600 space-y-2 ml-4">
                <li>Mutual agreement in writing</li>
                <li>Breach of contract by either party</li>
                <li>Force majeure events</li>
                <li>With appropriate notice as specified in the contract</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Privacy</h2>
              <p className="body-text text-gray-600">
                Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="body-text text-gray-600 mb-2">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="body-text text-gray-600">
                <p><strong>MannBuild</strong></p>
                <p>Isle of Man</p>
                <p>Phone: 07624 435430</p>
                <p>Email: info@mannbuild.com</p>
              </div>
            </section>

            <section className="pt-6 border-t border-gray-200">
              <p className="body-text text-gray-500 text-sm">
                <strong>Last Updated:</strong> March 2026<br/>
                These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
