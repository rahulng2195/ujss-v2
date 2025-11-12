'use client';

import { useEffect } from 'react';

export default function Brands() {
  const brands = [
    {
      name: 'Tally on Cloud',
      image: '/assets/img/Company logo/a-v-enterprises logo.jpg'
    },
    {
      name: 'Tally Sync',
      image: '/assets/img/Company logo/Barrier break  logo.svg'
    },
    {
      name: 'Tally AMC',
      image: '/assets/img/Company logo/brewcraft logo.webp'
    },
    {
      name: 'Cloud Admin',
      image: '/assets/img/Company logo/commedialogo.jpg'
    },
    {
      name: 'SEO Services',
      image: '/assets/img/Company logo/Earthnetic logo.png'
    },
    {
      name: 'Social Media Management',
      image: '/assets/img/Company logo/imperial cosmetics.avif'
    },
    {
      name: 'PPC Advertising',
      image: '/assets/img/Company logo/isprava logo.png'
    },
    
    {
      name: 'Licensed Services',
      image: '/assets/img/Company logo/maharashtra logo.webp'
    },
    {
      name: 'Startup Registration',
      image: '/assets/img/Company logo/sp electro logo.png'
    },
    {
      name: 'Startup Registration',
      image: '/assets/img/Company logo/sun impex logo.png'
    },
    {
      name: 'Startup Registration',
      image: '/assets/img/Company logo/wasan toyota.png'
    }
  ];

  useEffect(() => {
    // Initialize Owl Carousel for brands
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$;
      
      // Destroy existing carousel if it exists
      if ($('.brand-logo-slider').hasClass('owl-loaded')) {
        $('.brand-logo-slider').trigger('destroy.owl.carousel');
        $('.brand-logo-slider').removeClass('owl-loaded owl-drag');
      }

      // Initialize the carousel
      setTimeout(() => {
        $('.brand-logo-slider').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 2
            },
            576: {
              items: 3
            },
            768: {
              items: 4
            },
            992: {
              items: 5
            },
            1200: {
              items: 6
            }
          }
        });
      }, 100);
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        const $ = (window as any).$;
        if ($('.brand-logo-slider').hasClass('owl-loaded')) {
          $('.brand-logo-slider').trigger('destroy.owl.carousel');
        }
      }
    };
  }, []);

  return (
    <div className="brand-logo-area pb-70">
      <div className="container-fluid">
        <div className="container-max">
          <div className="section-title text-center mb-45">
            <span className="sp-before sp-after">Brands</span>
            {/* <h2>Products & Solutions We Offer</h2> */}
          </div>
          <div className="brand-logo-slider owl-carousel owl-theme">
            {brands.map((brand, index) => (
              <div key={index} className="brand-logo-item">
                <img
                  src={brand.image}
                  alt={brand.name}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'contain',
                    padding: '10px',
                    background: '#fff',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
