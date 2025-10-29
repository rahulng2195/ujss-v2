import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally Data Synchronization | Real-Time Tally Sync - UJSS',
  description: 'Seamlessly synchronize your Tally data across multiple branches and locations in real-time. Ensure data consistency and accuracy with our Tally data synchronization solutions.',
  keywords: 'Tally data synchronization, Tally sync, Tally data sync, Tally real-time sync, Tally branch sync, Tally multi-location sync, UJSS Tally sync',
};

export default function TallyDataSyncPage() {
  const benefits = [
    {
      icon: 'bx-sync',
      title: 'Real-Time Data Sync',
      description: 'Synchronize your Tally data across all your branches and locations in real-time, ensuring everyone has access to the latest information.'
    },
    {
      icon: 'bx-check-double',
      title: 'Data Consistency & Accuracy',
      description: 'Eliminate data duplication and inconsistencies by maintaining a single, unified source of truth across your entire organization.'
    },
    {
      icon: 'bx-sitemap',
      title: 'Centralized Control',
      description: 'Maintain centralized control over your data while providing decentralized access to your branches and remote users.'
    },
    {
      icon: 'bx-trending-up',
      title: 'Improved Decision Making',
      description: 'Make faster and more informed decisions with access to real-time, consolidated data from all your business locations.'
    },
    {
      icon: 'bx-network-chart',
      title: 'Works in Low Bandwidth',
      description: 'Our synchronization solution is designed to work efficiently even in low bandwidth environments, ensuring reliable data transfer.'
    },
    {
      icon: 'bx-lock-alt',
      title: 'Secure Data Transfer',
      description: 'Your data is encrypted and transferred securely, ensuring complete confidentiality and integrity during the synchronization process.'
    }
  ];

  const syncScenarios = [
    {
      title: 'Head Office to Branch',
      description: 'Synchronize data from your head office to all your branches, ensuring uniform policies and data consistency.'
    },
    {
      title: 'Branch to Head Office',
      description: 'Consolidate data from all your branches at your head office for centralized reporting and analysis.'
    },
    {
      title: 'Branch to Branch',
      description: 'Enable seamless data transfer and collaboration between your branches for improved operational efficiency.'
    },
    {
      title: 'Tally to Third-Party Apps',
      description: 'Synchronize your Tally data with other business applications like CRM and e-commerce platforms.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg4">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally Data Synchronization</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally Data Synchronization</li>
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
                  <img src="/assets/img/service/tally-data-sync.jpg" alt="Tally Data Synchronization" />
                </div> */}

                <div className="service-article-content">
                  <h2>Seamlessly Synchronize Your Tally Data Across All Locations</h2>
                  <p>In a distributed business environment, maintaining data consistency and accuracy across multiple locations is a major challenge. Our Tally Data Synchronization solution is designed to address this challenge by providing seamless, real-time data synchronization between multiple Tally installations.</p>
                  
                  <p>Whether you have multiple branches, warehouses, or remote users, our solution ensures that your data is always up-to-date and consistent across your entire organization. This enables you to make informed decisions, improve operational efficiency, and maintain a single source of truth.</p>

                  <div className="service-article-another mt-5">
                    <h3>The Power of Real-Time Data Synchronization</h3>
                    <p>Discover the benefits of our robust and reliable Tally sync solution:</p>
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
                    <h3>Common Synchronization Scenarios</h3>
                    <p>Our solution supports a wide range of synchronization scenarios:</p>
                  </div>

                  <div className="row mt-4">
                    {syncScenarios.map((scenario, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-plan-card">
                          <h4>{scenario.title}</h4>
                          <p>{scenario.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-sync' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Data Sync Assessment</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us for a free assessment of your data synchronization needs and a personalized quote.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Request an Assessment
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
