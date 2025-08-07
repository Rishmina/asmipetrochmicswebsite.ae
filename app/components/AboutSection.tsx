
'use client';

export default function AboutSection() {
  return (
    <section className="py-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About ASMI ENERGY FZE</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A leading petrochemical trading company specializing in premium oil solutions across Asia and the Middle East & North Africa (MENA) region.
          </p>
        </div>

        <div className="mb-16">
          {/* Image Collage */}
          <div className="mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto">
                {/* Top left - Base Oil */}
                <div className="relative overflow-hidden rounded-lg h-40 md:h-56">
                  <img
                    src="/images/base.jpeg"
                    alt="Base Oil Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top right - Tyre Manufacturing */}
                <div className="relative overflow-hidden rounded-lg h-40 md:h-56">
                  <img
                    src="/images/aboutsection 3.jpeg"
                    alt="Tyre Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom left - Base Oil Lab */}
                <div className="relative overflow-hidden rounded-lg h-40 md:h-56">
                  <img
                    src="/images/rcbaeoil.jpeg"
                    alt="Base Oil Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom right - Tyre Manufacturing */}
                <div className="relative overflow-hidden rounded-lg h-40 md:h-56">
                  <img
                    src="/images/tyre 8.jpeg"
                    alt="Tyre Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content below image */}
          <div className="w-full max-w-6xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              ASMI ENERGY FZE stands at the forefront of petrochemical trade, connecting suppliers and buyers across diverse markets with unparalleled expertise and reliability. Our commitment to excellence has established us as a trusted partner in the global energy sector.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With deep industry knowledge and strategic partnerships throughout Asia and MENA, we facilitate seamless transactions while ensuring the highest quality standards for all our petroleum products.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our comprehensive portfolio includes premium base oils and specialized RPO oils, serving industries from automotive manufacturing to rubber production with tailored solutions.
            </p>
          </div>
        </div>

        {/* Key Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-global-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
            <p className="text-white/90">
              Extensive network spanning Asia and MENA regions with strategic partnerships worldwide.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
            <p className="text-white/90">
              Rigorous quality control and international standards compliance for all petroleum products.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
            <p className="text-white/90">
              Dedicated team of industry experts providing technical guidance and market insights.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-truck-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Reliable Logistics</h3>
            <p className="text-white/90">
              Efficient supply chain management ensuring timely delivery and optimal cost solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
