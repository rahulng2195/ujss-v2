import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Field Tracking Solutions | Real-Time Employee Tracking - UJSS',
  description: 'Monitor your field force in real-time with our GPS-based field tracking solutions. Manage attendance, track location, and assign tasks to improve productivity and efficiency.',
  keywords: 'field tracking software, employee tracking app, GPS tracking solution, field force management, sales force tracking, UJSS field tracking',
};

export default function FieldTrackingPage() {
  const benefits = [
    {
      icon: 'bx-map-pin',
      title: 'Real-Time Location Tracking',
      description: 'Track the real-time location of your field employees, ensuring they are where they need to be and are following the planned routes.'
    },
    {
      icon: 'bx-task',
      title: 'Task & Beat Management',
      description: 'Assign tasks to your field staff, create beat plans, and monitor their progress in real-time to ensure timely completion of work.'
    },
    {
      icon: 'bx-calendar-check',
      title: 'Automated Attendance',
      description: 'Capture employee attendance with geo-fencing and time-stamping, eliminating the need for manual attendance marking.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Increased Productivity',
      description: 'Improve the productivity of your field force by optimizing routes, reducing idle time, and ensuring timely completion of tasks.'
    },
    {
      icon: 'bx-file',
      title: 'Digital Reporting',
      description: 'Enable your field staff to submit reports, collect data, and capture images directly from the mobile app, reducing paperwork.'
    },
    {
      icon: 'bx-user-voice',
      title: 'Better Customer Service',
      description: 'Provide faster and more efficient service to your customers by tracking your field staff and assigning tasks in real-time.'
    }
  ];

  const features = [
    'Real-time GPS tracking',
    'Task and beat plan management',
    'Geo-fenced attendance',
    'Route optimization',
    'Customizable forms and reports',
    'Offline mode for low connectivity',
    'Mobile app for field staff',
    'Admin dashboard for monitoring'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg5">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Field Tracking Solutions</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Field Tracking Solutions</li>
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
                  <img src="/assets/img/service/field-tracking.jpg" alt="Field Tracking Solutions" />
                </div> */}

                <div className="service-article-content">
                  <h2>Monitor Your Field Force in Real-Time and Boost Productivity</h2>
                  <p>Managing a field force can be challenging. Our GPS-based field tracking solution is designed to help you overcome these challenges by providing real-time visibility into the location and activities of your field employees. With our solution, you can improve productivity, enhance customer service, and gain better control over your field operations.</p>
                  
                  <p>Our field tracking solution is ideal for businesses with a mobile workforce, such as sales teams, service technicians, and delivery agents. It provides a comprehensive set of features to help you manage your field force efficiently and effectively.</p>

                  <div className="service-article-another mt-5">
                    <h3>The Advantages of Our Field Tracking Solution</h3>
                    <p>Discover the benefits of our real-time employee tracking software:</p>
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
                    <h3>Core Features of Our Field Tracking Solution</h3>
                    <p>Our solution is packed with features to help you manage your field force effectively:</p>
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
                        <i className='bx bx-map-alt' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Demo of Our Field Tracking Solution</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us today for a free demo and a personalized quote for our field tracking solution.</p>
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
