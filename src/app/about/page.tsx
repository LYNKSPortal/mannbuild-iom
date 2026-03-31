export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About MannBuild</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              MannBuild has been a trusted name in construction for over two decades. Founded on principles of quality, integrity, and innovation, we've built our reputation one project at a time.
            </p>
            <p className="text-gray-600 mb-4">
              From residential homes to commercial complexes, our commitment to excellence has never wavered. We believe that great construction is not just about buildings—it's about building relationships and communities.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
            </p>
            <p className="text-gray-600">
              We strive to be the construction partner of choice for clients who value craftsmanship, reliability, and innovative solutions.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Quality</h3>
              <p className="text-gray-600">Never compromise on quality. Every project deserves our best work.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Integrity</h3>
              <p className="text-gray-600">Honest communication and transparent processes build lasting trust.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#00452a] mb-3">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and methods for better results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
