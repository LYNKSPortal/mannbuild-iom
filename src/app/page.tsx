'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function ServicesSection() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [service1Ref, service1Visible] = useIntersectionObserver();
  const [service2Ref, service2Visible] = useIntersectionObserver();
  const [service3Ref, service3Visible] = useIntersectionObserver();
  const [service4Ref, service4Visible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
      <div className="w-full px-8">
        <div className="text-center mb-16">
          <h2 
            id="services-heading"
            ref={titleRef}
            className={`text-4xl font-bold text-gray-900 mb-4 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
          >
            Construction Services Built Around You
          </h2>
          <p 
            ref={descriptionRef}
            className={`text-base lg:text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll animate-scroll-delay-100 ${descriptionVisible ? 'animated' : ''}`}
          >
            We provide end-to-end construction solutions tailored to your vision, budget, and timeline.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            ref={service1Ref}
            className={`text-center animate-on-scroll animate-scroll-delay-200 ${service1Visible ? 'animated' : ''}`}
          >
            <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Residential Construction</h3>
            <p className="body-text text-gray-600 mb-3">Create a home that truly works for your lifestyle.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Custom Home Builds</li>
              <li>• Renovations & Extensions</li>
              <li>• Kitchen & Bathroom Upgrades</li>
            </ul>
          </div>
          
          <div 
            ref={service2Ref}
            className={`text-center animate-on-scroll animate-scroll-delay-300 ${service2Visible ? 'animated' : ''}`}
          >
            <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Commercial Construction</h3>
            <p className="body-text text-gray-600 mb-3">Spaces designed to perform and impress.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Offices & Retail Units</li>
              <li>• Warehouses & Industrial Builds</li>
              <li>• Restaurant Fit-Outs</li>
            </ul>
          </div>
          
          <div 
            ref={service3Ref}
            className={`text-center animate-on-scroll animate-scroll-delay-400 ${service3Visible ? 'animated' : ''}`}
          >
            <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Project Management</h3>
            <p className="body-text text-gray-600 mb-3">Stay stress-free while we handle everything.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Planning & Scheduling</li>
              <li>• Budget Control</li>
              <li>• Quality Oversight</li>
            </ul>
          </div>
          
          <div 
            ref={service4Ref}
            className={`text-center animate-on-scroll animate-scroll-delay-500 ${service4Visible ? 'animated' : ''}`}
          >
            <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Design & Build</h3>
            <p className="body-text text-gray-600 mb-3">One team. One process. Total clarity.</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Architectural Design</li>
              <li>• Engineering</li>
              <li>• Permits & Compliance</li>
              <li>• Full Construction Delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [feature1Ref, feature1Visible] = useIntersectionObserver();
  const [feature2Ref, feature2Visible] = useIntersectionObserver();
  const [feature3Ref, feature3Visible] = useIntersectionObserver();
  const [feature4Ref, feature4Visible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();
  const [stat1Ref, stat1Visible] = useIntersectionObserver();
  const [stat2Ref, stat2Visible] = useIntersectionObserver();
  const [stat3Ref, stat3Visible] = useIntersectionObserver();
  const [stat4Ref, stat4Visible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-white" aria-labelledby="why-choose-heading">
      <div className="w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              id="why-choose-heading"
              ref={titleRef}
              className={`text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left animate-on-scroll ${titleVisible ? 'animated' : ''}`}
            >
              Why Choose MannBuild?
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center lg:text-left">Experience You Can Rely On. Results You'll Be Proud Of.</p>
            <div className="space-y-6">
              <div 
                ref={feature1Ref}
                className={`flex items-start animate-on-scroll animate-scroll-delay-200 ${feature1Visible ? 'animated' : ''}`}
              >
                <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
                  <p className="body-text text-gray-600">Proven success across hundreds of projects.</p>
                </div>
              </div>
              
              <div 
                ref={feature2Ref}
                className={`flex items-start animate-on-scroll animate-scroll-delay-300 ${feature2Visible ? 'animated' : ''}`}
              >
                <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Uncompromising Quality</h3>
                  <p className="body-text text-gray-600">We build it right — no shortcuts.</p>
                </div>
              </div>
              
              <div 
                ref={feature3Ref}
                className={`flex items-start animate-on-scroll animate-scroll-delay-400 ${feature3Visible ? 'animated' : ''}`}
              >
                <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">On-Time, On-Budget Delivery</h3>
                  <p className="body-text text-gray-600">No surprises. Just results.</p>
                </div>
              </div>
              
              <div 
                ref={feature4Ref}
                className={`flex items-start animate-on-scroll animate-scroll-delay-500 ${feature4Visible ? 'animated' : ''}`}
              >
                <svg className="w-6 h-6 text-[#00452a] mt-1 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="body-text text-gray-600">Proudly serving the entire Isle of Man.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={statsRef}
            className={`bg-gray-100 rounded-lg p-8 animate-on-scroll animate-scroll-delay-500 ${statsVisible ? 'animated' : ''}`}
          >
            <div className="grid grid-cols-2 gap-8 text-center">
              <div 
                ref={stat1Ref}
                className={`animate-on-scroll animate-scroll-delay-600 ${stat1Visible ? 'animated' : ''}`}
              >
                <div className="text-4xl font-bold text-[#00452a] mb-2">500+</div>
                <p className="body-text text-gray-600">Projects Completed</p>
              </div>
              <div 
                ref={stat2Ref}
                className={`animate-on-scroll animate-scroll-delay-700 ${stat2Visible ? 'animated' : ''}`}
              >
                <div className="text-4xl font-bold text-[#00452a] mb-2">20+</div>
                <p className="body-text text-gray-600">Years Experience</p>
              </div>
              <div 
                ref={stat3Ref}
                className={`animate-on-scroll animate-scroll-delay-800 ${stat3Visible ? 'animated' : ''}`}
              >
                <div className="text-4xl font-bold text-[#00452a] mb-2">100%</div>
                <p className="body-text text-gray-600">Client Satisfaction Focus</p>
              </div>
              <div 
                ref={stat4Ref}
                className={`animate-on-scroll animate-scroll-delay-800 ${stat4Visible ? 'animated' : ''}`}
              >
                <div className="text-4xl font-bold text-[#00452a] mb-2">Full</div>
                <p className="body-text text-gray-600">Island Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [checkmarksRef, checkmarksVisible] = useIntersectionObserver();
  const [buttonsRef, buttonsVisible] = useIntersectionObserver();

  return (
    <section className="relative text-white py-32 lg:py-72" aria-labelledby="hero-heading">
      <div className="absolute inset-0">
        <Image
          src="/isleofman-wideshot-van-02.jpg"
          alt="MannBuild construction van at Isle of Man building site - Professional construction services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative w-full px-8 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 
            id="hero-heading"
            ref={titleRef}
            className={`text-5xl font-bold mb-6 leading-tight animate-on-scroll ${titleVisible ? 'animated' : ''}`}
          >
            Building Dreams Into Reality<br />With Precision You Can Trust
          </h1>
          <p 
            ref={descriptionRef}
            className={`text-lg mb-6 text-gray-100 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
          >
            For over 20 years, MannBuild has delivered high-quality residential and commercial projects across the Isle of Man. From first plans to final handover, we manage every detail — so you don't have to.
          </p>
          <div 
            ref={checkmarksRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 text-left sm:text-center animate-on-scroll animate-scroll-delay-300 ${checkmarksVisible ? 'animated' : ''}`}
          >
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Reliable timelines</span>
            </div>
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-100">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Exceptional craftsmanship</span>
            </div>
          </div>
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate-scroll-delay-400 ${buttonsVisible ? 'animated' : ''}`}
          >
            <Link 
              href="/contact" 
              className="bg-white text-[#00452a] px-8 py-4 body-text font-medium uppercase hover:bg-gray-100 transition-colors text-center"
            >
              Get Your Free Quote Today
            </Link>
            <Link 
              href="/projects" 
              className="border-2 border-white text-white px-8 py-4 body-text font-medium uppercase hover:bg-white hover:text-[#00452a] transition-colors text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [phoneRef, phoneVisible] = useIntersectionObserver();
  const [buttonRef, buttonVisible] = useIntersectionObserver();

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="cta-heading">
      <div className="w-full px-8 text-center">
        <h2 
          id="cta-heading"
          ref={titleRef}
          className={`text-3xl font-bold mb-4 text-gray-900 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Ready to Start Your Project?
        </h2>
        <p 
          ref={descriptionRef}
          className={`text-lg mb-4 text-gray-600 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
        >
          Let's turn your ideas into reality. Get in touch today for a free consultation and no-obligation quote.
        </p>
        <p 
          ref={phoneRef}
          className={`text-2xl font-bold text-[#00452a] mb-6 animate-on-scroll animate-scroll-delay-300 ${phoneVisible ? 'animated' : ''}`}
        >
          📞 07624 435430
        </p>
        <div 
          ref={buttonRef}
          className={`animate-on-scroll animate-scroll-delay-400 ${buttonVisible ? 'animated' : ''}`}
        >
          <Link 
            href="/contact" 
            className="bg-[#00452a] text-white px-8 py-4 body-text font-medium uppercase hover:bg-opacity-90 transition-colors inline-block"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
