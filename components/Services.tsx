'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Smart Tally Operations',
      slug: 'tally-solutions',
      icon: '/assets/img/service/service-icon7.png',
      description: 'Comprehensive Tally software sales, implementation, customization and expert support services to streamline your accounting and business operations.'
    },
    {
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      icon: '/assets/img/service/service-icon8.png',
      description: 'Strategic SEO, social media marketing, content marketing and digital advertising solutions to boost your online presence and drive business growth.'
    },
    {
      title: 'AI Agents',
      slug: 'ai-agents',
      icon: '/assets/img/service/service-icon9.png',
      description: 'Intelligent AI-powered agents that automate tasks, analyze data and deliver actionable business insights to enhance operational efficiency.',
      badge: 'New'
    }
  ];

  return (
    <div className="service-area-two">
      <div className="container">
        <div className="section-title text-center">
          <span className="sp-before sp-after">Best Features</span>
          <h2 className="best-h2">Best Of Our Services</h2>
        </div>

        <div className="row pt-45">
          {services.map((service, index) => (
            <div key={index} className={`col-lg-4 col-md-6 ${index === 2 ? 'offset-md-3 offset-lg-0' : ''}`}>
              <div className="service-item">
                <h3><Link href={`/services/${service.slug}`}>{service.title} {service.badge && (
                  <sup className="service-badge text-danger">{service.badge}</sup>
                )}</Link></h3>
                <div className="service-item-img">
                  <Link href={`/services/${service.slug}`}>
                    <img src={service.icon} alt={`${service.title} - UJSS`} />
                  </Link>
                  <div className="img-circle"></div>
                </div>
                <p>{service.description}</p>
                <Link href={`/services/${service.slug}`} className="learn-btn">
                  Learn more 
                  <i className='bx bx-plus'></i>
                </Link>
              </div>
            </div>
          ))}
          <Link href="/services" className="learn-btn mt-3 text-center">
            See All Services
            <i className='bx bx-plus'></i>
          </Link>
        </div>
      </div>

      <div className="service-two-shape">
        <div className="shape-in1">
          <img src="/assets/img/shape/shape9.png" alt="Shape" />
        </div>
        <div className="shape-in2">
          <img src="/assets/img/shape/shape10.png" alt="Shape" />
        </div>
        <div className="shape-in3">
          <img src="/assets/img/shape/shape11.png" alt="Shape" />
        </div>
        <div className="shape-in4">
          <img src="/assets/img/shape/shape7.png" alt="Shape" />
        </div>
        <div className="shape-in5">
          <img src="/assets/img/shape/shape12.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
}
