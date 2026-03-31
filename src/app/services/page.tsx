export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions designed to fit your lifestyle and budget.",
      features: ["Custom Home Building", "Home Renovations", "Room Additions", "Kitchen & Bath Remodeling"]
    },
    {
      title: "Commercial Construction",
      description: "Professional commercial spaces that enhance productivity and reflect your brand identity.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Construction"]
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight from planning to completion, ensuring timelines and budgets are met.",
      features: ["Project Planning", "Budget Management", "Timeline Coordination", "Quality Assurance"]
    },
    {
      title: "Design & Build",
      description: "Integrated design and construction services for seamless project execution.",
      features: ["Architectural Design", "Engineering Services", "Permitting", "Construction Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12">
          Comprehensive construction solutions tailored to your specific needs and requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-[#00452a] mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
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

        <div className="mt-16 bg-[#00452a] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6">Contact us today for a free consultation and quote.</p>
          <button className="bg-white text-[#00452a] px-6 py-3 font-medium uppercase hover:bg-gray-100 transition-colors">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
