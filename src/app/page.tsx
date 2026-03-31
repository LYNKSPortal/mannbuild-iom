import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-72">
        <div className="absolute inset-0">
          <Image
            src="/isleofman-wideshot-van.jpg"
            alt="Isle of Man Construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative w-full px-8 flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Building Dreams Into Reality
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-100">
              Trusted construction experts delivering quality residential and commercial projects for over 20 years. From concept to completion, we build with integrity and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[#00452a] px-8 py-4 text-base lg:text-lg font-medium uppercase hover:bg-gray-100 transition-colors text-center"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/projects" 
                className="border-2 border-white text-white px-8 py-4 text-base lg:text-lg font-medium uppercase hover:bg-white hover:text-[#00452a] transition-colors text-center"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique needs and exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Residential</h3>
              <p className="text-base lg:text-lg text-gray-600">Custom homes, renovations, and additions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
              <p className="text-base lg:text-lg text-gray-600">Office buildings, retail, and industrial spaces</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Project Management</h3>
              <p className="text-base lg:text-lg text-gray-600">Complete oversight from planning to completion</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Design & Build</h3>
              <p className="text-base lg:text-lg text-gray-600">Integrated design and construction services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MannBuild?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
                    <p className="text-base lg:text-lg text-gray-600">Proven track record of successful projects across residential and commercial sectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-base lg:text-lg text-gray-600">Every project meets the highest standards of quality and craftsmanship.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                    <p className="text-base lg:text-lg text-gray-600">We respect deadlines and ensure projects are completed on schedule.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#00452a] mb-2">500+</div>
                  <p className="text-base lg:text-lg text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00452a] mb-2">20+</div>
                  <p className="text-base lg:text-lg text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00452a] mb-2">100%</div>
                  <p className="text-base lg:text-lg text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00452a] mb-2">24/7</div>
                  <p className="text-base lg:text-lg text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00452a] text-white py-16">
        <div className="w-full px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-base lg:text-lg mb-8 text-gray-100">
            Contact us today for a free consultation and let's bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#00452a] px-8 py-4 text-base lg:text-lg font-medium uppercase hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
