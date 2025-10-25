'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="banner-area-two">
      <div className="container-fluid">
        <div className="container-max-2">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="banner-content-two">
                {/* <span>Empowering Your Business</span> */}
                <h1>Your Partner in Next-Gen <b>Cloud & Tally</b> Transformation</h1>
                <p>At UJ Software & Solutions, we build smart digital ecosystems that help organizations scale faster, work smarter, and achieve more with secure cloud infrastructure and expert Tally solutions.</p>
                <div className="banner-content-btn">
                  <Link href="/services" className="learn-btn">
                    Explore Services
                    <i className='bx bx-plus'></i>
                  </Link>
                  <Link href="/contact" className="play-on-btn">
                    Get Started
                    <i className='flaticon-forward'></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="banner-img-2">
                <Image 
                  src="/assets/img/home-two/home-two-img.png" 
                  alt="Cloud & Tally Solutions - UJSS" 
                  width={700} 
                  height={600}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-bottom-shape">
        <div className="shape-one wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
          <img src="/assets/img/home-two/home-two-shape1.png" alt="Shape" />
        </div>
        
        <div className="shape-two wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
          <img src="/assets/img/home-two/home-two-shape2.png" alt="Shape" />
        </div>

        <div className="shape-three wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
          <img src="/assets/img/home-two/home-two-shape3.png" alt="Shape" />
        </div>

        <div className="banner-dots1">
          <img src="/assets/img/home-two/home-two-dots.png" alt="Dots" />
        </div>

        <div className="banner-dots2">
          <img src="/assets/img/home-two/home-two-dots2.png" alt="Dots" />
        </div>
      </div>
    </div>
  );
}