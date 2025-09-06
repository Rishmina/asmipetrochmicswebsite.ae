
'use client';

import { useState } from 'react';

export default function ProductsSection() {
  const [activeRPOTab, setActiveRPOTab] = useState('aromatic');

  return (
    <section id="products" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Extensive collection of superior-grade petroleum derivatives engineered for multifaceted industrial and commercial applications across diverse sectors.
          </p>
        </div>

        {/* Base Oil Section */}
        <div id="base-oil" className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Base Oil Formulations</h3>

          {/* Base Oil Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 w-full">
            <h4 className="text-2xl font-bold text-[#DAA520] mb-6 text-center">Base Oil Fundamentals</h4>
            
            {/* Image and Video Side by Side */}
            <div className="flex justify-center gap-4 mb-8">
              {/* Image */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80">
                <img
                  src="/images/baseoilone.jpeg"
                  alt="About Base Oil"
                  className="w-full h-56 object-cover rounded-lg mb-3"
                />
                  <p className="text-gray-800 text-center font-semibold text-sm drop-shadow-sm">Base Oil Manufacturing Process</p>
              </div>
              
              {/* Video */}
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80">
                <video
                  src="/videos/]baseoilvdo.mp4"
                  className="w-full h-56 object-cover rounded-lg mb-3"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                />
                  <p className="text-gray-800 text-center font-semibold text-sm drop-shadow-sm">Base Oil Production Demonstration</p>
              </div>
            </div>

            {/* Content Below Image */}
            <div className="text-center w-full max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Base oil represents the fundamental building block of all lubricant formulations, constituting 70-95% of the final product composition. Engineered through advanced refining processes or sophisticated chemical synthesis, base oils provide the essential viscosity, thermal stability, and lubricating properties that define performance across diverse industrial and automotive applications.
                </p>
                <p className="mb-6">
                  The American Petroleum Institute (API) has established a comprehensive classification system that categorizes base oils into five distinct groups based on critical performance parameters including refining methodology, saturate content, sulfur concentration, and viscosity index. This standardized classification ensures precise selection and optimal performance across all applications.
                </p>
              </div>

              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-4">BASE OIL CLASSIFICATION SYSTEM</h5>
                <div className="mb-6">
                  <img
                    src="/images/gorups.jpg"
                    alt="Base Oil Groups"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>Group I Base Oils:</strong> Traditional solvent-refined formulations engineered for cost-effective general-purpose applications, delivering reliable performance in standard operating conditions with proven track records across multiple industries.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>Group II Base Oils:</strong> Advanced hydroprocessed formulations featuring superior purity levels and enhanced oxidation stability, specifically engineered for modern automotive systems and demanding industrial applications requiring extended service intervals.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>Group III Base Oils:</strong> Premium severely hydrocracked formulations delivering synthetic-grade performance characteristics, engineered for high-temperature environments and applications demanding exceptional thermal stability and extended drain intervals.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>Synthetic Base Oils (Group IV & V):</strong> Cutting-edge formulations including Polyalphaolefins (PAO) and specialized synthetic compounds, engineered for extreme operating conditions, aviation applications, and high-performance systems requiring uncompromising reliability and performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Virgin Oil Gallery */}
          <div className="mb-12 w-full">
            <h4 className="text-2xl font-bold text-[#DAA520] mb-8 text-center">Premium Base Oil Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <img
                src="/images/virginphoto.jpeg"
                alt="Premium Base Oil SN 150"
                className="w-full h-96 object-contain hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out cursor-pointer"
              />
              <img
                src="/images/virginreal.jpeg"
                alt="Premium Base Oil SN 300"
                className="w-full h-96 object-contain hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out cursor-pointer"
              />
              <img
                src="/images/virginreal3.jpeg"
                alt="Premium Base Oil SN 500"
                className="w-full h-96 object-contain hover:scale-110 hover:z-10 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>

          {/* SN 500 Highlight */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-md mb-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-[#DAA520] mb-4">Base Oil SN 500 Specifications</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Base Oil SN 500 represents a premium-grade mineral oil formulation extensively utilized across diverse industrial and automotive applications. Distinguished by its superior viscosity characteristics compared to SN 150 and SN 300 formulations, this heavy-grade base oil delivers enhanced lubricating properties and exceptional consistency. SN 500 is manufactured through advanced solvent refining processes, employing sophisticated purification techniques to eliminate contaminants and optimize performance characteristics.
                </p>

                <h5 className="text-lg font-bold text-gray-900 mb-3">Application Specifications</h5>
                <p className="text-gray-700 mb-4">
                  Base Oil SN 500 constitutes a versatile light-grade formulation with extensive industrial adoption. Technical specifications include kinematic viscosity of 10.1-11 cSt at 100°C and 94-98 cSt at 40°C, ensuring optimal performance across diverse operating conditions.
                </p>
                <ul className="text-gray-700 mb-6">
                  <li className="flex items-start mb-2">
                    <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                    <span>Versatile industrial applications</span>
                  </li>
                </ul>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Viscosity Index:</span>
                    <span className="ml-2 text-[#DAA520]">95-105</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Pour Point:</span>
                    <span className="ml-2 text-[#DAA520]">-9°C max</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Flash Point:</span>
                    <span className="ml-2 text-[#DAA520]">230°C min</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="font-semibold text-gray-900">Color:</span>
                    <span className="ml-2 text-[#DAA520]">L2.5 max</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/baseoil sn 50.jpg"
                  alt="SN 500 Base Oil"
                  className="w-full h-80 object-contain  hover:rotate-2 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Base Oil Groups */}
          <div className="space-y-16">
            {/* Group I */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/images/sn500.jpeg"
                    alt="Group I Base Oil"
                    className="w-full h-80 object-contain hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-lg">I</span>
                    </div>
                    <h5 className="text-3xl font-bold text-gray-900">GROUP I Base Oil</h5>
                  </div>
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Conventional Base Oil Formulation</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    These traditional, solvent-refined formulations represent the cornerstone of industrial lubrication, engineered for cost-effective general-purpose applications and economically viable solutions. Group I base oils constitute the most extensively utilized category globally, delivering dependable performance characteristics for fundamental industrial and automotive lubricant compositions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Saturates:</span>
                      <span className="ml-2 text-red-600 font-bold">&lt; 90%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Viscosity Index:</span>
                      <span className="ml-2 text-red-600 font-bold">80-120</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Sulfur Content:</span>
                      <span className="ml-2 text-red-600 font-bold">&gt; 300 ppm</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Applications:</span>
                      <span className="ml-2 text-gray-700">Versatile Applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group II */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <img
                    src="/images/group1.jpeg"
                    alt="Group II Base Oil"
                    className="w-full h-80 object-contain hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">II</span>
                    </div>
                    <h5 className="text-3xl font-bold text-gray-900">GROUP II Base Oil</h5>
                  </div>
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Hydroprocessed Formulation</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Distinguished by superior purity levels and exceptional oxidation stability, these formulations are extensively employed in automotive lubricants and industrial fluid applications. Group II base oils deliver enhanced performance characteristics through sophisticated hydroprocessing technology and advanced refining methodologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Saturates:</span>
                      <span className="ml-2 text-blue-600 font-bold">&gt; 90%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Viscosity Index:</span>
                      <span className="ml-2 text-blue-600 font-bold">80-120</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Sulfur Content:</span>
                      <span className="ml-2 text-blue-600 font-bold">&lt; 300 ppm</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Applications:</span>
                      <span className="ml-2 text-gray-700">Automotive Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group III */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                      src="/images/group3.jpeg"
                       alt="Group III Base Oil"
                    className="w-full h-80 object-contain hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">III</span>
                    </div>
                    <h5 className="text-3xl font-bold text-gray-900">GROUP III Base Oil</h5>
                  </div>
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Synthetic-Grade Formulation</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Frequently classified as synthetic-grade formulations, these oils deliver exceptional thermal stability and superior performance characteristics in elevated temperature environments. These formulations undergo severe hydrocracking processes to achieve premium quality specifications and enhanced performance attributes.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Saturates:</span>
                      <span className="ml-2 text-green-600 font-bold">&gt; 90%</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Viscosity Index:</span>
                      <span className="ml-2 text-green-600 font-bold">&gt; 120</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Sulfur Content:</span>
                      <span className="ml-2 text-green-600 font-bold">&lt; 300 ppm</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Applications:</span>
                      <span className="ml-2 text-gray-700">High-Performance Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group IV & V */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <img
                      src="/images/gorup4.jpeg"
                      alt="Group IV/V Base Oil"
                    className="w-full h-80 object-contain hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-lg">IV/V</span>
                    </div>
                    <h5 className="text-3xl font-bold text-gray-900">GROUP IV & V Base Oil</h5>
                  </div>
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Full Synthetic Formulations (PAO & Specialized Compounds)</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Delivering unparalleled performance characteristics, these formulations are engineered for specialized applications including aviation systems, high-performance engines, and extreme operating conditions. Group IV encompasses PAO (Polyalphaolefin) formulations while Group V incorporates all other synthetic base stock derivatives and specialized compounds.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Type:</span>
                      <span className="ml-2 text-purple-600 font-bold">PAO & Synthetic Compounds</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Performance:</span>
                      <span className="ml-2 text-purple-600 font-bold">Premium-Grade</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Temperature Range:</span>
                      <span className="ml-2 text-purple-600 font-bold">Extreme Conditions</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Applications:</span>
                      <span className="ml-2 text-gray-700">Specialized Applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RPO Oil Section */}
        <div id="rpo-oil" className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Rubber Process Oil (RPO) Formulations</h3>

          {/* RPO Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-16 mb-12">
            <h4 className="text-2xl font-bold text-[#DAA520] mb-6 text-center">RUBBER PROCESS OIL FUNDAMENTALS</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start mb-8">
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4 text-lg">
                  Rubber Process Oil represents a highly sophisticated formulation engineered for the rubber manufacturing industry to enhance processability, optimize elasticity characteristics, and elevate the physical properties of rubber compounds. This specialized oil plays a critical role in achieving optimal cost efficiency and superior product performance across diverse applications—from precision rubber components to heavy-duty industrial tire manufacturing.
                </p>
                <p className="mb-4 text-lg">
                  Functioning as both a filler and plasticizer, RPO effectively reduces the viscosity of rubber blends, facilitating enhanced mixing and shaping capabilities while preserving desired mechanical characteristics. This formulation significantly improves elasticity properties and reduces manufacturing costs without compromising performance integrity.
                </p>
                <p className="mb-4 text-lg">
                  RPO formulations typically exhibit kinematic viscosity specifications of 20–50 cSt @ 100°C, varying according to grade classification (light or heavy), with flash point characteristics around 215°C and density specifications near 1.01 SG at 15°C.
                </p>
                <p className="mb-4 text-lg">
                  Contemporary formulations, including our premium offerings, incorporate reduced levels of polynuclear aromatic (PNA) compounds, ensuring enhanced safety profiles and environmental compatibility—while maintaining full compatibility with aromatic rubber applications.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/images/rpo 3.jpeg"
                  alt="Rubber Process Oil Formulation"
                  className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                />
                <img
                  src="/images/rpoimageasmi.jpeg"
                  alt="RPO Manufacturing Process"
                  className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed mb-8">
              <p className="mb-4 text-lg">
                Rubber compounding operations depend extensively on RPO formulations in conjunction with rubber polymers, reinforcing fillers, softeners, stabilizers, and processing aids. For over a century, mineral oils—whether paraffinic, naphthenic, or aromatic—have demonstrated their essential role as softeners and extender oils in sophisticated rubber formulations.
              </p>
              <p className="mb-6 text-lg">
                At ASMI ENERGY FZE, we deliver premium-grade Aromatic RPO formulations with optimized viscosity specifications (30–35 cSt @ 40°C), engineered for applications including tire manufacturing, rubber molding, automotive components, footwear production, and advanced diesel or petroleum blending operations.
              </p>
            </div>

            {/* RPO Applications Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
              <h4 className="text-2xl font-bold text-[#DAA520] mb-8 text-center">RPO INDUSTRIAL APPLICATIONS</h4>

              <div className="space-y-16">
                {/* Oil Blending & Refining */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-oil-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Oil Blending & Refining</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO serves as a crucial component in oil blending and refining processes, acting as a base feedstock for white oil manufacturing due to its excellent solvency properties.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>White Oil Blending (Base Feedstock):</strong> A feedstock for white oil manufacturing due to its solvency</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Oil%20refinery%20blending%20operations%20with%20RPO%20rubber%20process%20oil%2C%20petroleum%20refining%20facility%20with%20blending%20tanks%20and%20distillation%20columns%2C%20white%20oil%20manufacturing%20process%2C%20industrial%20oil%20processing%20equipment&width=500&height=400&seq=rpo-oil-blending&orientation=landscape"
                        alt="Oil Blending & Refining"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Chemical Industries */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-flask-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Chemical Industries</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        In chemical industries, RPO functions as a versatile solvent and carrier oil, serving as a plasticizer and intermediate component in various chemical synthesis processes.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Solvent/Carrier Oil:</strong> Acts as plasticizer and intermediate in chemical synthesis</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Chemical%20industry%20facility%20using%20RPO%20as%20solvent%20and%20carrier%20oil%2C%20chemical%20synthesis%20laboratory%20with%20reaction%20vessels%2C%20industrial%20chemical%20processing%20plant%2C%20plasticizer%20manufacturing%20with%20RPO&width=500&height=400&seq=rpo-chemical-industries&orientation=landscape"
                        alt="Chemical Industries"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Fuel & Energy Sector */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-gas-station-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Fuel & Energy Sector</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO serves as a fuel oil component in the energy sector, particularly in countries with strict refining requirements where it&apos;s blended with other fuel components.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Fuel Oil Component:</strong> In some countries with strict refining requirements, it&apos;s blended</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Fuel%20and%20energy%20sector%20facility%20using%20RPO%20oil%20component%2C%20petroleum%20fuel%20blending%20operations%2C%20energy%20sector%20storage%20tanks%20and%20refining%20equipment%2C%20industrial%20fuel%20processing%20plant&width=500&height=400&seq=rpo-fuel-energy&orientation=landscape"
                        alt="Fuel & Energy Sector"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Fire Retardant & Insulation Products */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-fire-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Fire Retardant & Insulation Products</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO is utilized in the production of fire-retardant and insulation products, including insulating compounds and fire-resistant hydraulic fluids for safety-critical applications.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Insulating compounds</strong></span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Fire-resistant hydraulic fluids</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Industrial%20insulation%20materials%20and%20fire%20retardant%20products%20manufacturing%20facility%2C%20thermal%20insulation%20panels%20and%20fire-resistant%20coatings%20production%2C%20professional%20safety%20equipment%20manufacturing%20with%20fire%20suppression%20systems%2C%20industrial%20fire%20safety%20materials%20assembly%20line&width=500&height=400&seq=rpo-fire-retardant-new&orientation=landscape"
                        alt="Fire Retardant & Insulation"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Bitumen and Asphalt Industry */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-road-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Bitumen and Asphalt Industry</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        In the bitumen and asphalt industry, RPO functions as a viscosity modifier and softening agent, improving the workability and performance characteristics of asphalt mixtures.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Viscosity Modifier</strong></span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Softening Agent</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Bitumen%20and%20asphalt%20industry%20using%20RPO%20oil%20as%20viscosity%20modifier%2C%20road%20construction%20with%20asphalt%20mixing%20plant%2C%20bitumen%20processing%20facility%2C%20highway%20construction%20with%20hot%20mix%20asphalt&width=500&height=400&seq=rpo-bitumen-asphalt&orientation=landscape"
                        alt="Bitumen and Asphalt"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Textile and Leather Industry */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-shirt-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Textile and Leather Industry</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO serves as a lubricant for textile machinery and plays a role in leather tanning processes, ensuring smooth operation and quality finishing in both industries.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Lubricant for textile machinery</strong></span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Tanning agent for leather</strong></span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Textile%20and%20leather%20industry%20using%20RPO%20oil%20as%20lubricant%2C%20textile%20machinery%20manufacturing%20with%20industrial%20looms%2C%20leather%20tanning%20process%20with%20chemical%20treatments%2C%20textile%20processing%20facility&width=500&height=400&seq=rpo-textile-leather&orientation=landscape"
                        alt="Textile and Leather"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Grease Manufacturing */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-drop-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Grease Manufacturing</h5>
                  </div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                    <div className="xl:order-2">
                      <img
                        src="https://readdy.ai/api/search-image?query=Natural%20organic%20green%20grease%20in%20glass%20jars%20and%20containers%2C%20natural%20thick%20emerald%20green%20lubricating%20grease%20with%20organic%20consistency%2C%20natural%20green%20grease%20formulation%20in%20clean%20laboratory%20setting%2C%20organic%20green%20grease%20samples%20with%20natural%20thick%20texture%20in%20pristine%20white%20containers&width=500&height=400&seq=natural-green-grease-manufacturing&orientation=landscape"
                        alt="Natural Green Grease Manufacturing"
                        className="w-full h-80 object-contain object-top  hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="xl:order-1">
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO serves as a crucial base oil component in grease manufacturing, providing the essential lubrication properties and consistency required for high-quality automotive and industrial greases.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Base oil component for grease production:</strong> Essential ingredient in automotive and industrial grease formulations</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Multi-purpose grease applications:</strong> Used in bearing lubrication, chassis grease, and heavy-duty industrial applications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>


                {/* Construction and Additive Manufacturing */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-building-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Construction and Additive Manufacturing</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        RPO is used as an additive in adhesives and sealants for construction applications, particularly in industries where aromatic solvency is required, such as industrial soap and floor wax manufacturing.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Additive in adhesives and sealants:</strong> In industries where aromatic solvency is required (industrial soap, floor wax)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Construction%20and%20additive%20manufacturing%20with%20RPO%20oil%20in%20adhesives%2C%20industrial%20soap%20manufacturing%20facility%2C%20floor%20wax%20production%20with%20aromatic%20solvency%2C%20construction%20sealants%20manufacturing&width=500&height=400&seq=rpo-construction-additive&orientation=landscape"
                        alt="Construction and Additive Manufacturing"
                        className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Manufacturing and Industrial Applications */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-6">
                      <i className="ri-tools-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h5 className="text-2xl font-bold text-gray-900">Manufacturing and Industrial Applications</h5>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        RPO plays a crucial role in various manufacturing and industrial applications, particularly in rubber-based products where it enhances processing efficiency and final product quality.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Automobile Tires:</strong> Essential component for tire manufacturing and performance enhancement</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Rubber Shock Absorbers:</strong> Improves durability and performance in automotive applications</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Sponge Rubber Creation:</strong> Facilitates processing and enhances foam structure</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Latex Product Manufacturing:</strong> Improves flow properties and processing efficiency</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Rubber Tile Production:</strong> Enhances moldability and surface finish quality</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Footwear:</strong> Critical for rubber sole manufacturing and comfort enhancement</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span><strong>Grease Manufacturing:</strong> Essential base oil component for automotive and industrial grease formulations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                        {/* 4-Image Manufacturing Collage */}
                        <div className="grid grid-cols-2 gap-2 gap-x-0 h-80">
                        {/* Top left - Automobile Tires */}
                        <div className="relative overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=Automobile%20tire%20manufacturing%20with%20RPO%20rubber%20process%20oil%2C%20modern%20tire%20production%20facility%20with%20black%20rubber%20tires%2C%20automotive%20tire%20assembly%20line%20with%20industrial%20machinery%2C%20high-quality%20tire%20manufacturing%20process&width=200&height=190&seq=mfg-auto-tires&orientation=squarish"
                            alt="Automobile Tires Manufacturing"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Top right - Shock Absorbers */}
                        <div className="relative overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=Rubber%20shock%20absorbers%20manufacturing%20with%20RPO%20oil%2C%20automotive%20shock%20absorber%20production%20line%2C%20industrial%20rubber%20damper%20components%2C%20precision%20automotive%20suspension%20parts%20manufacturing&width=200&height=190&seq=mfg-shock-absorbers&orientation=squarish"
                            alt="Rubber Shock Absorbers"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Bottom left - Sponge Rubber & Latex */}
                        <div className="relative overflow-hidden">
                          <img
                            src="\images\rpo oil tyre .jpeg"
                            alt="Sponge Rubber & Latex Products"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Bottom right - Footwear & Rubber Tiles */}
                        <div className="relative overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=Rubber%20footwear%20and%20tile%20manufacturing%20with%20RPO%20oil%2C%20industrial%20shoe%20sole%20production%2C%20rubber%20flooring%20tile%20manufacturing%20facility%2C%20footwear%20factory%20with%20rubber%20processing%20equipment&width=200&height=190&seq=mfg-footwear-tiles&orientation=squarish"
                            alt="Footwear & Rubber Tiles"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Green Lithium Grease Manufacturing with RPO */}
            <div className="relative bg-cover bg-center bg-no-repeat rounded-2xl p-8 mb-8 overflow-hidden" style={{
              backgroundImage: `url('/images/greasebackgorund.jpg')`
            }}>
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/70"></div>
              
              {/* Content with white text for visibility */}
              <div className="relative z-10 text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-2xl">GREEN LITHIUM GREASE MANUFACTURING WITH RUBBER PROCESS OIL (RPO)</h4>
                <p className="text-base text-white drop-shadow-lg">Discover how RPO enhances the production of high-performance green lithium grease</p>
              </div>

                            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h5 className="text-xl font-bold text-white mb-6 drop-shadow-lg">Role of RPO in Grease Manufacturing:</h5>
                  <ul className="space-y-4 text-white drop-shadow-md">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Base Oil Component:</strong> Heavy Aromatic RPO serves as the primary base oil for the grease, giving it viscosity and lubricating properties.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Improved Thickener Dispersion:</strong> RPO helps lithium soap thickeners mix evenly, ensuring a uniform, stable grease structure.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Enhanced Lubricity:</strong> Reduces friction and wear in high-pressure and high-temperature applications.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Cost Optimization:</strong> Aromatic RPO offers a cost-effective alternative to expensive base oils while maintaining performance.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Oxidation Resistance:</strong> The right RPO grade increases grease shelf life by resisting oxidation.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-300 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Temperature Tolerance:</strong> Allows grease to work efficiently across a wide temperature range, perfect for automotive and industrial machinery.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-400 mt-1 mr-3 w-5 h-5 flex items-center justify-center drop-shadow-md"></i>
                      <span><strong className="text-green-300">Color Blending:</strong> Acts as a carrier for pigments to achieve the distinct green color without affecting lubrication quality.</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80">
                    <video
                      src="/videos/automativebearing.mp4"
                      className="w-full h-56 object-cover rounded-lg mb-3"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <p className="text-gray-800 text-center font-semibold text-sm drop-shadow-sm">Automotive Bearings - Grease Application</p>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80">
                    <video
                      src="/videos/machine vdo.mp4"
                      className="w-full h-56 object-cover rounded-lg mb-3"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                    />
                    <p className="text-gray-800 text-center font-semibold text-sm drop-shadow-sm">Industrial Machinery - Grease Application</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                <h5 className="text-xl font-bold mb-6 text-center">Applications of RPO-based Lithium Grease:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <i className="ri-car-line text-3xl text-green-300 mb-3"></i>
                    <p className="font-semibold">Automotive bearings & chassis lubrication</p>
                  </div>
                  <div className="text-center">
                    <i className="ri-tools-line text-3xl text-green-300 mb-3"></i>
                    <p className="font-semibold">Industrial machinery</p>
                  </div>
                  <div className="text-center">
                    <i className="ri-plant-line text-3xl text-green-300 mb-3"></i>
                    <p className="font-semibold">Agriculture equipment</p>
                  </div>
                  <div className="text-center">
                    <i className="ri-truck-line text-3xl text-green-300 mb-3"></i>
                    <p className="font-semibold">Mining and heavy-duty machinery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits Summary - Moved after Lithium Grease Section */}
            <div className="mt-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-xl p-8 shadow-lg">
              <h5 className="text-xl font-bold text-white mb-6 text-center">Key Benefits of RPO</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-settings-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Processing Aid</h6>
                  <p className="text-white/90 text-sm">Reduces viscosity for easier processing and molding</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-drop-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Plasticizer</h6>
                  <p className="text-white/90 text-sm">Improves flexibility and workability of rubber compounds</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-bubble-chart-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Filler Dispersion</h6>
                  <p className="text-white/90 text-sm">Enhances distribution of fillers and additives</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-water-flash-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Softening Agent</h6>
                  <p className="text-white/90 text-sm">Acts as softener in rubber compound production</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-flask-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Diluent</h6>
                  <p className="text-white/90 text-sm">Functions as carrier fluid and diluent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-oil-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <h6 className="font-semibold text-white mb-2">Lubricant</h6>
                  <p className="text-white/90 text-sm">Provides lubrication during rubber processing</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}