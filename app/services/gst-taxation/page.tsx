import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'GST & Taxation Services | GST Registration, Filing & Compliance - UJSS',
  description: 'Comprehensive GST and taxation services including GST registration, filing, and compliance. Our tax experts help you navigate the complexities of the Indian tax system.',
  keywords: 'GST services, taxation services, GST registration, GST filing, GST compliance, tax consultant, income tax filing, UJSS tax services',
};

export default function GstTaxationPage() {
  const benefits = [
    {
      icon: 'bx-file',
      title: 'Hassle-Free GST Compliance',
      description: 'We handle all aspects of GST compliance, from registration to filing, so you can focus on your business without worrying about penalties.'
    },
    {
      icon: 'bx-money',
      title: 'Tax Savings',
      description: 'Our tax experts help you identify opportunities for tax savings and plan your finances in the most tax-efficient way.'
    },
    {
      icon: 'bx-user-voice',
      title: 'Expert Guidance',
      description: 'Get expert guidance on all your tax-related queries and stay updated with the latest changes in the tax laws.'
    },
    {
      icon: 'bx-time-five',
      title: 'Timely Filing',
      description: 'We ensure that all your tax returns are filed on time, every time, helping you avoid late filing fees and penalties.'
    }
  ];

  const services = [
    {
      title: 'GST Registration',
      description: 'We assist you in obtaining your GST registration quickly and easily.'
    },
    {
      title: 'GST Return Filing',
      description: 'We handle the filing of all your monthly, quarterly, and annual GST returns.'
    },
    {
      title: 'GST Reconciliation',
      description: 'We reconcile your books of accounts with the GST returns to ensure accuracy and compliance.'
    },
    {
      title: 'Income Tax Return Filing',
      description: 'We provide income tax return filing services for individuals, businesses, and corporates.'
    },
    {
      title: 'TDS Return Filing',
      description: 'We handle the filing of your TDS returns and provide TDS compliance support.'
    },
    {
      title: 'Tax Planning & Advisory',
      description: 'We provide expert tax planning and advisory services to help you save taxes and grow your wealth.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>GST & Taxation Services</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>GST & Taxation</li>
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
                  <img src="/assets/img/service/gst-taxation.jpg" alt="GST & Taxation" />
                </div> */}

                <div className="service-article-content">
                  <h2>Navigate the Complexities of GST and Taxation with Our Expert Services</h2>
                  <p>The Indian tax system can be complex and challenging to navigate. Our team of tax experts is here to simplify it for you. We provide comprehensive GST and taxation services to help you stay compliant, save taxes, and grow your business.</p>
                  
                  <p>From GST registration and filing to income tax returns and tax planning, we offer a wide range of services to meet all your tax-related needs. We are committed to providing you with timely, accurate, and reliable services.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose UJSS for Your Tax Needs?</h3>
                    <p>Discover the benefits of our expert tax services:</p>
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
                    <h3>Our GST & Taxation Services</h3>
                    <p>We offer a comprehensive range of services to meet all your tax needs:</p>
                  </div>

                  <div className="row mt-4">
                    {services.map((service, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #3c8ce7 0%, #00eaff 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-file-text' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Tax Consultation</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Talk to our tax experts to discuss your requirements and get a personalized quote.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#3c8ce7'}}>
                          Request a Consultation
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
