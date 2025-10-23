import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally Mobile App | Access Tally on the Go - UJSS',
  description: 'Carry your Tally in your pocket with the UJSS Tally Mobile App. Access reports, manage sales, and make informed decisions from anywhere, anytime. Real-time data sync for ultimate mobility.',
  keywords: 'Tally mobile app, Tally on mobile, mobile Tally, Tally app, Tally on the go, mobile accounting, UJSS Tally app, Tally for Android, Tally for iOS',
};

export default function TallyMobileAppPage() {
  const benefits = [
    {
      icon: 'bx-mobile-alt',
      title: 'Complete Mobility',
      description: 'Access your Tally data, view reports, and manage your business from anywhere, anytime, right from your smartphone.'
    },
    {
      icon: 'bx-sync',
      title: 'Real-Time Data Sync',
      description: 'Stay perfectly in sync with your business. All data entered on the mobile app is updated in your main Tally in real-time.'
    },
    {
      icon: 'bx-line-chart-down',
      title: 'Increased Productivity',
      description: 'Speed up data entry, improve team coordination, and manage tasks on the go, boosting your team’s overall efficiency.'
    },
    {
      icon: 'bx-bulb',
      title: 'Informed Decision Making',
      description: 'Leverage real-time analytics and access to critical reports on your mobile to make quick, informed business decisions.'
    },
    {
      icon: 'bx-share-alt',
      title: 'Effortless Communication',
      description: 'Share invoices, ledgers, and payment reminders instantly with your customers and team via WhatsApp or email.'
    },
    {
      icon: 'bx-user-plus',
      title: 'Empower Your Field Staff',
      description: 'Enable your sales and field staff to enter transactions, create invoices, and update records on the spot, directly from their mobile devices.'
    }
  ];

  const features = [
    'Real-time dashboard with key metrics',
    'View all Tally reports (Day Book, Ledger, etc.)',
    'Create, alter, and delete vouchers',
    'Manage sales and purchase orders',
    'Multi-user access with role-based security',
    'Works on Android and iOS devices',
    'Offline mode for limited connectivity',
    'Secure data encryption'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg6">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally Mobile App</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally Mobile App</li>
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
                  <img src="/assets/img/service/tally-mobile.jpg" alt="Tally Mobile App" />
                </div>
                
                <div className="service-article-content">
                  <h2>Carry Your Tally in Your Pocket!</h2>
                  <p>In today’s fast-paced world, your business doesn’t stop when you’re away from the office. With the UJSS Tally Mobile App, it doesn’t have to. Our powerful mobile app puts the full power of TallyPrime in the palm of your hand, allowing you to manage your business, access critical data, and stay in control, no matter where you are.</p>
                  
                  <p>Keep track of reports, sales, and payments—all in one place, right on your mobile. Enable your staff to enter transactions and update records in real-time from any location. Stay in sync with your business and make quick, informed decisions anytime, anywhere.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Go Mobile with Tally?</h3>
                    <p>Experience the freedom and flexibility of mobile accounting:</p>
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
                    <h3>App Features</h3>
                    <p>Our Tally Mobile App is packed with features to help you run your business on the go:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {features.map((feature, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className='bx bx-check-circle'></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>The Tally Mobile App has been a game-changer for our sales team. They can now create invoices and check stock levels from anywhere, which has significantly improved our efficiency.</p>
                    <span>- A Happy Customer</span>
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-mobile-alt' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Demo of the Tally Mobile App</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>See for yourself how our mobile app can transform your business. Contact us for a free, no-obligation demo.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#667eea'}}>
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
