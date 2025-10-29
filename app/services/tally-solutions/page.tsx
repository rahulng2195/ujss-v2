import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Tally Solutions - Implementation, Customization & Support | UJSS',
  description: 'Expert Tally software implementation, customization, migration, and 24/7 support services. Streamline your accounting and business operations with our comprehensive Tally solutions.',
  keywords: 'Tally Solutions, Tally Implementation, Tally Support, Tally Customization, Tally Migration, Accounting Software',
};

export default function TallySolutionsPage() {
  const features = [
    {
      icon: 'bx-download',
      title: 'Tally Implementation',
      description: 'Complete setup and configuration of TallyPrime tailored to your business needs'
    },
    {
      icon: 'bx-cog',
      title: 'Customization',
      description: 'Custom reports, vouchers, and modules designed specifically for your industry'
    },
    {
      icon: 'bx-transfer',
      title: 'Data Migration',
      description: 'Seamless migration from other accounting software to Tally with zero data loss'
    },
    {
      icon: 'bx-book',
      title: 'Training & Support',
      description: 'Comprehensive training programs and 24/7 technical support for your team'
    },
    {
      icon: 'bx-sync',
      title: 'Tally Updates',
      description: 'Regular updates, patches, and version upgrades to keep your system current'
    },
    {
      icon: 'bx-shield-check',
      title: 'Compliance',
      description: 'GST, taxation, and regulatory compliance support built into your Tally setup'
    }
  ];

  const benefits = [
    'Streamlined accounting and inventory management',
    'Real-time business insights and reporting',
    'Multi-user access with role-based permissions',
    'Automated GST filing and compliance',
    'Integration with banking and payment gateways',
    'Mobile app access for on-the-go management'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Tally Solutions</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally Solutions</li>
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
                  <img src="/assets/img/service/service-details.jpg" alt="Tally Solutions" />
                </div> */}


                <div className="service-article-content">
                  <h2>Comprehensive Tally Solutions for Your Business</h2>
                  <p>At UJSS, we are proud to be your trusted partner for all Tally-related services. As authorized Tally partners, we bring years of expertise in implementing, customizing, and supporting TallyPrime for businesses across various industries. Whether you&apos;re a small startup or a large enterprise, our Tally solutions are designed to streamline your accounting, inventory, and business management processes.</p>
                  
                  <p>TallyPrime is India&apos;s leading business management software trusted by millions of businesses. It simplifies accounting, inventory management, GST compliance, and business reporting. Our expert team ensures that you get the most out of Tally by providing end-to-end implementation, customization, training, and ongoing support.</p>

                  <div className="service-article-another mt-4">
                    <h3>What We Offer</h3>
                    <p>Our comprehensive Tally services are designed to address every aspect of your business needs:</p>
                  </div>

                  <div className="row mt-4">
                    {features.map((feature, index) => (
                      <div key={index} className="col-lg-6 col-md-6">
                        <div className="service-details-card">
                          <i className={`bx ${feature.icon}`}></i>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose Our Tally Solutions?</h3>
                    <p>Our Tally implementation is not just about installing software – it&apos;s about transforming your business operations. We work closely with you to understand your unique requirements and deliver solutions that drive efficiency and growth.</p>
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
                    <h3>Industries We Serve</h3>
                    <p>We have successfully implemented Tally solutions for businesses across various sectors including:</p>
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> Manufacturing</li>
                          <li><i className='bx bx-check'></i> Retail & Distribution</li>
                          <li><i className='bx bx-check'></i> Trading</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> Services</li>
                          <li><i className='bx bx-check'></i> Healthcare</li>
                          <li><i className='bx bx-check'></i> Education</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="service-article-list">
                          <li><i className='bx bx-check'></i> Hospitality</li>
                          <li><i className='bx bx-check'></i> Real Estate</li>
                          <li><i className='bx bx-check'></i> Construction</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Transform your business operations with TallyPrime. Our expert team will guide you every step of the way, from implementation to mastery.</p>
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
