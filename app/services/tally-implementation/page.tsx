import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally Implementation Services | Expert Tally Setup & Configuration - UJSS',
  description: 'Professional Tally implementation services including setup, configuration, and data migration. Our experts ensure a seamless transition to Tally for your business.',
  keywords: 'Tally implementation, Tally setup, Tally configuration, Tally data migration, Tally expert, Tally services, TallyPrime implementation, UJSS Tally implementation',
};

export default function TallyImplementationPage() {
  const benefits = [
    {
      icon: 'bx-cog',
      title: 'Expert Configuration',
      description: 'We configure Tally to match your specific business processes, ensuring optimal performance and efficiency from day one.'
    },
    {
      icon: 'bx-transfer-alt',
      title: 'Seamless Data Migration',
      description: 'Our experts handle the migration of your existing data to Tally with precision and care, ensuring a smooth and hassle-free transition.'
    },
    {
      icon: 'bx-user-voice',
      title: 'Hands-On Training',
      description: 'We provide comprehensive training to your team to ensure they are proficient in using Tally and can leverage its full potential.'
    },
    {
      icon: 'bx-check-shield',
      title: 'Post-Implementation Support',
      description: 'Our relationship doesn’t end after implementation. We provide ongoing support to ensure your Tally runs smoothly.'
    },
    {
      icon: 'bx-customize',
      title: 'Customization & Integration',
      description: 'We can customize Tally and integrate it with your other business applications to create a unified and streamlined ecosystem.'
    },
    {
      icon: 'bx-timer',
      title: 'Time & Cost Savings',
      description: 'A proper Tally implementation saves you time and money by automating tasks, improving accuracy, and providing valuable insights.'
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Requirement Analysis',
      description: 'We conduct a thorough analysis of your business processes and requirements to create a detailed implementation plan.'
    },
    {
      number: '2',
      title: 'Tally Installation & Setup',
      description: 'We install and set up Tally at your premises or on the cloud, configuring it to meet your specific needs.'
    },
    {
      number: '3',
      title: 'Data Migration',
      description: 'We migrate your master data and opening balances from your existing software to Tally with accuracy and integrity.'
    },
    {
      number: '4',
      title: 'Training & Go-Live',
      description: 'We train your users and guide you through the go-live process, ensuring a smooth and successful transition.'
    },
    {
      number: '5',
      title: 'Post-Implementation Review',
      description: 'After go-live, we conduct a review to ensure everything is working as expected and to address any issues.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg2">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally Implementation</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally Implementation</li>
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
                  <img src="/assets/img/service/tally-implementation.jpg" alt="Tally Implementation" />
                </div> */}

                <div className="service-article-content">
                  <h2>Professional Tally Implementation for a Seamless Transition</h2>
                  <p>A successful Tally implementation is more than just installing software. It’s about understanding your business, configuring the software to your needs, and ensuring your team is ready to use it effectively. At UJSS, our team of Tally experts provides end-to-end implementation services to ensure a seamless and successful transition to Tally.</p>
                  
                  <p>We have a proven methodology that has helped hundreds of businesses of all sizes and industries to successfully implement Tally. Our goal is to get you up and running on Tally as quickly and efficiently as possible, with minimal disruption to your business operations.</p>

                  <div className="service-article-another mt-5">
                    <h3>The UJSS Advantage in Tally Implementation</h3>
                    <p>Discover the benefits of our professional Tally implementation services:</p>
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
                    <h3>Our Tally Implementation Process</h3>
                    <p>We follow a structured and proven process to ensure a successful implementation:</p>
                  </div>

                  <div className="service-process-steps">
                    {processSteps.map((step, index) => (
                      <div key={index} className="service-process-step">
                        <div className="service-process-step-number">{step.number}</div>
                        <div className="service-process-step-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-rocket' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Tally Implementation Consultation</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Talk to our Tally experts to discuss your implementation needs and get a personalized quote.</p>
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
