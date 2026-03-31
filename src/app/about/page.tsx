'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function About() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [storyRef, storyVisible] = useIntersectionObserver();
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [valuesRef, valuesVisible] = useIntersectionObserver();
  const [qualityRef, qualityVisible] = useIntersectionObserver();
  const [integrityRef, integrityVisible] = useIntersectionObserver();
  const [innovationRef, innovationVisible] = useIntersectionObserver();

  return (
    <div className="bg-gray-50">
      <div className="w-full px-8 pt-16 pb-12">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          About MannBuild
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div 
            ref={storyRef}
            className={`animate-on-scroll animate-scroll-delay-200 ${storyVisible ? 'animated' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="body-text text-gray-600 mb-4">
              MannBuild has been a trusted name in construction for over two decades. Founded on principles of quality, integrity, and innovation, we've built our reputation one project at a time.
            </p>
            <p className="body-text text-gray-600 mb-4">
              From residential homes to commercial complexes, our commitment to excellence has never wavered. We believe that great construction is not just about buildings—it's about building relationships and communities.
            </p>
          </div>
          
          <div 
            ref={missionRef}
            className={`animate-on-scroll animate-scroll-delay-300 ${missionVisible ? 'animated' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="body-text text-gray-600 mb-4">
              To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
            </p>
            <p className="body-text text-gray-600">
              We strive to be the construction partner of choice for clients who value craftsmanship, reliability, and innovative solutions.
            </p>
          </div>
        </div>

        <div 
          ref={valuesRef}
          className={`bg-white p-6 rounded-lg shadow-sm animate-on-scroll animate-scroll-delay-400 ${valuesVisible ? 'animated' : ''}`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={qualityRef}
              className={`text-center animate-on-scroll animate-scroll-delay-500 ${qualityVisible ? 'animated' : ''}`}
            >
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Quality</h3>
              <p className="body-text text-gray-600">Never compromise on quality. Every project deserves our best work.</p>
            </div>
            <div 
              ref={integrityRef}
              className={`text-center animate-on-scroll animate-scroll-delay-600 ${integrityVisible ? 'animated' : ''}`}
            >
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Integrity</h3>
              <p className="body-text text-gray-600">Honest communication and transparent processes build lasting trust.</p>
            </div>
            <div 
              ref={innovationRef}
              className={`text-center animate-on-scroll animate-scroll-delay-700 ${innovationVisible ? 'animated' : ''}`}
            >
              <div className="bg-[#00452a] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Innovation</h3>
              <p className="body-text text-gray-600">Embracing new technologies and methods for better results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
