import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import '../../../styles/service-details.css';

import Link from 'next/link';

export const metadata = {
  title: 'Social Media Management Services | SMM Agency Mumbai - UJSS',
  description: 'Build your brand with expert social media management. Content creation, account management, engagement, paid campaigns, and analytics. Grow your business with UJSS SMM services.',
  keywords: 'social media management, SMM services, social media marketing, content creation, Facebook marketing, Instagram marketing, LinkedIn marketing, social media strategy, Mumbai SMM agency',
};

export default function SocialMediaManagementPage() {
  const services = [
    {
      icon: 'bx-pen',
      title: 'Content Creation',
      description: 'Eye-catching posts, stories, and videos that reflect your brand\'s personality and engage your audience.'
    },
    {
      icon: 'bx-user-circle',
      title: 'Account Management',
      description: 'Consistent posting, hashtag strategy, and profile optimization for better visibility and reach.'
    },
    {
      icon: 'bx-conversation',
      title: 'Audience Engagement',
      description: 'We respond, interact, and build relationships with your audience to grow your community.'
    },
    {
      icon: 'bx-target-lock',
      title: 'Paid Campaigns',
      description: 'Run targeted ads on Facebook, Instagram, and LinkedIn to reach the right audience effectively.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Analytics & Reporting',
      description: 'Track performance, measure growth, and improve results every month with detailed insights.'
    },
    {
      icon: 'bx-trending-up',
      title: 'Growth Strategy',
      description: 'Custom strategies designed to increase followers, engagement, and conversions organically.'
    }
  ];

  const platforms = [
    { name: 'Facebook', icon: 'bxl-facebook-circle', color: '#1877f2' },
    { name: 'Instagram', icon: 'bxl-instagram', color: '#e4405f' },
    { name: 'LinkedIn', icon: 'bxl-linkedin-square', color: '#0077b5' },
    { name: 'Twitter', icon: 'bxl-twitter', color: '#1da1f2' },
    { name: 'YouTube', icon: 'bxl-youtube', color: '#ff0000' },
    { name: 'Pinterest', icon: 'bxl-pinterest', color: '#bd081c' }
  ];

  const benefits = [
    'Creative and result-driven social media experts',
    'Consistent posting and engagement to build your brand',
    'Customized strategies for your business goals',
    'Regular performance insights and reports',
    'Transparent communication and full support',
    'Increased brand awareness and customer loyalty'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Social Media Management</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Social Media Management</li>
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
                  <img src="/assets/img/service/social-media-management.jpg" alt="Social Media Management" />
                </div> */}

                <div className="service-article-content">
                  <h2>Build Your Brand. Engage Your Audience. Grow Your Business.</h2>
                  <p>Your social media is the voice of your brand — and we make sure it's heard loud and clear! At UJSS Services, we help businesses create a powerful online presence through engaging content, smart strategy, and consistent growth.</p>
                  
                  <p>We handle everything from content creation to audience engagement so you can focus on running your business. Our team of social media experts understands what works on each platform and creates content that resonates with your target audience.</p>

                  <div className="service-article-another mt-5">
                    <h3>🚀 What We Do</h3>
                    <p>Comprehensive social media management services tailored to your business needs:</p>
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
                    <h3>Platforms We Manage</h3>
                    <p>We create engaging content and manage your presence across all major social media platforms:</p>
                  </div>

                  <div className="row mt-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-3">
                        <div className="platform-box" style={{
                          background: '#fff',
                          border: '2px solid #f0f0f0',
                          borderRadius: '12px',
                          padding: '25px',
                          textAlign: 'center',
                          transition: 'all 0.3s ease'
                        }}>
                          <i className={`bx ${platform.icon}`} style={{
                            fontSize: '48px',
                            color: platform.color,
                            marginBottom: '10px'
                          }}></i>
                          <h4 style={{fontSize: '18px', fontWeight: 600, color: '#1a1a1a'}}>{platform.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>💡 Why Choose UJSS for SMM?</h3>
                    <p>Partner with us to elevate your social media presence and achieve measurable results:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {benefits.slice(3).map((benefit, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Social media isn't just about posting — it's about building relationships and creating a community around your brand. Let us help you make an impact!</p>
                    <span>- UJSS Social Media Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our Content Strategy</h3>
                    <p>We create a comprehensive content strategy that aligns with your brand and business goals:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Brand Analysis</h4>
                        <p>We study your brand, competitors, and target audience to understand what resonates best.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Content Planning</h4>
                        <p>Create a monthly content calendar with diverse post types, themes, and campaigns.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Content Creation</h4>
                        <p>Design eye-catching graphics, write compelling captions, and produce engaging videos.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>Publishing & Engagement</h4>
                        <p>Schedule posts at optimal times and actively engage with your audience through comments and messages.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">5</div>
                      <div className="service-process-step-content">
                        <h4>Analytics & Optimization</h4>
                        <p>Monitor performance metrics, analyze results, and continuously optimize strategy for better engagement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-calendar' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Schedule a Consultation</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's discuss your social media goals and create a winning strategy!</p>
                        <Link href="/contact" className="default-btn">
                          Book Now
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-bar-chart-alt' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Get Social Audit</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Free social media audit to understand your current performance.</p>
                        <Link href="/contact" className="default-btn">
                          Request Audit
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
