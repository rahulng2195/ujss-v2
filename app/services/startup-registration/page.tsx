import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Startup Registration Services | Company Formation & DPIIT Recognition - UJSS',
  description: 'Complete startup registration services including private limited company registration, LLP registration, and DPIIT recognition. We help you launch your dream venture.',
  keywords: 'startup registration, company formation, DPIIT recognition, private limited company registration, LLP registration, startup India, UJSS startup services',
};

export default function StartupRegistrationPage() {
  const benefits = [
    {
      icon: 'bx-rocket',
      title: 'Launch Your Dream Venture',
      description: 'We provide end-to-end services to help you launch your startup, from choosing the right business structure to post-incorporation compliance.'
    },
    {
      icon: 'bx-file',
      title: 'Hassle-Free Process',
      description: 'Our team of experts handles all the paperwork and legal formalities, ensuring a smooth and hassle-free registration process.'
    },
    {
      icon: 'bx-badge-check',
      title: 'DPIIT Recognition',
      description: 'We assist you in getting your startup recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) to avail various government benefits.'
    },
    {
      icon: 'bx-money',
      title: 'Access to Funding',
      description: 'A registered business entity is essential for raising funds from investors and venture capitalists. We help you get investment-ready.'
    }
  ];

  const registrationTypes = [
    {
      title: 'Private Limited Company',
      description: 'The most popular legal structure for startups, offering limited liability protection to its shareholders.'
    },
    {
      title: 'Limited Liability Partnership (LLP)',
      description: 'A hybrid structure that combines the benefits of a partnership and a company, with limited liability.'
    },
    {
      title: 'One Person Company (OPC)',
      description: 'A company that can be formed with just one member, ideal for solo entrepreneurs.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg6">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Startup Registration</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Startup Registration</li>
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
            <div className="col-lg-12">
              <div className="service-article">
                {/* <div className="service-article-img">
                  <img src="/assets/img/service/startup-registration.jpg" alt="Startup Registration" />
                </div> */}

                <div className="service-article-content">
                  <h2>Turn Your Idea into a Reality with Our Startup Registration Services</h2>
                  <p>Have a brilliant idea? We are here to help you turn it into a successful business. Our startup registration services are designed to provide you with end-to-end support, from choosing the right legal structure for your business to ensuring all the necessary registrations and compliances are in place.</p>
                  
                  <p>Our team of experts will guide you through the entire process, making it simple, quick, and hassle-free. We understand the challenges faced by startups and are committed to providing you with the support you need to launch and grow your dream venture.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose UJSS for Your Startup Registration?</h3>
                    <p>Discover the benefits of our expert startup registration services:</p>
                  </div>

                  <div className="row mt-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <i className={`bx ${benefit.icon}`}></i>
                          <h4>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Types of Business Structures We Register</h3>
                    <p>We can help you register the following types of business structures:</p>
                  </div>

                  <div className="row mt-4">
                    {registrationTypes.map((type, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{type.title}</h4>
                          <p>{type.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-rocket' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Launch Your Startup Today</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Talk to our startup experts to discuss your business idea and get a personalized quote for your registration.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#667eea'}}>
                          Get a Free Consultation
                          <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4">
              <ServiceSidebar />
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
