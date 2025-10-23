import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Digital Signature Certificate (DSC) | Class 3 DSC Provider - UJSS',
  description: 'Get your Class 3 Digital Signature Certificate (DSC) for e-tendering, e-procurement, and other online transactions. We are a trusted DSC provider in Mumbai.',
  keywords: 'DSC, Digital Signature Certificate, Class 3 DSC, DSC provider, DSC Mumbai, e-tendering DSC, e-procurement DSC, UJSS DSC',
};

export default function DscServicesPage() {
  const benefits = [
    {
      icon: 'bx-shield-quarter',
      title: 'Enhanced Security',
      description: 'A DSC provides a high level of security for your online transactions by ensuring the authenticity and integrity of the documents.'
    },
    {
      icon: 'bx-time-five',
      title: 'Time and Cost Savings',
      description: 'Sign documents digitally from anywhere, anytime, reducing the need for physical paperwork, printing, and courier services.'
    },
    {
      icon: 'bx-check-double',
      title: 'Legal Validity',
      description: 'Digital signatures are legally valid under the Information Technology Act, 2000, making them as authentic as physical signatures.'
    },
    {
      icon: 'bx-globe',
      title: 'Wide Acceptance',
      description: 'DSCs are widely accepted for various online transactions, including e-tendering, e-procurement, income tax filing, and more.'
    }
  ];

  const dscTypes = [
    {
      title: 'Class 3 DSC',
      description: 'The most secure type of DSC, used for e-tendering, e-procurement, and other high-security online transactions.'
    },
    {
      title: 'DGFT DSC',
      description: 'Specifically for DGFT (Directorate General of Foreign Trade) users for online transactions on the DGFT portal.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg5">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Digital Signature Certificate (DSC)</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>DSC Services</li>
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
                  <img src="/assets/img/service/dsc-services.jpg" alt="DSC Services" />
                </div>
                
                <div className="service-article-content">
                  <h2>Secure Your Online Transactions with a Digital Signature Certificate</h2>
                  <p>In the age of digital transformation, a Digital Signature Certificate (DSC) is an essential tool for ensuring the security and authenticity of your online transactions. A DSC is the digital equivalent of a physical signature and is used to sign electronic documents, authenticate your identity, and ensure that the data is not tampered with.</p>
                  
                  <p>At UJSS, we are a trusted provider of Digital Signature Certificates in Mumbai. We offer a hassle-free process for obtaining your DSC, with expert guidance and support at every step.</p>

                  <div className="service-article-another mt-5">
                    <h3>The Importance of a DSC</h3>
                    <p>Discover the key benefits of using a Digital Signature Certificate:</p>
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
                    <h3>Types of DSC We Offer</h3>
                    <p>We provide different types of DSCs to meet your specific needs:</p>
                  </div>

                  <div className="row mt-4">
                    {dscTypes.map((dsc, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{dsc.title}</h4>
                          <p>{dsc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-file' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get Your DSC Today</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us to get your Digital Signature Certificate quickly and easily. Our team is here to assist you with the entire process.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Apply for DSC
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
