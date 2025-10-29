import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Digital Marketing Services - SEO, Social Media & PPC | UJSS',
  description: 'Drive business growth with our comprehensive digital marketing services. Expert SEO, social media marketing, PPC campaigns, content marketing, and analytics.',
  keywords: 'Digital Marketing, SEO Services, Social Media Marketing, PPC, Content Marketing, Online Marketing',
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: 'bx-search',
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines with our data-driven SEO strategies'
    },
    {
      icon: 'bx-share-alt',
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all major social media platforms'
    },
    {
      icon: 'bx-money',
      title: 'PPC Advertising',
      description: 'Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns'
    },
    {
      icon: 'bx-edit',
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your target audience'
    },
    {
      icon: 'bx-mail-send',
      title: 'Email Marketing',
      description: 'Build customer relationships and drive conversions with personalized email campaigns'
    },
    {
      icon: 'bx-line-chart',
      title: 'Analytics & Reporting',
      description: 'Track performance, measure results, and optimize campaigns with detailed analytics'
    }
  ];

  const benefits = [
    'Increased online visibility and brand awareness',
    'Higher quality leads and customer acquisition',
    'Improved conversion rates and ROI',
    'Data-driven strategies and continuous optimization',
    'Comprehensive reporting and transparent communication',
    'Multi-channel marketing approach'
  ];

  return (
    <>
      <Navbar />
      
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Digital Marketing</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-article">
                {/* <div className="service-article-img">
                  <img src="/assets/img/service/service-details.jpg" alt="Digital Marketing" />
                </div> */}

                <div className="service-article-content">
                  <h2>Grow Your Business with Strategic Digital Marketing</h2>
                  <p>In today&apos;s digital-first world, having a strong online presence is crucial for business success. At UJSS, we provide comprehensive digital marketing services that help businesses of all sizes reach their target audience, generate quality leads, and achieve measurable growth. Our data-driven approach ensures every marketing dollar you spend delivers maximum return on investment.</p>
                  
                  <p>From search engine optimization to social media marketing, pay-per-click advertising to content creation, we offer a full spectrum of digital marketing services. Our experienced team stays ahead of the latest trends and algorithm changes to ensure your business remains competitive in the ever-evolving digital landscape.</p>

                  <div className="service-article-another mt-4">
                    <h3>Our Digital Marketing Services</h3>
                    <p>We offer a comprehensive suite of digital marketing services designed to drive results:</p>
                  </div>

                  <div className="row mt-4">
                    {services.map((service, index) => (
                      <div key={index} className="col-lg-6 col-md-6">
                        <div className="service-details-card">
                          <i className={`bx ${service.icon}`}></i>
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose Our Digital Marketing Services?</h3>
                    <p>Partner with us to take your online presence to the next level:</p>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <ul className="service-article-list">
                        {benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index}><i className='bx bx-check'></i> {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="service-article-list">
                        {benefits.slice(3).map((benefit, index) => (
                          <li key={index}><i className='bx bx-check'></i> {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our Process</h3>
                    <p>We follow a systematic approach to deliver successful digital marketing campaigns:</p>
                    <ol className="service-ordered-list">
                      <li><strong>Discovery & Research:</strong> We analyze your business, competitors, and target audience</li>
                      <li><strong>Strategy Development:</strong> Create a customized digital marketing strategy aligned with your goals</li>
                      <li><strong>Implementation:</strong> Execute campaigns across selected digital channels</li>
                      <li><strong>Monitoring & Optimization:</strong> Continuously track performance and optimize for better results</li>
                      <li><strong>Reporting & Analysis:</strong> Provide detailed reports and actionable insights</li>
                    </ol>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Industries We Serve</h3>
                    <p>We have successfully delivered digital marketing campaigns for various industries:</p>
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> E-commerce</li>
                          <li><i className='bx bx-check'></i> Healthcare</li>
                          <li><i className='bx bx-check'></i> Real Estate</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> Education</li>
                          <li><i className='bx bx-check'></i> Finance</li>
                          <li><i className='bx bx-check'></i> Technology</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> Hospitality</li>
                          <li><i className='bx bx-check'></i> Manufacturing</li>
                          <li><i className='bx bx-check'></i> Professional Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Let us help you dominate your market online. Our proven digital marketing strategies will help you reach more customers and grow your revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
