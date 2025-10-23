import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';
export const metadata = {
  title: 'Tally on Cloud | User Based Tally Cloud Solutions Mumbai - UJSS',
  description: 'Access TallyPrime 24/7 from anywhere with Tally on Cloud. Secure, fast, and reliable cloud accounting solution. Work from any device with user-based Tally cloud hosting.',
  keywords: 'Tally on Cloud, TallyPrime cloud, cloud accounting, Tally hosting, remote accounting, cloud TallyPrime, online Tally, Tally cloud solution Mumbai',
};

export default function TallyOnCloudPage() {
  const benefits = [
    {
      icon: 'bx-globe',
      title: 'Access Anytime, Anywhere',
      description: 'Enjoy the full power of TallyPrime on any device through a secure web browser—no installation needed. Stay connected to your accounts wherever you go.'
    },
    {
      icon: 'bx-lock-alt',
      title: 'Advanced Security & Control',
      description: 'Your data is always protected with enterprise-grade security, ensuring only authorized users can access it with multi-factor authentication.'
    },
    {
      icon: 'bx-data',
      title: 'Centralized Data Management',
      description: 'Keep all your business data centralized at your head office while enabling real-time access for teams across multiple locations.'
    },
    {
      icon: 'bx-merge',
      title: 'Seamless Multi-App Integration',
      description: 'Work smarter by using TallyPrime alongside other essential apps like MS Word, Excel, GST/TDS software, and more—all in one place.'
    },
    {
      icon: 'bx-printer',
      title: 'Easy & Direct Printing',
      description: 'Print invoices and reports instantly from your local printer, anytime you need them, without any complex setup.'
    },
    {
      icon: 'bx-cloud-upload',
      title: 'Smart Cloud Backups',
      description: 'Automatic backups keep your data safe, secure, and easily retrievable—so you never lose important business information.'
    }
  ];

  const features = [
    'Multi-user concurrent access',
    'No hardware investment required',
    'Automatic software updates',
    '99.9% uptime guarantee',
    'Dedicated support team',
    'Scalable resources',
    'Data encryption at rest and in transit',
    'Regular automated backups'
  ];

  const useCases = [
    {
      title: 'Multi-Branch Businesses',
      description: 'Connect all your branches seamlessly with centralized cloud access to Tally data.',
      icon: 'bx-buildings'
    },
    {
      title: 'Remote Teams',
      description: 'Enable your accounting team to work from anywhere without compromising security.',
      icon: 'bx-user-voice'
    },
    {
      title: 'Business Owners',
      description: 'Monitor your business finances in real-time from any location, any device.',
      icon: 'bx-briefcase'
    },
    {
      title: 'Chartered Accountants',
      description: 'Access multiple client data securely from a single cloud platform.',
      icon: 'bx-calculator'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>User Based Tally On Cloud</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally on Cloud</li>
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
                  <img src="/assets/img/service/tally-on-cloud.jpg" alt="Tally on Cloud" />
                </div>
                
                <div className="service-article-content">
                  <h2>Experience Tally on Cloud — Anytime, Anywhere!</h2>
                  <p>Break free from limits and take your business with you. Access TallyPrime 24/7 from any device, manage accounts on the go, and enjoy seamless, secure, and smart accounting wherever you are.</p>
                  
                  <p>Tally on Cloud transforms the way you do accounting by eliminating the need for local installations and enabling true mobility. Your data is securely hosted on enterprise-grade cloud servers, accessible through a web browser with the same familiar Tally interface you love.</p>

                  <div className="service-article-another mt-5">
                    <h3>🌟 Key Benefits of Tally on Cloud</h3>
                    <p>Transform your accounting experience with cloud-powered flexibility and security:</p>
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
                    <h3>Perfect For</h3>
                    <p>Tally on Cloud is ideal for various business scenarios and user types:</p>
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
                            color: '#667eea',
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
                    <h3>Cloud Features & Advantages</h3>
                    <p>Experience the full power of cloud-hosted Tally with these features:</p>
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
                    <p>Work from anywhere, collaborate in real-time, and never worry about data loss. Tally on Cloud gives you the freedom to focus on growing your business!</p>
                    <span>- UJSS Cloud Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>How Tally on Cloud Works</h3>
                    <p>Getting started with Tally on Cloud is simple and straightforward:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Choose Your Plan</h4>
                        <p>Select a user-based plan that fits your business needs and number of users.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Setup & Migration</h4>
                        <p>We migrate your existing Tally data to the cloud securely with zero downtime.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Access Credentials</h4>
                        <p>Receive secure login credentials and access URLs for all your users.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>Start Working</h4>
                        <p>Access Tally from any browser on any device and start working immediately.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Pricing Plans</h3>
                    <p>Flexible user-based pricing to suit businesses of all sizes:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                      <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-user' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Single User</h4>
                        <p style={{color: '#666', fontSize: '14px', marginBottom: '20px'}}>Perfect for small businesses and startups</p>
                        <Link href="/contact" className="default-btn">
                          Get Quote
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-group' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Multi User</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginBottom: '20px'}}>Ideal for growing businesses</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#667eea'}}>
                          Get Quote
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-buildings' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Enterprise</h4>
                        <p style={{color: '#666', fontSize: '14px', marginBottom: '20px'}}>For large organizations</p>
                        <Link href="/contact" className="default-btn">
                          Get Quote
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-test-tube' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Try Free Demo</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Experience Tally on Cloud with a free 7-day trial!</p>
                        <Link href="/contact" className="default-btn">
                          Start Free Trial
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-phone-call' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Get Started</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's migrate your Tally to cloud today!</p>
                        <Link href="/contact" className="default-btn">
                          Contact Us
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
