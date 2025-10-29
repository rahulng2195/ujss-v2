import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally on Dedicated Cloud Server | High-Performance Tally Hosting - UJSS',
  description: 'Experience unparalleled performance and security with Tally on a dedicated cloud server. Get your own private server for TallyPrime with custom configurations and 24/7 support.',
  keywords: 'Tally on dedicated server, dedicated Tally cloud, private Tally server, high-performance Tally, Tally cloud security, dedicated cloud hosting, Tally server Mumbai',
};

export default function DedicatedCloudServerPage() {
  const benefits = [
    {
      icon: 'bx-server',
      title: 'Dedicated Performance',
      description: 'Enjoy lightning-fast performance with resources exclusively dedicated to your business. No more sharing, no more slowdowns.'
    },
    {
      icon: 'bx-shield-quarter',
      title: 'Enhanced Security',
      description: 'Your data is isolated in a private, secure environment, giving you complete control and peace of mind with robust security protocols.'
    },
    {
      icon: 'bx-customize',
      title: 'Custom Configuration',
      description: 'Tailor the server’s storage, processing power, and memory to perfectly match your business needs and scale as you grow.'
    },
    {
      icon: 'bx-sitemap',
      title: 'Centralized Data Control',
      description: 'Manage your data across all branches from a single, consistent source, ensuring accuracy and real-time synchronization.'
    },
    {
      icon: 'bx-group',
      title: 'Unlimited User Access',
      description: 'Provide seamless and secure access for an unlimited number of users from any location, at any time, without compromising performance.'
    },
    {
      icon: 'bx-badge-check',
      title: 'High Reliability & Uptime',
      description: 'Rely on a robust infrastructure that guarantees maximum uptime, ensuring your business operations run smoothly and without interruption.'
    }
  ];

  const features = [
    'Fully isolated server environment',
    'Admin access to the server',
    'Custom security policies',
    'Scalable CPU, RAM, and Storage',
    '24/7 server monitoring',
    'Choice of data center location',
    'Dedicated IP address',
    'Disaster recovery options'
  ];

  const useCases = [
    {
      title: 'Large Enterprises',
      description: 'Handle heavy workloads and a large number of users with a powerful, dedicated infrastructure.',
      icon: 'bx-building-house'
    },
    {
      title: 'Businesses with High Security Needs',
      description: 'Protect sensitive financial data with an isolated environment and custom security configurations.',
      icon: 'bx-lock-alt'
    },
    {
      title: 'Companies with Multiple Branches',
      description: 'Ensure consistent, real-time data access and synchronization across all locations.',
      icon: 'bx-git-branch'
    },
    {
      title: 'Firms Requiring Custom Integrations',
      description: 'Integrate Tally with other business applications in a flexible and controlled server environment.',
      icon: 'bx-extension'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg2">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally on Dedicated Cloud Server</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally on Dedicated Cloud</li>
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
                  <img src="/assets/img/service/dedicated-server.jpg" alt="Tally on Dedicated Server" />
                </div> */}

                <div className="service-article-content">
                  <h2>The Ultimate Tally Experience with Your Own Private Server</h2>
                  <p>Elevate your business operations with a dedicated cloud server for Tally. This premium solution offers an isolated, high-speed, and fully customizable environment, giving you unparalleled control and performance without compromise.</p>
                  
                  <p>A dedicated server means all resources—CPU, RAM, and storage—are exclusively yours. This ensures that your TallyPrime runs at peak performance, even with a large number of users and heavy data loads. It's the perfect choice for businesses that demand the best in security, reliability, and speed.</p>

                  <div className="service-article-another mt-5">
                    <h3>🚀 Key Benefits of a Dedicated Server</h3>
                    <p>Experience the power of a server built exclusively for your business:</p>
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
                    <h3>Ideal For</h3>
                    <p>A dedicated server is the perfect solution for businesses with specific needs:</p>
                  </div>

                  <div className="row mt-4">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div style={{
                          background: '#f8f9fa',
                          padding: '25px',
                          borderRadius: '12px',
                          display: 'flex',
                          gap: '20px',
                          height: '100%',
                          transition: 'all 0.3s ease'
                        }}>
                          <i className={`bx ${useCase.icon}`} style={{
                            fontSize: '40px',
                            color: '#ff5500',
                            minWidth: '40px'
                          }}></i>
                          <div>
                            <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '10px'}}>{useCase.title}</h4>
                            <p style={{color: '#666', margin: 0, fontSize: '15px'}}>{useCase.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Exclusive Features</h3>
                    <p>Our dedicated server plans come with a host of exclusive features:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {features.map((feature, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className='bx bx-check-circle'></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>When performance and security are non-negotiable, a dedicated server is the only choice. It's your Tally, your server, your rules.</p>
                    <span>- UJSS Infrastructure Head</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Get Your Dedicated Server in 3 Simple Steps</h3>
                    <p>Our process is designed to get you up and running in no time:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Consultation & Configuration</h4>
                        <p>We discuss your requirements and help you choose the perfect server configuration.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Server Provisioning & Setup</h4>
                        <p>Our team provisions the server, installs Tally, and migrates your data securely.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Go Live & Support</h4>
                        <p>We hand over the server access and provide 24/7 support to ensure smooth operations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Request a Quote</h3>
                    <p>Get a custom quote for a dedicated server that fits your budget and requirements.</p>
                  </div>

                  <div className="row mt-4 justify-content-center">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-phone-call' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Talk to an Expert</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Discuss your needs with our cloud specialists and get a personalized quote.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Request a Callback
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
