import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import '../../../styles/service-details.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Website & App Development Services | Custom Web & Mobile Solutions - UJSS',
  description: 'Build stunning websites and mobile apps with UJSS. Custom website development, e-commerce solutions, mobile app development (Android & iOS), and UI/UX design services in Mumbai.',
  keywords: 'website development, mobile app development, custom web solutions, e-commerce website, Android app, iOS app, UI/UX design, responsive website, web application development, Mumbai',
};

export default function WebsiteAppDevelopmentPage() {
  const services = [
    {
      icon: 'bx-desktop',
      title: 'Custom Website Development',
      description: 'Fast, responsive, and visually stunning websites built to match your brand identity and business goals.'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Mobile App Development',
      description: 'Android, iOS, or hybrid apps designed for seamless user experiences and optimal performance.'
    },
    {
      icon: 'bx-cart',
      title: 'E-Commerce Solutions',
      description: 'Turn visitors into customers with user-friendly online stores that drive sales and growth.'
    },
    {
      icon: 'bx-layer',
      title: 'Business Web Portals',
      description: 'Streamline operations with secure and scalable web applications tailored to your workflow.'
    },
    {
      icon: 'bx-paint',
      title: 'UI/UX Design',
      description: 'Intuitive and attractive designs that engage your audience and enhance user satisfaction.'
    },
    {
      icon: 'bx-wrench',
      title: 'Website Maintenance',
      description: 'Keep your site updated, fast, and secure always with our comprehensive maintenance services.'
    }
  ];

  const benefits = [
    { icon: 'bx-devices', text: 'Modern & responsive designs that work seamlessly across all devices' },
    { icon: 'bx-tachometer', text: 'Fast loading and SEO-friendly websites for better search rankings' },
    { icon: 'bx-lock-alt', text: 'Secure, reliable, and scalable architecture built with best practices' },
    { icon: 'bx-mobile', text: 'Mobile-friendly and performance-optimized apps for superior UX' },
    { icon: 'bx-support', text: 'End-to-end support from concept to launch and beyond' },
    { icon: 'bx-refresh', text: 'Easy content management systems for hassle-free updates' }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We understand your business goals, target audience, and project requirements to create a detailed roadmap.'
    },
    {
      number: 2,
      title: 'Design & Prototype',
      description: 'Create stunning UI/UX designs and interactive prototypes for your approval before development.'
    },
    {
      number: 3,
      title: 'Development',
      description: 'Build your website or app using cutting-edge technologies and best coding practices.'
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance and security.'
    },
    {
      number: 5,
      title: 'Launch & Deploy',
      description: 'Seamless deployment with comprehensive training and documentation for your team.'
    },
    {
      number: 6,
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your digital assets running smoothly.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Website & App Development</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Website & App Development</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Service Details */}
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-article">
                <div className="service-article-img">
                  <img src="/assets/img/service/web-app-development.jpg" alt="Website and App Development" />
                </div>
                
                <div className="service-article-content">
                  <h2>Build Your Digital Presence with UJSS</h2>
                  <p>Your website and app are more than just online tools — they're your brand's identity. At UJSS Services, we create stunning, high-performing websites and mobile apps that help you attract customers, grow faster, and stand out in the digital world.</p>
                  
                  <p>We combine creativity, technology, and strategy to deliver solutions that work for your business. Whether you need a corporate website, an e-commerce store, or a mobile application, our expert team ensures your digital presence makes a lasting impact.</p>

                  <div className="service-article-another mt-5">
                    <h3>🚀 Our Expertise</h3>
                    <p>We combine creativity, technology, and strategy to deliver solutions that work for your business:</p>
                  </div>

                  <div className="row mt-4">
                    {services.map((service, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <i className={`bx ${service.icon}`}></i>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>💡 Why Choose UJSS?</h3>
                    <p>Partner with us to transform your digital vision into reality with these key advantages:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className={`bx ${benefit.icon}`}></i>
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our Development Process</h3>
                    <p>We follow a systematic and transparent approach to bring your digital project to life:</p>
                  </div>

                  <div className="service-process-steps">
                    {processSteps.map((step, index) => (
                      <div key={index} className="service-process-step">
                        <div className="service-process-step-number">{step.number}</div>
                        <div className="service-process-step-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Transform your business with a digital presence that drives growth. Your success is our mission!</p>
                    <span>- UJSS Development Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Technologies We Use</h3>
                    <p>We leverage the latest technologies and frameworks to build powerful solutions:</p>
                    
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px'}}>Web Technologies</h4>
                        <div className="service-icon-list">
                          <div className="service-icon-list-item">
                            <i className='bx bxl-react'></i>
                            <span>React.js & Next.js</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-nodejs'></i>
                            <span>Node.js & Express</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-php'></i>
                            <span>PHP & Laravel</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-wordpress'></i>
                            <span>WordPress & CMS</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px'}}>Mobile Technologies</h4>
                        <div className="service-icon-list">
                          <div className="service-icon-list-item">
                            <i className='bx bxl-android'></i>
                            <span>Native Android</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-apple'></i>
                            <span>Native iOS</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-flutter'></i>
                            <span>Flutter</span>
                          </div>
                          <div className="service-icon-list-item">
                            <i className='bx bxl-react'></i>
                            <span>React Native</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-phone-call' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Ready to Start?</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's discuss your project and bring your vision to life!</p>
                        <Link href="/contact" className="default-btn">
                          Get Started Today
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-folder-open' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>View Our Work</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Check out our portfolio of successful projects and case studies.</p>
                        <Link href="/portfolio" className="default-btn">
                          View Portfolio
                          <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
