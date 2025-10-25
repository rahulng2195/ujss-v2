'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      text: "We're very happy with UJ software and service. It's easy to use, fast, and reliable. The support team (Vandan) is quick to help. We've had zero downtime and no major issues so far. Definitely a service we trust and recommend.",
      name: "AMERICO ACCOUNT",
      position: "Business Owner",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "I had a great experience working with UJ Software and Solutions. The team is very professional and skilled, and they provided a customized software solution that perfectly suited our business needs. Their customer support is excellent, always available to assist with any issues or questions.",
      name: "Shahrukh Shaikh",
      position: "Business Owner",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "I had a very positive experience with U J Software & Solution. Their team is professional, responsive, and highly skilled in delivering quality software solutions. They understood my requirements clearly and provided effective guidance throughout the process.",
      name: "Yahiya Choudhary",
      position: "Business Client",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "The services are really good, especially Tally on Cloud — fast and easy to use. Other services are also great. Thanks to Nisha for her helpful and friendly support.",
      name: "Jaimin Ajmera",
      position: "Chartered Accountant",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Thank you for your prompt and reliable support with Cloud Tally. Your efficient service, smooth setup, and ongoing assistance have made our operations much easier. Truly appreciate your dedication and expertise.",
      name: "Adesh Mhatre",
      position: "Business Manager",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Excellent service and support from the Tally team—special thanks to Ms. Nisha for her professionalism and dedication!",
      name: "Chirag Bhandari",
      position: "Finance Professional",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Your services are very good and your team member Piyush is very nice and cooperative.",
      name: "Amit Goel",
      position: "Business Owner",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Very effective, convenient and user friendly. This is going to be the revolutionary step in accessing tally data from anywhere anytime.",
      name: "Arvind",
      position: "Entrepreneur",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Taking service from them last 16 months. They solve issues instantly if there is any which helps my business to not go in breakdown.",
      name: "Amit Agarwal",
      position: "Business Owner",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "As a software developer and implementer, I really appreciate the attitude you have shown me while setting up and configuring TallyPrime in a cloud environment. Your knowledge about this is outstanding.",
      name: "Tapan Fouzder",
      position: "Software Developer",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "The best partner of Tally! Special mention to Anita, she is the best customer support / trusted advisor a business owner can ask for. She has helped me in every step of setting up my business and making my business digital.",
      name: "Barkha M",
      position: "Business Owner",
      image: "/assets/img/testimonial/women-avatar.jpg",
      rating: 5
    },
    {
      text: "I have purchased tally prime for my office few years ago from UJ software, Miss Anita Jaiswal is supporting my team more than I expected till now. Very accurate, quick and fast response, never ignores calls or messages.",
      name: "ASHVINI KUMAR",
      position: "Office Manager",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Really happy with after sales service of the company, support part is too good and which plays an important role. Moreover cloud and software works seamlessly, have not faced any major issues during.",
      name: "Shreyans Kothari",
      position: "Business Professional",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Thank you So much U J Software & Solutions team. Nisha always very helpful to solve any issues regarding tally issue.",
      name: "Jayesh Shiyal",
      position: "Accountant",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Really a very good service on cloud. It is amazing. I strongly advice to anyone can use this service. Anita is so polite and she is very helpful when we find any difficulty.",
      name: "AJIT PANDA",
      position: "CFO, Odisha FC",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    },
    {
      text: "Always received a quick response and did a good job. Thank you so much for your support.",
      name: "Danson Foods",
      position: "Corporate Client",
      image: "/assets/img/testimonial/men-avatar.jpg",
      rating: 5
    }
  ];

  useEffect(() => {
    // Initialize Owl Carousel for testimonials
    if (typeof window !== 'undefined' && (window as any).$) {
      const $ = (window as any).$;
      
      // Destroy existing carousel if it exists
      if ($('.testimonial-slider').hasClass('owl-loaded')) {
        $('.testimonial-slider').trigger('destroy.owl.carousel');
        $('.testimonial-slider').removeClass('owl-loaded owl-drag');
      }

      // Initialize the carousel
      setTimeout(() => {
        $('.testimonial-slider').owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
          ],
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 1
            },
            1024: {
              items: 1
            }
          }
        });
      }, 100);
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        const $ = (window as any).$;
        if ($('.testimonial-slider').hasClass('owl-loaded')) {
          $('.testimonial-slider').trigger('destroy.owl.carousel');
        }
      }
    };
  }, []);

  return (
    <div className="testimonial-area testimonial-area-mb ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-list">
                <div className="list-img-1">
                  <Image src="./assets/img/testimonial/men-avatar.jpg" className="img-fluid" height={70} width={60} alt="Happy Client" />
                </div>
                <div className="list-img-2">
                  <Image src="./assets/img/testimonial/women-avatar.jpg" className="img-fluid" height={70} width={60} alt="Satisfied Customer" />
                </div>
                <div className="list-img-3">
                  <Image src="./assets/img/testimonial/men-avatar.jpg" className="img-fluid" height={70} width={60} alt="Client Review" />
                </div>
                <div className="list-img-4">
                  <Image src="./assets/img/testimonial/women-avatar.jpg" className="img-fluid" height={70} width={60} alt="Customer Testimonial" />
                </div>
                <div className="list-img-5">
                  <Image src="./assets/img/testimonial/men-avatar.jpg" className="img-fluid" height={70} width={60} alt="Client Feedback" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-title">
                <span className="sp-before sp-after">Our Happy Clients</span>
                <h2>Trusted The Impact We Create</h2>
                {/* <p className="mt-3">Real experiences from businesses we've helped grow with our solutions</p> */}
              </div>
              <div className="testimonial-slider owl-carousel owl-theme">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-item">
                    <div className="rating mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className='bx bxs-star'></i>
                      ))}
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="content">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          objectFit: 'cover',
                          borderRadius: '50%'
                        }}
                      />
                      <div className="content-title">
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
