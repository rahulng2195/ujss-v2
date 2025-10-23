import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'CRM Solutions | Customer Relationship Management Software Mumbai - UJSS',
  description: 'Boost sales with powerful CRM software. Lead management, sales automation, customer support, marketing automation, and mobile CRM. Transform your business with UJSS CRM solutions.',
  keywords: 'CRM software, customer relationship management, sales CRM, lead management, sales automation, customer support software, marketing automation, CRM Mumbai',
};

export default function CRMSolutionsPage() {
  const features = [
    {
      icon: 'bx-trending-up',
      title: 'Smarter Sales, Faster Growth',
      subtitle: 'Boost your sales performance with clarity, automation, and strategy.',
      points: [
        'Track your sales pipeline and progress in real time',
        'Identify high-quality leads that convert faster',
        'Categorize customers and focus on key opportunities'
      ]
    },
    {
      icon: 'bx-support',
      title: 'Support That Builds Trust',
      subtitle: 'Deliver outstanding customer experiences with organized support.',
      points: [
        'Automate ticket handling for quick issue resolution',
        'Manage AMCs and service requests efficiently',
        'Set SLAs that ensure timely and reliable service'
      ]
    },
    {
      icon: 'bx-bullhorn',
      title: 'Marketing That Makes an Impact',
      subtitle: 'Turn your marketing efforts into measurable success.',
      points: [
        'Launch and manage personalized campaigns effortlessly',
        'Connect directly with your audience through WhatsApp & Email',
        'Analyze engagement data to refine your future campaigns'
      ]
    },
    {
      icon: 'bx-cog',
      title: 'Automate Your Workflows, Simplify Your Day',
      subtitle: 'Reduce manual work and keep your business running smoothly.',
      points: [
        'Build custom workflows that match your business goals',
        'Automate repetitive tasks to save time and increase productivity',
        'Ensure every process is consistent and optimized'
      ]
    }
  ];

  const benefits = [
    { icon: 'bx-line-chart-down', text: 'Increased sales revenue and conversion rates' },
    { icon: 'bx-user-check', text: 'Improved customer satisfaction and retention' },
    { icon: 'bx-time-five', text: 'Time savings through automation and efficiency' },
    { icon: 'bx-bar-chart-alt-2', text: 'Better insights with comprehensive analytics' },
    { icon: 'bx-mobile', text: 'Mobile access for on-the-go business management' },
    { icon: 'bx-network-chart', text: 'Seamless integration with existing tools' }
  ];

  const modules = [
    {
      title: 'Lead Management',
      description: 'Capture, track, and nurture leads through the entire sales funnel.',
      icon: 'bx-target-lock'
    },
    {
      title: 'Contact Management',
      description: 'Centralize customer information and interaction history in one place.',
      icon: 'bx-user-circle'
    },
    {
      title: 'Deal Pipeline',
      description: 'Visualize and manage your sales pipeline with intuitive stages.',
      icon: 'bx-list-check'
    },
    {
      title: 'Task & Activity',
      description: 'Manage tasks, follow-ups, and activities for your sales team.',
      icon: 'bx-task'
    },
    {
      title: 'Email Integration',
      description: 'Send and track emails directly from the CRM platform.',
      icon: 'bx-envelope'
    },
    {
      title: 'Reports & Analytics',
      description: 'Generate detailed reports and analyze performance metrics.',
      icon: 'bx-pie-chart-alt-2'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>CRM Solutions</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>CRM Solutions</li>
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
                  <img src="/assets/img/service/crm-solutions.jpg" alt="CRM Solutions" />
                </div>
                
                <div className="service-article-content">
                  <h2>Transform Your Customer Relationships</h2>
                  <p>A powerful CRM system is the backbone of successful customer relationships. At UJSS, we provide comprehensive CRM solutions that help you manage leads, close deals faster, deliver exceptional support, and build lasting customer relationships.</p>
                  
                  <p>Our CRM platform combines sales automation, marketing tools, customer support features, and powerful analytics in one unified system. Whether you're a small business or a large enterprise, our CRM scales with your needs and empowers your team to work smarter, not harder.</p>

                  <div className="service-article-another mt-5">
                    <h3>Complete CRM Features</h3>
                    <p>Everything you need to manage and grow your customer relationships:</p>
                  </div>

                  {features.map((feature, index) => (
                    <div key={index} className="mb-5">
                      <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        padding: '25px',
                        borderRadius: '12px',
                        color: '#fff',
                        marginBottom: '20px'
                      }}>
                        <i className={`bx ${feature.icon}`} style={{fontSize: '36px', marginBottom: '10px'}}></i>
                        <h3 style={{fontSize: '22px', marginBottom: '5px', color: '#fff'}}>{feature.title}</h3>
                        <p style={{margin: 0, color: 'rgba(255,255,255,0.9)'}}>{feature.subtitle}</p>
                      </div>
                      <ul style={{listStyle: 'none', padding: 0}}>
                        {feature.points.map((point, idx) => (
                          <li key={idx} style={{
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            paddingLeft: '20px'
                          }}>
                            <i className='bx bx-check-circle' style={{color: '#667eea', fontSize: '22px', minWidth: '22px', marginTop: '2px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="service-article-another mt-5">
                    <h3>📲 Work Smarter with Mobile CRM Access</h3>
                    <p>Stay updated and manage your business from anywhere with our mobile CRM:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <ul style={{listStyle: 'none', padding: 0}}>
                        <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                          <i className='bx bx-mobile-alt' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                          <span style={{color: '#666'}}>Access customer info and reports on your mobile device</span>
                        </li>
                        <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                          <i className='bx bx-bell' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                          <span style={{color: '#666'}}>Get instant updates, reminders, and notifications</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul style={{listStyle: 'none', padding: 0}}>
                        <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                          <i className='bx bx-user-voice' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                          <span style={{color: '#666'}}>Keep your team connected and efficient on the go</span>
                        </li>
                        <li style={{marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                          <i className='bx bx-sync' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                          <span style={{color: '#666'}}>Real-time data synchronization across all devices</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Core CRM Modules</h3>
                    <p>Comprehensive modules to manage every aspect of customer relationships:</p>
                  </div>

                  <div className="row mt-4">
                    {modules.map((module, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <i className={`bx ${module.icon}`}></i>
                          <h4>{module.title}</h4>
                          <p>{module.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose Our CRM?</h3>
                    <p>Experience these powerful benefits with our CRM solution:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className={`bx ${benefit.icon}`}></i>
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Great customer relationships don't happen by accident. They happen when you have the right tools to understand, engage, and serve your customers better every day.</p>
                    <span>- UJSS CRM Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Implementation Process</h3>
                    <p>We ensure a smooth and successful CRM implementation:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Requirements Analysis</h4>
                        <p>Understand your business processes, sales cycle, and specific CRM requirements.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>CRM Configuration</h4>
                        <p>Customize the CRM to match your workflow, terminology, and business rules.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Data Migration</h4>
                        <p>Securely migrate your existing customer data into the new CRM system.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>Team Training</h4>
                        <p>Comprehensive training for your team to ensure effective CRM adoption and usage.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">5</div>
                      <div className="service-process-step-content">
                        <h4>Go Live & Support</h4>
                        <p>Launch your CRM with dedicated support to ensure smooth operations and continuous improvement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Integration Capabilities</h3>
                    <p>Seamlessly connect your CRM with existing business tools:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
                        <h5 style={{fontSize: '17px', fontWeight: 600, marginBottom: '10px'}}>
                          <i className='bx bx-envelope' style={{color: '#667eea', marginRight: '10px'}}></i>
                          Email Integration
                        </h5>
                        <p style={{color: '#666', margin: 0, fontSize: '14px'}}>Gmail, Outlook, and other email platforms</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
                        <h5 style={{fontSize: '17px', fontWeight: 600, marginBottom: '10px'}}>
                          <i className='bx bx-message-square-dots' style={{color: '#667eea', marginRight: '10px'}}></i>
                          WhatsApp Business
                        </h5>
                        <p style={{color: '#666', margin: 0, fontSize: '14px'}}>Send messages and notifications directly</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
                        <h5 style={{fontSize: '17px', fontWeight: 600, marginBottom: '10px'}}>
                          <i className='bx bx-calculator' style={{color: '#667eea', marginRight: '10px'}}></i>
                          Accounting Software
                        </h5>
                        <p style={{color: '#666', margin: 0, fontSize: '14px'}}>Tally, QuickBooks, and other accounting tools</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div style={{background: '#f8f9fa', padding: '20px', borderRadius: '8px'}}>
                        <h5 style={{fontSize: '17px', fontWeight: 600, marginBottom: '10px'}}>
                          <i className='bx bx-phone' style={{color: '#667eea', marginRight: '10px'}}></i>
                          Telephony Systems
                        </h5>
                        <p style={{color: '#666', margin: 0, fontSize: '14px'}}>Click-to-call and call logging features</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-desktop' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Request Demo</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>See our CRM in action with a personalized demo!</p>
                        <Link href="/contact" className="default-btn">
                          Schedule Demo
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-phone-call' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Get Started</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's discuss your CRM needs and find the perfect solution!</p>
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
