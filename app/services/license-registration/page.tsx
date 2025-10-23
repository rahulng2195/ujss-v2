import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Business License Registration Services | Trade, FSSAI, & More - UJSS',
  description: 'We provide hassle-free business license registration services including trade license, FSSAI license, and more. Ensure your business is fully compliant with all the necessary licenses.',
  keywords: 'business license registration, trade license, FSSAI license, business license consultant, license registration services, UJSS license services',
};

export default function LicenseRegistrationPage() {
  const benefits = [
    {
      icon: 'bx-file-blank',
      title: 'Ensure Full Compliance',
      description: 'We help you obtain all the necessary licenses to ensure your business is fully compliant with the law, avoiding any penalties or legal issues.'
    },
    {
      icon: 'bx-time',
      title: 'Save Time and Effort',
      description: 'Our experts handle the entire application process, from documentation to submission, saving you valuable time and effort.'
    },
    {
      icon: 'bx-user-voice',
      title: 'Expert Guidance',
      description: 'Get expert guidance on which licenses are applicable to your business and the specific requirements for each license.'
    },
    {
      icon: 'bx-check-shield',
      title: 'Peace of Mind',
      description: 'With our professional assistance, you can have peace of mind knowing that your business is legally compliant and protected.'
    }
  ];

  const licenseTypes = [
    {
      title: 'Trade License',
      description: 'A license required to carry out a particular trade or business in a specific area.'
    },
    {
      title: 'FSSAI License',
      description: 'A mandatory license for all food business operators in India.'
    },
    {
      title: 'Import Export Code (IEC)',
      description: 'A necessary license for businesses involved in the import and export of goods.'
    },
    {
      title: 'Shop and Establishment License',
      description: 'A state-based license required for all shops and commercial establishments.'
    },
    {
      title: 'Professional Tax Registration',
      description: 'A tax levied on professionals and trades by the state government.'
    },
    {
      title: 'Other Licenses',
      description: 'We also assist with various other industry-specific licenses and registrations.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg2">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Business License Registration</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>License Registration</li>
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
                  <img src="/assets/img/service/license-registration.jpg" alt="License Registration" />
                </div>
                
                <div className="service-article-content">
                  <h2>Ensure Your Business is Fully Compliant with Our License Registration Services</h2>
                  <p>Running a business involves complying with various laws and regulations, which includes obtaining the necessary licenses and registrations. Our business license registration services are designed to help you navigate this complex process and ensure your business is fully compliant.</p>
                  
                  <p>Our team of experts will assist you in identifying the licenses applicable to your business and guide you through the entire application process, from documentation to submission. We make it simple and hassle-free for you to get all the required licenses, so you can focus on what you do best - running your business.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Choose UJSS for License Registration?</h3>
                    <p>Discover the benefits of our professional license registration services:</p>
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
                    <h3>Types of Licenses We Assist With</h3>
                    <p>We provide assistance with a wide range of business licenses:</p>
                  </div>

                  <div className="row mt-4">
                    {licenseTypes.map((license, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{license.title}</h4>
                          <p>{license.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-file-find' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free License Consultation</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Talk to our experts to discuss your business and get a free consultation on the licenses you require.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Request a Consultation
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
