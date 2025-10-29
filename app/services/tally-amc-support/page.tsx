import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally AMC & Support | Annual Maintenance Contract for Tally - UJSS',
  description: 'Get 24/7 expert Tally support with our Annual Maintenance Contract (AMC). We provide troubleshooting, data recovery, and performance optimization to keep your Tally running smoothly.',
  keywords: 'Tally AMC, Tally support, Tally annual maintenance, Tally troubleshooting, Tally data recovery, Tally help, Tally expert support, UJSS Tally AMC',
};

export default function TallyAmcSupportPage() {
  const benefits = [
    {
      icon: 'bx-headphone',
      title: '24/7 Expert Support',
      description: 'Our team of certified Tally experts is available around the clock to provide you with timely and effective support whenever you need it.'
    },
    {
      icon: 'bx-tachometer',
      title: 'Proactive Maintenance',
      description: 'We proactively monitor your Tally installation to identify and resolve potential issues before they impact your business operations.'
    },
    {
      icon: 'bx-data',
      title: 'Data Recovery Services',
      description: 'In the unfortunate event of data corruption or loss, our experts will help you recover your valuable Tally data quickly and efficiently.'
    },
    {
      icon: 'bx-up-arrow-alt',
      title: 'Regular Updates & Upgrades',
      description: 'We ensure your Tally is always up-to-date with the latest features, improvements, and statutory compliance updates.'
    },
    {
      icon: 'bx-phone-call',
      title: 'Unlimited Telephonic Support',
      description: 'Get instant support over the phone for any Tally-related queries or issues, without any limit on the number of calls.'
    },
    {
      icon: 'bx-laptop',
      title: 'Remote & On-site Support',
      description: 'We provide support both remotely and on-site, depending on the complexity of the issue and your specific needs.'
    }
  ];

  const amcPlans = [
    {
      title: 'Basic Plan',
      price: 'Starting at ₹X,XXX',
      features: [
        'Telephonic Support',
        'Remote Support',
        'Email Support',
        'Minor Version Updates'
      ]
    },
    {
      title: 'Advanced Plan',
      price: 'Starting at ₹Y,YYY',
      features: [
        'All Basic Plan features',
        'On-site Visits',
        'Data Recovery',
        'Performance Optimization'
      ]
    },
    {
      title: 'Premium Plan',
      price: 'Starting at ₹Z,ZZZ',
      features: [
        'All Advanced Plan features',
        'Dedicated Account Manager',
        'Proactive Health Checks',
        'Custom Report Assistance'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg3">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally AMC & Support</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally AMC & Support</li>
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
                  <img src="/assets/img/service/tally-amc.jpg" alt="Tally AMC & Support" />
                </div> */}

                <div className="service-article-content">
                  <h2>Ensure Uninterrupted Business Operations with Our Tally AMC</h2>
                  <p>Your Tally software is the backbone of your business operations. Our Tally Annual Maintenance Contract (AMC) is designed to provide you with complete peace of mind, ensuring your Tally runs smoothly and efficiently at all times. With our expert support, you can focus on your business, while we take care of your Tally.</p>
                  
                  <p>Our Tally AMC is a comprehensive service that covers all aspects of Tally support, from troubleshooting and data recovery to performance optimization and regular updates. We are committed to providing you with a hassle-free Tally experience.</p>

                  <div className="service-article-another mt-5">
                    <h3>The Advantages of Our Tally AMC</h3>
                    <p>Discover the benefits of our comprehensive Tally support services:</p>
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
                    <h3>Our Tally AMC Plans</h3>
                    <p>We offer a range of flexible AMC plans to suit your specific needs and budget:</p>
                  </div>

                  <div className="row mt-4">
                    {amcPlans.map((plan, index) => (
                      <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{plan.title}</h4>
                          <p>{plan.price}</p>
                          <ul>
                            {plan.features.map((feature, i) => (
                              <li key={i}><i className='bx bx-check'></i> {feature}</li>
                            ))}
                          </ul>
                          <Link href="/contact" className="default-btn">
                            Choose Plan
                            <i className='bx bx-plus'></i>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #3c8ce7 0%, #00eaff 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-headphone' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Tally Health Check</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us today for a free health check of your Tally installation and a personalized AMC quote.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#3c8ce7'}}>
                          Request a Health Check
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
