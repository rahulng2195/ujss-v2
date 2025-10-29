import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Cloud Computing Services - Migration, Management & Security | UJSS',
  description: 'Comprehensive cloud infrastructure solutions including migration, management, security, and scalability for businesses of all sizes.',
  keywords: 'Cloud Computing, Cloud Migration, Cloud Management, Cloud Security, Infrastructure as a Service',
};

export default function CloudComputingPage() {
  return (
    <>
      <Navbar />
      
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Cloud Computing Services</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-article">
                {/* <div className="service-article-img">
                  <img src="/assets/img/service/service-details.jpg" alt="Cloud Computing" />
                </div> */}
                
                <div className="service-article-content">
                  <h2>Enterprise Cloud Solutions</h2>
                  <p>Transform your IT infrastructure with our comprehensive cloud computing services. We help businesses migrate to the cloud, optimize cloud environments, and leverage cloud technologies for improved scalability, security, and cost-efficiency.</p>
                  
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-cloud-upload'></i>
                        <h4>Cloud Migration</h4>
                        <p>Seamless migration of applications and data to cloud platforms with minimal downtime</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-server'></i>
                        <h4>Infrastructure Management</h4>
                        <p>Complete cloud infrastructure setup, monitoring, and management services</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-shield'></i>
                        <h4>Cloud Security</h4>
                        <p>Enterprise-grade security measures to protect your cloud assets and data</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-trending-up'></i>
                        <h4>Scalability Solutions</h4>
                        <p>Flexible resources that scale automatically based on your business needs</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Embrace the power of cloud computing to reduce costs, improve agility, and accelerate innovation.</p>
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
