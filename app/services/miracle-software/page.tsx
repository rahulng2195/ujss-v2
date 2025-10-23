import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Miracle Accounting Software | Simple & Powerful Accounting - UJSS',
  description: 'Discover Miracle Accounting Software, a simple yet powerful solution for small and medium businesses. Manage your accounting, inventory, and billing with ease.',
  keywords: 'Miracle accounting software, accounting software for small business, simple accounting software, inventory management software, billing software, UJSS Miracle software',
};

export default function MiracleSoftwarePage() {
  const benefits = [
    {
      icon: 'bx-user-friendly',
      title: 'Simple & User-Friendly',
      description: 'Miracle is designed to be simple and easy to use, even for users with no prior accounting knowledge.'
    },
    {
      icon: 'bx-money',
      title: 'Affordable Solution',
      description: 'Get all the essential accounting features at an affordable price, making it the perfect choice for small and medium businesses.'
    },
    {
      icon: 'bx-box',
      title: 'Inventory Management',
      description: 'Manage your inventory with ease, including stock tracking, purchase and sales order management, and more.'
    },
    {
      icon: 'bx-file',
      title: 'GST & Taxation',
      description: 'Stay compliant with the latest GST and taxation laws with Miracle’s built-in compliance features.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Insightful Reports',
      description: 'Generate a wide range of financial reports to get valuable insights into your business performance.'
    },
    {
      icon: 'bx-customize',
      title: 'Customizable & Scalable',
      description: 'Miracle can be customized to meet your specific business needs and can scale as your business grows.'
    }
  ];

  const features = [
    'Sales and purchase management',
    'Inventory management',
    'GST and taxation',
    'Financial accounting',
    'Billing and invoicing',
    'MIS reports',
    'Multi-user access',
    'Barcode integration'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg4">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Miracle Accounting Software</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Miracle Accounting Software</li>
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
                  <img src="/assets/img/service/miracle-software.jpg" alt="Miracle Accounting Software" />
                </div>
                
                <div className="service-article-content">
                  <h2>Simple, Powerful, and Affordable Accounting Software for Your Business</h2>
                  <p>Miracle Accounting Software is a comprehensive solution designed specifically for small and medium businesses. It is simple to use, yet powerful enough to handle all your accounting, inventory, and billing needs. With Miracle, you can manage your business finances with ease and confidence.</p>
                  
                  <p>Whether you are a trader, manufacturer, or service provider, Miracle has all the features you need to streamline your operations and grow your business. It is a cost-effective alternative to other complex and expensive accounting software.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose Miracle Accounting Software?</h3>
                    <p>Discover the benefits of our simple and powerful accounting solution:</p>
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
                    <h3>Core Features of Miracle</h3>
                    <p>Miracle is packed with features to help you manage your business efficiently:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {features.map((feature, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className='bx bx-check-circle'></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-rocket' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Demo of Miracle Accounting Software</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us today for a free demo and a personalized quote for Miracle Accounting Software.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Request a Demo
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
