'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Merch() {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState<{ [key: number]: number }>({});

  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [beanieRef, beanieVisible] = useIntersectionObserver();
  const [jumperRef, jumperVisible] = useIntersectionObserver();
  const [tshirtRef, tshirtVisible] = useIntersectionObserver();
  const [acquisitionRef, acquisitionVisible] = useIntersectionObserver();
  
  const nextImage = (productId: number, totalImages: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) === totalImages - 1 ? 0 : (prev[productId] || 0) + 1
    }));
  };
  
  const prevImage = (productId: number, totalImages: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) === 0 ? totalImages - 1 : (prev[productId] || 0) - 1
    }));
  };
  const products = [
    {
      id: 1,
      name: "MannBuild Beanie",
      category: "Headwear",
      description: "Premium quality embroidered beanie featuring the MannBuild logo. Keep warm on site with our comfortable, durable beanie. Print on demand - no stock held.",
      features: ["One size fits all", "100% acrylic", "Embroidered logo", "Black with green logo", "Print on demand", "No stock held"],
      available: true,
      image: "/merch/Beanie.jpg"
    },
    {
      id: 2,
      name: "MannBuild Jumper",
      category: "Apparel",
      description: "High-quality jumper perfect for construction site work or casual wear. Professional appearance with MannBuild branding. Print on demand - no stock held.",
      features: ["Sizes S-5XL", "80% cotton, 20% polyester", "Embroidered chest logo", "Dark green with white logo", "Print on demand", "No stock held"],
      available: true,
      images: ["/merch/Jumper.jpg", "/merch/Jumper-Back.jpg"]
    },
    {
      id: 3,
      name: "MannBuild White T-Shirt",
      category: "Apparel",
      description: "Classic white t-shirt featuring MannBuild branding on front and back. Perfect for casual wear or as part of your work uniform. Print on demand - no stock held.",
      features: ["Sizes S-5XL", "100% premium cotton", "Front and back print", "White with green logo", "Print on demand", "No stock held"],
      available: true,
      images: ["/merch/white-top-front.jpg", "/merch/white-top-back.jpg"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          MannBuild Merchandise
        </h1>
        <p 
          ref={descriptionRef}
          className={`body-text text-gray-600 mb-12 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
        >
          Show your MannBuild pride with our quality merchandise. Perfect for team members and supporters.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              ref={product.id === 1 ? beanieRef : product.id === 2 ? jumperRef : tshirtRef}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-${(index + 3) * 100} ${product.id === 1 ? (beanieVisible ? 'animated' : '') : product.id === 2 ? (jumperVisible ? 'animated' : '') : (tshirtVisible ? 'animated' : '')}`}
            >
              <div className="relative w-full h-96 rounded-t-lg overflow-hidden bg-gray-100">
                {product.images ? (
                  <>
                    <Image
                      src={product.images[currentImage[product.id] || 0]}
                      alt={`${product.name} - Image ${currentImage[product.id] || 0 + 1}`}
                      fill
                      className="object-contain"
                    />
                    
                    {/* Slider Controls */}
                    <button
                      onClick={() => prevImage(product.id, product.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                      aria-label="Previous image"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => nextImage(product.id, product.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                      aria-label="Next image"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImage(prev => ({ ...prev, [product.id]: index }))}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            (currentImage[product.id] || 0) === index 
                              ? 'bg-white' 
                              : 'bg-white bg-opacity-50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  {product.available ? (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Available
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <p className="body-text text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center body-text text-gray-600">
                        <svg className="w-4 h-4 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Acquisition Information */}
        <div 
          ref={acquisitionRef}
          className={`bg-[#00452a] text-white p-8 rounded-lg animate-on-scroll animate-scroll-delay-500 ${acquisitionVisible ? 'animated' : ''}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Interested in Our Merchandise?</h2>
          <p className="body-text mb-6">
            Our MannBuild merchandise is available for team members and interested parties. 
            To acquire any of our products, please get in touch with our team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">How to Acquire:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="body-text">Contact our office directly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="body-text">Available for team members and partners</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="body-text">Bulk orders available for companies</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information:</h3>
              <div className="space-y-2">
                <p className="flex items-center body-text">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07624 435430
                </p>
                <p className="flex items-center body-text">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@mannbuild.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => router.push('/contact')}
              className="bg-white text-[#00452a] px-8 py-3 body-text font-medium uppercase hover:bg-gray-100 transition-colors rounded-lg"
            >
              Contact Us About Merchandise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
