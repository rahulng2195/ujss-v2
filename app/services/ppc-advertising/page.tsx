import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';
export const metadata = {
  title: 'PPC Advertising Services | Pay Per Click Marketing Mumbai - UJSS',
  description: 'Drive instant traffic with expert PPC advertising. Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads management. Turn clicks into customers with UJSS PPC services.',
  keywords: 'PPC services, pay per click advertising, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, PPC management, paid advertising, PPC agency Mumbai, digital advertising',
};

export default function PPCAdvertisingPage() {
  const services = [
    {
      icon: 'bxl-google',
      title: 'Google Ads Campaigns',
      description: 'Get top placement on Google searches and reach customers actively looking for your services or products.'
    },
    {
      icon: 'bxl-facebook-circle',
      title: 'Social Media Ads',
      description: 'Promote your brand on Facebook, Instagram, and LinkedIn to boost engagement and visibility.'
    },
    {
      icon: 'bx-paint',
      title: 'Ad Copy & Design',
      description: 'Compelling ad creatives and copy that attract clicks and drive conversions effectively.'
    },
    {
      icon: 'bx-target-lock',
      title: 'Audience Targeting',
      description: 'Precise targeting based on demographics, interests, behavior, and intent to reach the right people.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Performance Tracking',
      description: 'Real-time reporting to monitor clicks, leads, and ROI for better decision-making.'
    },
    {
      icon: 'bx-refresh',
      title: 'Campaign Optimization',
      description: 'Continuous testing and optimization to improve ad performance and reduce cost per acquisition.'
    }
  ];

  const platforms = [
    { name: 'Google Ads', icon: 'bxl-google', description: 'Search, Display, Shopping, and Video Ads' },
    { name: 'Facebook Ads', icon: 'bxl-facebook', description: 'News Feed, Stories, and Messenger Ads' },
    { name: 'Instagram Ads', icon: 'bxl-instagram-alt', description: 'Feed, Stories, Reels, and Explore Ads' },
    { name: 'LinkedIn Ads', icon: 'bxl-linkedin', description: 'Sponsored Content, InMail, and Text Ads' },
    { name: 'YouTube Ads', icon: 'bxl-youtube', description: 'Skippable, Non-skippable, and Bumper Ads' },
    { name: 'Twitter Ads', icon: 'bxl-twitter', description: 'Promoted Tweets, Accounts, and Trends' }
  ];

  const benefits = [
    'Campaigns tailored to your goals and audience',
    'Data-driven strategies for cost-effective ads',
    'Transparent reporting — know where every rupee goes',
    'Continuous optimization for best performance',
    'Expertise in Google, Meta, and LinkedIn Ads',
    'Instant results and scalable campaigns'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Pay Per Click (PPC) Services</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>PPC Advertising</li>
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
                  <img src="/assets/img/service/ppc-advertising.jpg" alt="PPC Advertising" />
                </div>
                
                <div className="service-article-content">
                  <h2>💬 Turn Clicks Into Customers</h2>
                  <p>With the right PPC strategy, you don't just get traffic — you get results. Let UJSS Services create powerful ad campaigns that grow your business faster than ever.</p>
                  
                  <p>With our PPC advertising services, we create targeted ad campaigns that drive clicks, leads, and conversions while optimizing every rupee you spend. Get immediate visibility and measurable ROI with our expert PPC management.</p>

                  <div className="service-article-another mt-5">
                    <h3>⚡ What We Offer</h3>
                    <p>Comprehensive PPC services designed to maximize your advertising ROI:</p>
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
                    <h3>Advertising Platforms We Manage</h3>
                    <p>We create and manage high-performing campaigns across all major advertising platforms:</p>
                  </div>

                  <div className="row mt-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div style={{
                          background: '#fff',
                          border: '2px solid #f0f0f0',
                          borderRadius: '12px',
                          padding: '25px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px',
                          transition: 'all 0.3s ease',
                          height: '100%'
                        }}>
                          <i className={`bx ${platform.icon}`} style={{
                            fontSize: '48px',
                            color: '#667eea',
                            minWidth: '48px'
                          }}></i>
                          <div>
                            <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '5px'}}>{platform.name}</h4>
                            <p style={{color: '#666', fontSize: '14px', margin: 0}}>{platform.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>🚀 Why Choose UJSS for PPC?</h3>
                    <p>Partner with us to achieve maximum returns on your advertising investment:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check-circle' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {benefits.slice(3).map((benefit, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check-circle' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Every click costs money, so every click should count. We ensure your PPC campaigns deliver maximum value for every rupee invested!</p>
                    <span>- UJSS PPC Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our PPC Management Process</h3>
                    <p>We follow a proven methodology to create and manage successful PPC campaigns:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Goal Setting & Strategy</h4>
                        <p>Define clear objectives, target audience, budget, and KPIs for your PPC campaigns.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Keyword & Audience Research</h4>
                        <p>Identify high-converting keywords and create detailed audience segments for targeting.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Campaign Creation</h4>
                        <p>Set up campaigns with optimized structure, ad groups, targeting, and bidding strategies.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>Ad Creative Development</h4>
                        <p>Create compelling ad copy and eye-catching visuals that drive clicks and conversions.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">5</div>
                      <div className="service-process-step-content">
                        <h4>Launch & Monitor</h4>
                        <p>Launch campaigns and closely monitor performance metrics, spending, and quality scores.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">6</div>
                      <div className="service-process-step-content">
                        <h4>Optimize & Scale</h4>
                        <p>Continuously test, optimize, and scale winning campaigns for maximum ROI.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>What You Get With Our PPC Services</h3>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                      <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                          <i className='bx bx-bar-chart-alt' style={{color: '#667eea', fontSize: '28px'}}></i>
                          Detailed Analytics
                        </h4>
                        <p style={{color: '#666', margin: 0}}>Comprehensive reports on impressions, clicks, conversions, and ROI with actionable insights.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                          <i className='bx bx-dollar-circle' style={{color: '#667eea', fontSize: '28px'}}></i>
                          Budget Control
                        </h4>
                        <p style={{color: '#666', margin: 0}}>Complete transparency and control over your advertising spend with flexible budgets.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                          <i className='bx bx-test-tube' style={{color: '#667eea', fontSize: '28px'}}></i>
                          A/B Testing
                        </h4>
                        <p style={{color: '#666', margin: 0}}>Continuous testing of ad copies, creatives, and landing pages to improve performance.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div style={{background: '#f8f9fa', padding: '25px', borderRadius: '12px'}}>
                        <h4 style={{fontSize: '18px', fontWeight: 600, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                          <i className='bx bx-target-lock' style={{color: '#667eea', fontSize: '28px'}}></i>
                          Remarketing
                        </h4>
                        <p style={{color: '#666', margin: 0}}>Re-engage visitors who didn't convert the first time with strategic remarketing campaigns.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-calculator' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Free PPC Audit</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Get a comprehensive analysis of your existing PPC campaigns!</p>
                        <Link href="/contact" className="default-btn">
                          Request Audit
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-rocket' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Start Your Campaign</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's create a winning PPC strategy for your business!</p>
                        <Link href="/contact" className="default-btn">
                          Get Started
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
