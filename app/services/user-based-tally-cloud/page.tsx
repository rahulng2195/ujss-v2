import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'User Based Tally on Cloud | Scalable Tally Hosting - UJSS',
  description: 'Flexible and scalable user-based Tally on Cloud solutions. Pay only for the users you need and access your Tally data from anywhere, anytime with our secure cloud hosting.',
  keywords: 'user based Tally on cloud, scalable Tally hosting, Tally cloud pricing, flexible Tally cloud, pay per user Tally, Tally on cloud for small business, UJSS Tally cloud',
};

export default function UserBasedTallyCloudPage() {
  const benefits = [
    {
      icon: 'bx-user',
      title: 'Pay Per User',
      description: 'Our flexible pricing model allows you to pay only for the number of users you need, making it a cost-effective solution for businesses of all sizes.'
    },
    {
      icon: 'bx-cloud',
      title: 'Anywhere, Anytime Access',
      description: 'Access your Tally data from any device with an internet connection, allowing you to work from home, on the road, or from multiple branches.'
    },
    {
      icon: 'bx-trending-up',
      title: 'Scalable Solution',
      description: 'Easily add or remove users as your business grows or your needs change, ensuring you always have the right resources at the right time.'
    },
    {
      icon: 'bx-shield-quarter',
      title: 'Robust Security',
      description: 'Your data is hosted in a secure cloud environment with enterprise-grade security features, including regular backups and data encryption.'
    },
    {
      icon: 'bx-server',
      title: 'No Hardware Maintenance',
      description: 'We manage the server infrastructure, so you don’t have to worry about hardware costs, maintenance, or upgrades.'
    },
    {
      icon: 'bx-headphone',
      title: 'Dedicated Support',
      description: 'Our team of Tally experts is available to provide you with dedicated support and assistance whenever you need it.'
    }
  ];

  const features = [
    'Flexible user-based pricing',
    '24/7 access from any device',
    'Real-time data synchronization',
    'Multi-user concurrent access',
    'Automatic data backups',
    '99.9% uptime guarantee',
    'Works with all Tally versions',
    'Print from anywhere'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h1>User Based Tally on Cloud</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>User Based Tally on Cloud</li>
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
                  <img src="/assets/img/service/user-based-cloud.jpg" alt="User Based Tally on Cloud" />
                </div>
                
                <div className="service-article-content">
                  <h2>Flexible and Scalable Tally on Cloud with User-Based Pricing</h2>
                  <p>Our User-Based Tally on Cloud solution offers the perfect blend of flexibility, scalability, and affordability. Designed for businesses of all sizes, this solution allows you to pay only for the number of users you need, while providing secure, 24/7 access to your Tally data from anywhere in the world.</p>
                  
                  <p>Say goodbye to the limitations of desktop-based accounting and embrace the power of the cloud. With our user-based Tally hosting, you can easily scale your operations, collaborate with your team in real-time, and enjoy peace of mind knowing your data is safe and secure.</p>

                  <div className="service-article-another mt-5">
                    <h3>The Advantages of a User-Based Model</h3>
                    <p>Discover the benefits of our flexible and cost-effective Tally on Cloud solution:</p>
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
                    <h3>Core Features</h3>
                    <p>Our User-Based Tally on Cloud is packed with features to enhance your productivity:</p>
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
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-user-plus' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get Started with User-Based Tally on Cloud</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us today for a personalized quote and a free demo of our user-based Tally on Cloud solution.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#667eea'}}>
                          Request a Quote
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
