import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally on Cloud with Admin Panel | Full Control Tally Hosting - UJSS',
  description: 'Get complete control over your Tally on Cloud with a dedicated admin panel. Manage users, monitor activity, and enhance security with our advanced Tally hosting solution.',
  keywords: 'Tally on Cloud with admin, Tally admin panel, cloud Tally with admin, manage Tally users, Tally cloud control, Tally hosting with admin, Tally admin features, UJSS Tally admin',
};

export default function TallyOnCloudWithAdminPanelPage() {
  const benefits = [
    {
      icon: 'bx-user-check',
      title: 'Full Admin Control',
      description: 'Manage users, assign permissions, and monitor activity with a powerful and intuitive admin panel, giving you complete authority over your Tally environment.'
    },
    {
      icon: 'bx-shield-alt-2',
      title: 'Enhanced Security & Permissions',
      description: 'Fine-tune user access with granular permissions and robust security features, ensuring your sensitive financial data is always protected.'
    },
    {
      icon: 'bx-show',
      title: 'Real-Time Monitoring',
      description: 'Keep a close watch on user activity, system performance, and data access in real-time to ensure compliance and operational efficiency.'
    },
    {
      icon: 'bx-data',
      title: 'Centralized Data Management',
      description: 'Maintain a single source of truth with centralized data, ensuring consistency and accuracy across all users and branches.'
    },
    {
      icon: 'bx-user-plus',
      title: 'Scalable User Management',
      description: 'Easily add, remove, or modify user access as your team evolves. The admin panel makes user management effortless.'
    },
    {
      icon: 'bx-tachometer',
      title: 'Customizable Dashboard',
      description: 'Get a clear, at-a-glance overview of your Tally operations with a customizable dashboard that displays the metrics most important to you.'
    }
  ];

  const features = [
    'User-level access control',
    'Activity logs and audit trails',
    'Session management (active/inactive users)',
    'Role-based permissions',
    'Real-time performance metrics',
    'Data access restrictions',
    'Two-factor authentication (2FA) enforcement',
    'Customizable reporting'
  ];

  const useCases = [
    {
      title: 'Businesses with Multiple Users',
      description: 'Efficiently manage access for a growing team, ensuring each user has the right permissions.',
      icon: 'bx-group'
    },
    {
      title: 'Companies with Strict Compliance Needs',
      description: 'Maintain audit trails and monitor user activity to meet regulatory and internal compliance requirements.',
      icon: 'bx-clipboard'
    },
    {
      title: 'Organizations with Remote Teams',
      description: 'Securely manage and monitor remote workers accessing Tally data from different locations.',
      icon: 'bx-wifi'
    },
    {
      title: 'Administrators & IT Managers',
      description: 'Simplify the task of managing Tally users and server resources with a centralized control panel.',
      icon: 'bx-user-tie'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg3">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally on Cloud with Admin Panel</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally on Cloud with Admin</li>
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
                  <img src="/assets/img/service/admin-panel.jpg" alt="Tally on Cloud with Admin Panel" />
                </div>
                
                <div className="service-article-content">
                  <h2>Complete Control and Visibility Over Your Tally on Cloud</h2>
                  <p>Take full command of your Tally on Cloud experience with a dedicated admin panel. This powerful solution provides the tools to manage users, monitor activity, enhance security, and customize your Tally environment to perfectly fit your business needs.</p>
                  
                  <p>The admin panel adds a layer of management and security that is essential for businesses with multiple users or strict compliance requirements. It transforms your Tally on Cloud into a fully managed, transparent, and secure accounting powerhouse.</p>

                  <div className="service-article-another mt-5">
                    <h3>🔑 Key Benefits of the Admin Panel</h3>
                    <p>Unlock a new level of control and efficiency with these advantages:</p>
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
                    <h3>Who Needs an Admin Panel?</h3>
                    <p>The admin panel is a crucial tool for businesses that require greater control:</p>
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
                    <h3>Admin Panel Features</h3>
                    <p>Our admin panel is packed with features to give you full control:</p>
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
                    <p>The admin panel gives us the confidence to scale our remote team without losing control over our financial data. It's a game-changer.</p>
                    <span>- A Satisfied Client</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Simple Steps to Get Your Admin Panel</h3>
                    <p>Activating your admin panel is a quick and easy process:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Request the Add-on</h4>
                        <p>Contact us to add the admin panel to your existing Tally on Cloud plan.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Admin Account Setup</h4>
                        <p>We create your primary admin account and provide you with secure login credentials.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Start Managing</h4>
                        <p>Log in to your admin panel and begin managing users, permissions, and monitoring activity.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Ready for Complete Control?</h3>
                    <p>Take your Tally on Cloud to the next level with the power of an admin panel.</p>
                  </div>

                  <div className="row mt-4 justify-content-center">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-shield-plus' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Upgrade Now</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Add the admin panel to your plan today and unlock powerful new capabilities.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#667eea'}}>
                          Contact Sales
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
