import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'SEO Services Mumbai | Search Engine Optimization Company India - UJSS',
  description: 'Rank higher on Google with expert SEO services. On-page SEO, off-page SEO, local SEO, keyword research, and technical optimization. Get more organic traffic with UJSS SEO services.',
  keywords: 'SEO services, search engine optimization, SEO company Mumbai, on-page SEO, off-page SEO, local SEO, keyword research, Google ranking, organic traffic, SEO agency India',
};

export default function SEOServicesPage() {
  const services = [
    {
      icon: 'bx-search-alt-2',
      title: 'Keyword Research',
      description: 'Find what your customers are searching for and make sure they find you with targeted keyword strategies.'
    },
    {
      icon: 'bx-file',
      title: 'On-Page SEO',
      description: 'Optimize your content, titles, meta tags, and URLs to improve visibility and relevance in search results.'
    },
    {
      icon: 'bx-link',
      title: 'Off-Page SEO',
      description: 'Strengthen your authority with quality backlinks, social signals, and online credibility building.'
    },
    {
      icon: 'bx-code-alt',
      title: 'Technical SEO',
      description: 'Make your site faster, mobile-friendly, and search-engine ready with technical optimizations.'
    },
    {
      icon: 'bx-map',
      title: 'Local SEO',
      description: 'Boost your presence in local searches and attract nearby customers with Google Business optimization.'
    },
    {
      icon: 'bx-bar-chart-alt-2',
      title: 'SEO Analytics',
      description: 'Track rankings, traffic, and conversions with detailed reporting and actionable insights.'
    }
  ];

  const benefits = [
    { icon: 'bx-trending-up', text: 'Higher search engine rankings and increased visibility' },
    { icon: 'bx-traffic-cone', text: 'More organic traffic and quality leads to your website' },
    { icon: 'bx-user-check', text: 'Better user experience with faster, mobile-friendly sites' },
    { icon: 'bx-dollar-circle', text: 'Higher ROI compared to paid advertising' },
    { icon: 'bx-trophy', text: 'Competitive advantage in your industry' },
    { icon: 'bx-line-chart', text: 'Long-term sustainable growth and brand authority' }
  ];

  const whyChoose = [
    'Tailored SEO strategies for your business goals',
    'Data-driven insights and monthly performance reports',
    '100% white-hat, ethical SEO methods',
    'Dedicated experts focused on results',
    'Continuous optimization for long-term growth',
    'Transparent reporting with measurable KPIs'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Search Engine Optimization (SEO)</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>SEO Services</li>
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
                  <img src="/assets/img/service/seo-services.jpg" alt="SEO Services" />
                </div> */}

                <div className="service-article-content">
                  <h2>Rank Higher. Get Noticed. Grow Faster.</h2>
                  <p>Your website deserves to be seen! At UJSS Services, we help your business climb to the top of Google search results with smart SEO strategies that attract the right audience and turn clicks into customers.</p>
                  
                  <p>Search Engine Optimization is not just about rankings — it's about visibility, credibility, and growth. Our comprehensive SEO services ensure your website performs exceptionally well in search engines while providing an excellent user experience.</p>

                  <div className="service-article-another mt-5">
                    <h3>💼 What We Offer</h3>
                    <p>Comprehensive SEO services to dominate search engine results:</p>
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
                    <h3>Why SEO Matters for Your Business</h3>
                    <p>Search Engine Optimization delivers powerful benefits that drive long-term business growth:</p>
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
                    <h3>🚀 Why Choose Us</h3>
                    <p>Partner with UJSS for SEO services that deliver real, measurable results:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {whyChoose.slice(0, 3).map((point, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check-circle' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="service-article-list" style={{listStyle: 'none', padding: 0}}>
                        {whyChoose.slice(3).map((point, index) => (
                          <li key={index} style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <i className='bx bx-check-circle' style={{color: '#667eea', fontSize: '24px', minWidth: '24px'}}></i>
                            <span style={{color: '#666', lineHeight: '1.6'}}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Good SEO work only works when combined with good User Experience. We optimize not just for search engines, but for your customers too!</p>
                    <span>- UJSS SEO Team</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our SEO Process</h3>
                    <p>We follow a systematic, proven approach to deliver exceptional SEO results:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>SEO Audit & Analysis</h4>
                        <p>Comprehensive website audit to identify technical issues, content gaps, and opportunities for improvement.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Competitor Research</h4>
                        <p>Analyze competitor strategies, keywords, and backlinks to find winning opportunities.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Keyword Strategy</h4>
                        <p>Research and select high-value keywords that your target audience is actively searching for.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>On-Page Optimization</h4>
                        <p>Optimize content, meta tags, headings, URLs, and internal linking for better search visibility.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">5</div>
                      <div className="service-process-step-content">
                        <h4>Technical SEO</h4>
                        <p>Improve site speed, mobile responsiveness, crawlability, and fix technical issues.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">6</div>
                      <div className="service-process-step-content">
                        <h4>Link Building</h4>
                        <p>Build high-quality backlinks from authoritative websites to boost domain authority.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">7</div>
                      <div className="service-process-step-content">
                        <h4>Monitoring & Reporting</h4>
                        <p>Track rankings, traffic, and conversions with regular reports and continuous optimization.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>SEO Packages</h3>
                    <p>Choose the right SEO package for your business needs:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                      <div className="pricing-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center', height: '100%'}}>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Basic SEO</h4>
                        <p style={{color: '#666', fontSize: '14px'}}>Perfect for small businesses and startups</p>
                        <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '20px'}}>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Up to 10 keywords</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> On-page optimization</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Monthly reporting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="pricing-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center', height: '100%'}}>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Professional SEO</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '14px'}}>Ideal for growing businesses</p>
                        <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '20px'}}>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check'></i> Up to 30 keywords</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check'></i> Complete optimization</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check'></i> Link building</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check'></i> Content marketing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="pricing-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center', height: '100%'}}>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Enterprise SEO</h4>
                        <p style={{color: '#666', fontSize: '14px'}}>For established businesses and e-commerce</p>
                        <ul style={{listStyle: 'none', padding: 0, textAlign: 'left', marginTop: '20px'}}>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Unlimited keywords</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Advanced strategies</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Priority support</li>
                          <li style={{marginBottom: '10px'}}><i className='bx bx-check' style={{color: '#667eea'}}></i> Dedicated manager</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-search-alt' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Free SEO Audit</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Get a comprehensive SEO audit of your website absolutely free!</p>
                        <Link href="/contact" className="default-btn">
                          Request Audit
                          <i className='bx bx-plus'></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-cta-box" style={{background: '#f8f9fa', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-bar-chart-square' style={{fontSize: '48px', color: '#667eea', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px'}}>Get Started Today</h4>
                        <p style={{color: '#666', marginBottom: '20px'}}>Let's discuss your SEO goals and create a winning strategy!</p>
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
