
'use client';

import { useState } from 'react';

export default function ProductsSection() {
  const [activeRPOTab, setActiveRPOTab] = useState('aromatic');

  return (
    <section id="products" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive range of high-quality petroleum products designed for diverse industrial applications.
          </p>
        </div>

        {/* Base Oil Section */}
        <div id="base-oil" className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Base Oil Products</h3>

          {/* Base Oil Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12 w-full">
            <h4 className="text-2xl font-bold text-[#DAA520] mb-6 text-center">About Base Oil</h4>
            
            {/* Image First */}
            <div className="flex justify-center mb-8">
                              <div className="max-w-2xl">
                  <img
                    src="/images/baseoilone.jpeg"
                    alt="About Base Oil"
                    className="w-full h-80 object-cover object-top rounded-xl shadow-lg hover:scale-105 transition-all duration-500"
                  />
                </div>
            </div>

            {/* Content Below Image */}
            <div className="text-center w-full max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Base oil is the primary component of lubricants and is derived from refining crude oil or through chemical synthesis. It serves as the foundation for engine oils, industrial lubricants, and other specialty fluids. Base oils make up around 70-90% of the final lubricant formulation, with the remaining portion consisting of performance-enhancing additives.
                </p>
                <p className="mb-6">
                  On the basis of the refining method and key base oil properties such as viscosity, amount of saturates and Sulphur content, the American Petroleum Institute (API) has classified base oils into five major groups – Group I, II, III, IV and V.
                </p>
              </div>

              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-4">TYPES OF BASE OIL</h5>
                <div className="mb-6">
                  <img
                    src="/images/gorups.jpg"
                    alt="Base Oil Groups"
                    className="w-full max-w-lg mx-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>1. Group I Base Oils:</strong> These traditional, solvent-refined oils are ideal for general-purpose applications and cost-sensitive solutions.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>2. Group II Base Oils:</strong> Known for their higher purity and oxidation stability, these oils are widely used in automotive lubricants and industrial fluids.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>3. Group III Base Oils:</strong> Often categorized as synthetic-grade oils, they provide excellent thermal stability and performance in high-temperature environments.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p><strong>4. Synthetic Oils (Group IV and V):</strong> Offering unmatched performance, these oils cater to specialized applications such as aviation, high-performance engines, and extreme operating conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SN 500 Highlight */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-md mb-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-[#DAA520] mb-4">What is Base Oil SN 500?</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Base oil SN 500 is a type of mineral oil that is commonly used as a lubricant in various industrial and automotive applications. It is a heavier grade than SN 150 and SN 300 base oils, with a higher viscosity and thicker consistency. SN 500 base oil is produced by the refining of crude oil through a process known as solvent refining, which involves the use of solvents to remove impurities and improve the oil&apos;s properties.
                </p>

                <h5 className="text-lg font-bold text-gray-900 mb-3">Usages of Base Oil SN 500</h5>
                <p className="text-gray-700 mb-4">
                  Base Oil SN 500 is a light grade base oil that is the most widely used. It has viscosity 10,1-11 cSt at 100C and 94-98 cSt at 40C.
                </p>
                <ul className="text-gray-700 mb-6">
                  <li className="flex items-start mb-2">
                    <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                    <span>General-purpose applications</span>
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
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Conventional Base Oil</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    These traditional, solvent-refined oils are ideal for general-purpose applications and cost-sensitive solutions. Group I base oils are the most commonly used type worldwide, offering reliable performance for basic industrial and automotive lubricant formulations.
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
                      <span className="ml-2 text-gray-700">General Purpose</span>
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
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Hydroprocessed Oil</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Known for their higher purity and oxidation stability, these oils are widely used in automotive lubricants and industrial fluids. Group II base oils offer improved performance characteristics through advanced hydroprocessing technology.
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
                      <span className="ml-2 text-gray-700">Automotive</span>
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
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Synthetic-Grade Oil</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Often categorized as synthetic-grade oils, they provide excellent thermal stability and performance in high-temperature environments. These oils undergo severe hydrocracking to achieve superior quality characteristics.
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
                      <span className="ml-2 text-gray-700">High Performance</span>
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
                  <h6 className="text-xl font-semibold text-[#DAA520] mb-4">Full Synthetic (PAO & Others)</h6>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Offering unmatched performance, these oils cater to specialized applications such as aviation, high-performance engines, and extreme operating conditions. Group IV includes PAO (Polyalphaolefin) while Group V covers all other synthetic base stocks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Type:</span>
                      <span className="ml-2 text-purple-600 font-bold">PAO & Synthetic</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Performance:</span>
                      <span className="ml-2 text-purple-600 font-bold">Premium</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Temperature Range:</span>
                      <span className="ml-2 text-purple-600 font-bold">Extreme</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <span className="font-semibold text-gray-900">Applications:</span>
                      <span className="ml-2 text-gray-700">Specialized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RPO Oil Section */}
        <div id="rpo-oil" className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">RPO (Rubber Process Oil)</h3>

          {/* RPO Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-16 mb-12">
            <h4 className="text-2xl font-bold text-[#DAA520] mb-6 text-center">WHAT IS RPO</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start mb-8">
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4 text-lg">
                  Rubber Process Oil is a highly specialized formulation used in the rubber manufacturing industry to improve processability, optimize elasticity, and enhance the physical properties of rubber compounds. It plays a vital role in both cost efficiency and product performance across a wide range of applications—from simple rubber bands to heavy-duty tires for industrial machinery.
                </p>
                <p className="mb-4 text-lg">
                  Functioning as both a filler and plasticizer, RPO reduces the viscosity of rubber blends, allowing for easier mixing and shaping while maintaining desired mechanical characteristics. It also helps improve elasticity and reduces manufacturing costs without compromising performance.
                </p>
                <p className="mb-4 text-lg">
                  RPO typically features a kinematic viscosity of 20–50 cSt @ 100°C, depending on the grade (light or heavy), and a flash point around 215°C, with a density near 1.01 SG at 15°C.
                </p>
                <p className="mb-4 text-lg">
                  Modern formulations, like ours, contain reduced levels of polynuclear aromatic (PNA) compounds, making them safer and environmentally friendlier—while remaining fully compatible with aromatic rubber applications.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/images/rpo 3.jpeg"
                  alt="What is RPO Oil"
                  className="w-full max-w-sm h-80 object-contain rounded-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed mb-8">
              <p className="mb-4 text-lg">
                Rubber compounding relies heavily on RPO alongside rubber polymers, reinforcing fillers, softeners, stabilizers, and processing aids. For over a century, mineral oils—whether paraffinic, naphthenic, or aromatic—have proven essential as softeners and extender oils in rubber formulations.
              </p>
              <p className="mb-6 text-lg">
                At ASMI ENERGY FZE, we offer high-quality Aromatic RPO with optimized viscosity (30–35 cSt @ 40°C), suitable for applications like tire manufacturing, rubber molding, automotive parts, footwear, and even diesel or petroleum blending.
              </p>
            </div>

            {/* RPO Applications Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
              <h4 className="text-2xl font-bold text-[#DAA520] mb-8 text-center">APPLICATION OF RPO</h4>

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

              {/* Key Benefits Summary */}
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

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="text-center py-8 bg-gradient-to-r from-gray-50 to-gray-100">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">Explore the Range of RPO Grades We Offer</h4>
                <p className="text-lg text-gray-600">Choose from our comprehensive range of specialized rubber process oils</p>
              </div>

              <div className="border-b border-gray-200">
                <nav className="flex justify-center">
                  <button
                    onClick={() => setActiveRPOTab('aromatic')}
                    className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                      activeRPOTab === 'aromatic'
                        ? 'text-[#DAA520] border-b-2 border-[#DAA520]'
                        : 'text-gray-500 hover:text-[#DAA520]'
                    }`}
                  >
                    Aromatic RPO
                  </button>
                  <button
                    onClick={() => setActiveRPOTab('paraffinic')}
                    className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                      activeRPOTab === 'paraffinic'
                        ? 'text-[#DAA520] border-b-2 border-[#DAA520]'
                        : 'text-gray-500 hover:text-[#DAA520]'
                    }`}
                  >
                    Paraffinic RPO
                  </button>
                  <button
                    onClick={() => setActiveRPOTab('naphthenic')}
                    className={`px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                      activeRPOTab === 'naphthenic'
                        ? 'text-[#DAA520] border-b-2 border-[#DAA520]'
                        : 'text-gray-500 hover:text-[#DAA520]'
                    }`}
                  >
                    Naphthenic RPO
                  </button>
                </nav>
              </div>

              <div className="p-8">
                {activeRPOTab === 'aromatic' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-[#DAA520] mb-4">Aromatic RPO</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        High aromatic content rubber process oil ideal for tire manufacturing and rubber compounds requiring enhanced grip and durability.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Excellent compatibility with SBR and natural rubber</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Enhanced traction and wet grip performance</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Superior processing characteristics</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Optimal for high-performance tire applications</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="https://readdy.ai/api/search-image?query=Aromatic%20rubber%20process%20oil%20in%20industrial%20drums%20for%20tire%20manufacturing%2C%20dark%20colored%20RPO%20oil%20for%20rubber%20industry%2C%20tire%20production%20facility%20with%20rubber%20processing%20equipment%2C%20automotive%20tire%20manufacturing%20plant&width=500&height=400&seq=aromatic-rpo-oil&orientation=landscape"
                        alt="Aromatic RPO Oil"
                        className="w-full h-80 object-cover object-top rounded-xl shadow-lg hover:rotate-2 hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                )}

                {activeRPOTab === 'paraffinic' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-[#DAA520] mb-4">Paraffinic RPO</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Low aromatic, high paraffinic content oil offering excellent oxidation stability and low temperature performance for specialized rubber applications.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Excellent oxidation and thermal stability</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Superior low temperature flexibility</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Ideal for light-colored rubber products</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Excellent processing and mixing properties</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="https://readdy.ai/api/search-image?query=Paraffinic%20rubber%20process%20oil%20in%20clean%20industrial%20containers%2C%20light%20colored%20RPO%20oil%20for%20specialized%20rubber%20manufacturing%2C%20modern%20rubber%20processing%20facility%20with%20advanced%20equipment%2C%20clean%20industrial%20environment&width=500&height=400&seq=paraffinic-rpo-oil&orientation=landscape"
                        alt="Paraffinic RPO Oil"
                        className="w-full h-80 object-cover object-top rounded-xl shadow-lg hover:rotate-2 hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                )}

                {activeRPOTab === 'naphthenic' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-[#DAA520] mb-4">Naphthenic RPO</h4>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Balanced composition oil providing excellent solvency and compatibility with various rubber compounds, ideal for general purpose applications.
                      </p>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Excellent solvency for rubber additives</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Good compatibility with various rubber types</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Balanced performance characteristics</span>
                        </li>
                        <li className="flex items-start">
                          <i className="ri-check-line text-[#DAA520] mt-1 mr-3 w-4 h-4 flex items-center justify-center"></i>
                          <span>Versatile for multiple rubber applications</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img
                        src="https://readdy.ai/api/search-image?query=Naphthenic%20rubber%20process%20oil%20in%20industrial%20storage%20tanks%2C%20medium%20colored%20RPO%20oil%20for%20general%20rubber%20applications%2C%20versatile%20rubber%20processing%20facility%2C%20balanced%20petrochemical%20processing%20equipment&width=500&height=400&seq=naphthenic-rpo-oil&orientation=landscape"
                        alt="Naphthenic RPO Oil"
                        className="w-full h-80 object-cover object-top rounded-xl shadow-lg hover:rotate-2 hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
