
'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function HeroSlider() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until component is mounted on client
  if (!isMounted) {
    return <div className="h-screen bg-gray-200 animate-pulse"></div>;
  }

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-[#DAA520]',
        }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 - Industry Overview */}
        <SwiperSlide>
          <div className="relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Wild%20expansive%20UAE%20industrial%20complex%20with%20bright%20light%20theme%2C%20massive%20petrochemical%20facility%20in%20United%20Arab%20Emirates%20desert%20with%20gleaming%20white%20and%20silver%20structures%2C%20modern%20UAE%20oil%20refinery%20with%20clean%20bright%20architecture%2C%20spectacular%20industrial%20landscape%20with%20contemporary%20design%20and%20abundant%20natural%20lighting%2C%20crystal%20clear%20blue%20skies%20over%20UAE%20industrial%20zone&width=2560&height=1440&seq=uae-main-hero&orientation=landscape')`
              }}
            ></div>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  ASMI ENERGY FZE
                </h1>
                <p className="text-2xl mb-8 leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Empowering Petrochemical Trade Across Asia & MENA
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#DAA520] text-white px-8 py-4 rounded-lg hover:bg-[#B8860B] transition-colors font-semibold whitespace-nowrap cursor-pointer shadow-lg"
                  >
                    Explore Products
                  </button>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-[#DAA520] text-[#DAA520] bg-white/80 px-8 py-4 rounded-lg hover:bg-[#DAA520] hover:text-white transition-colors font-semibold whitespace-nowrap cursor-pointer shadow-lg"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Product Split */}
        <SwiperSlide>
          <div className="relative h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Base Oil Section */}
              <div 
                className="relative bg-cover bg-center cursor-pointer group"
                style={{
                  backgroundImage: `url('/images/baseoilbanner.jpeg')`
                }}
                onClick={() => document.getElementById('base-oil')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-4">Base Oil</h2>
                  <p className="text-lg mb-4">Premium base oils Group I-IV for industrial and automotive applications</p>
                  <div className="flex items-center text-[#DAA520] group-hover:text-[#FFD700]">
                    <span className="mr-2">Explore Base Oils</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>

              {/* RPO Oil Section */}
              <div 
                className="relative bg-cover bg-center cursor-pointer group"
                style={{
                  backgroundImage: `url('/images/rpooilbanner.jpeg')`
                }}
                onClick={() => document.getElementById('rpo-oil')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-4">RPO Oil</h2>
                  <p className="text-lg mb-4">Rubber Process Oil for tire and rubber manufacturing industries</p>
                  <div className="flex items-center text-[#DAA520] group-hover:text-[#FFD700]">
                    <span className="mr-2">Explore RPO Oils</span>
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          opacity: 0.7;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        .text-shadow-lg {
          text-shadow: 3px 3px 6px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,0.8);
        }
      `}</style>
    </section>
  );
}
