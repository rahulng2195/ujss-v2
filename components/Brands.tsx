'use client';

import { useEffect } from 'react';

export default function Brands() {
  const brands = [
    {
      name: 'Tally on Cloud',
      image: '/assets/img/client_logo/tally on cloud.webp'
    },
    {
      name: 'Tally Sync',
      image: '/assets/img/client_logo/Tally sync.png'
    },
    {
      name: 'Tally AMC',
      image: '/assets/img/client_logo/tally amc.webp'
    },
    {
      name: 'Cloud Admin',
      image: '/assets/img/client_logo/cloud with admin.jpeg'
    },
    {
      name: 'SEO Services',
      image: '/assets/img/client_logo/seo image.png'
    },
    {
      name: 'Social Media Management',
      image: '/assets/img/client_logo/smm.png'
    },
    {
      name: 'PPC Advertising',
      image: '/assets/img/client_logo/ppc.png'
    },
    {
      name: 'Digital Signature',
      image: '/assets/img/client_logo/Digital Signature Certification Essentials.png'
    },
    {
      name: 'GST & Taxation',
      image: '/assets/img/client_logo/GST & Taxation.png'
    },
    {
      name: 'Licensed Services',
      image: '/assets/img/client_logo/Licensed.jpg'
    },
    {
      name: 'Startup Registration',
      image: '/assets/img/client_logo/startup.jpg'
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
