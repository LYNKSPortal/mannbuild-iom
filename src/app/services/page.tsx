'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Services() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [service1Ref, service1Visible] = useIntersectionObserver();
  const [service2Ref, service2Visible] = useIntersectionObserver();
  const [service3Ref, service3Visible] = useIntersectionObserver();
  const [service4Ref, service4Visible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const services = [
    {
      title: "Residential Construction",
      description: "Create a home that truly works for your lifestyle.",
      features: ["Custom Home Builds", "Renovations & Extensions", "Kitchen & Bathroom Upgrades"]
    },
    {
      title: "Commercial Construction",
      description: "Spaces designed to perform and impress.",
      features: ["Offices & Retail Units", "Warehouses & Industrial Builds", "Restaurant Fit-Outs"]
    },
    {
      title: "Project Management",
      description: "Stay stress-free while we handle everything.",
      features: ["Planning & Scheduling", "Budget Control", "Quality Oversight"]
    },
    {
      title: "Design & Build",
      description: "One team. One process. Total clarity.",
      features: ["Architectural Design", "Engineering", "Permits & Compliance", "Full Construction Delivery"]
    }
  ];

  const serviceRefs = [service1Ref, service2Ref, service3Ref, service4Ref];
  const serviceVisibilities = [service1Visible, service2Visible, service3Visible, service4Visible];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Construction Services Built Around You
        </h1>
        <p 
          ref={descriptionRef}
          className={`body-text text-gray-600 mb-12 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
        >
          We provide end-to-end construction solutions tailored to your vision, budget, and timeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={serviceRefs[index]}
              className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-${(index + 3) * 100} ${serviceVisibilities[index] ? 'animated' : ''}`}
            >
              <h2 className="text-2xl font-semibold text-[#00452a] mb-4">{service.title}</h2>
              <p className="body-text text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center body-text text-gray-700">
                    <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`mt-16 bg-[#00452a] text-white p-8 rounded-lg animate-on-scroll animate-scroll-delay-700 ${ctaVisible ? 'animated' : ''}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="body-text mb-6">Contact us today for a free consultation and quote.</p>
          <button className="bg-white text-[#00452a] px-6 py-3 body-text font-medium uppercase hover:bg-gray-100 transition-colors">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
