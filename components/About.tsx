'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const features = [
    { id: '01', title: 'Next-Gen Cloud Solutions', icon: 'bx-cloud' },
    { id: '02', title: 'Tally Expertise You Can Trust', icon: 'bx-badge-check' },
    { id: '03', title: '24/7 Proactive Support', icon: 'bx-support' },
    { id: '04', title: 'Secure Infrastructure', icon: 'bx-shield' },
    { id: '05', title: 'Scalable Solutions', icon: 'bx-trending-up' },
    { id: '06', title: 'Expert Consultation', icon: 'bx-user-check' }
  ];

  return (
    <div className="about-area-two pb-70">
      <div className="container-fluid">
        <div className="container-max">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img-2">
                <Image src="/assets/img/about/about-img2.png" alt="About UJSS - Cloud and Tally Solutions Provider" width={600} height={500} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content-two">
                <div className="section-title">
                  <span className="sp-before sp-after">About Us</span>
                  <h2>Empowering Businesses with Cloud & Tally Excellence</h2>
                </div>
                <h3>Your Trusted Technology Partner for Digital Transformation</h3>
                <p className='pb-1'>At UJ Software & Solutions (UJSS), we go beyond technology — we build smart digital ecosystems for businesses. Our mission is simple: to help organizations scale faster, work smarter, and achieve more with the power of secure cloud infrastructure and expert Tally solutions.</p>
                <p>We combine innovation, reliability, and 24/7 support to ensure your business runs without limits. Whether you&apos;re a startup chasing growth or an enterprise optimizing efficiency, we are your trusted technology partner.</p>
                
                <div className="row">
                  {features.map((feature, index) => (
                    <div key={index} className="col-lg-4 col-sm-6 pr-0">
                      <div className="about-list">
                        <i className={`bx ${feature.icon}`}></i>
                        <span>{feature.id}</span>
                        <p>{feature.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="about-btn">
                  <Link href="/about" className="learn-btn">
                    Learn More About Us
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
