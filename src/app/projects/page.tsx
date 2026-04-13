'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Projects() {
  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "Isle of Man Development",
      category: "Commercial",
      description: "Premium commercial development showcasing the beauty and infrastructure of the Isle of Man.",
      status: "Completed",
      image: "/projects/Isle-of-Man-Development.jpg"
    },
    {
      title: "Modern Office Complex",
      category: "Commercial",
      description: "State-of-the-art office building with sustainable design features and modern amenities.",
      status: "Completed",
      image: "/projects/Modern-Office-Complex.jpg"
    },
    {
      title: "Luxury Residential Development",
      category: "Residential",
      description: "High-end residential community featuring custom homes and premium amenities.",
      status: "In Progress",
      image: "/projects/Luxury-Residential-Development.jpg"
    },
    {
      title: "Home Renovation Project",
      category: "Residential",
      description: "Complete home renovation including kitchen, bathrooms, and exterior updates.",
      status: "Completed",
      image: "/projects/Home-Renovation-Project.jpg"
    },
    {
      title: "Warehouse Facility",
      category: "Commercial",
      description: "Large-scale warehouse with office space and loading facilities.",
      status: "Planning",
      image: "/projects/Warehouse-Facility.jpg"
    },
    {
      title: "Custom Beach House",
      category: "Residential",
      description: "Luxury beachfront property with ocean views and premium finishes.",
      status: "In Progress",
      image: "/projects/Custom-Beach-House.jpg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Create refs for each project card
  const projectRefs = projects.map(() => {
    const [ref, visible] = useIntersectionObserver();
    return { ref, visible };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Our Projects
        </h1>
        <p 
          ref={descriptionRef}
          className={`body-text text-gray-600 mb-12 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
        >
          A showcase of our completed and ongoing construction projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={projectRefs[index].ref}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-${(index + 3) * 100} ${projectRefs[index].visible ? 'animated' : ''}`}
            >
              <div className="h-48 bg-gray-200 rounded-t-lg relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} construction project by MannBuild on Isle of Man`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {/* Status Badge on Image */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="body-text text-[#00452a] font-medium mb-2">{project.category}</p>
                <p className="body-text text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`mt-16 text-center animate-on-scroll animate-scroll-delay-1000 ${ctaVisible ? 'animated' : ''}`}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="body-text text-gray-600 mb-6">Let's discuss how we can bring your vision to life.</p>
          <button className="bg-[#00452a] text-white px-8 py-3 body-text font-medium uppercase hover:bg-opacity-90 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
