import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import AutoplayVideo from '@/components/AutoplayVideo';
import Link from 'next/link';
import '../../../styles/service-details.css';
import Image from 'next/image';

export const metadata = {
  title: 'Payroll & HRMS Solutions | Automated Payroll & HR Management - UJSS',
  description: 'Streamline your HR and payroll processes with our integrated Payroll & HRMS solutions. Manage attendance, leave, payroll, and compliance with ease.',
  keywords: 'payroll software, hrms software, payroll management, hr management system, attendance management, leave management, UJSS payroll hrms',
};

export default function PayrollHrmsPage() {
  const benefits = [
    {
      icon: '/assets/img/service/automated.png',
      title: 'Automated Payroll Processing',
      description: 'Automate your payroll calculations, including salaries, deductions, and taxes, to save time and reduce errors.'
    },
    {
      icon: '/assets/img/service/centralize.png',
      title: 'Centralized Employee Management',
      description: 'Manage all your employee data in one place, from onboarding to exit, with a centralized and secure HRMS.'
    },
    {
      icon: '/assets/img/service/attandance.png',
      title: 'Attendance & Leave Management',
      description: 'Track employee attendance, manage leave requests, and automate leave calculations with our integrated system.'
    },
    {
      icon: '/assets/img/service/statutory.png',
      title: 'Statutory Compliance',
      description: 'Stay compliant with all the latest labor laws and regulations, including PF, ESI, and PT, with our automated compliance features.'
    },
    {
      icon: '/assets/img/service/insight.png',
      title: 'Insightful Reports & Analytics',
      description: 'Generate a wide range of HR and payroll reports to get valuable insights into your workforce and make data-driven decisions.'
    },
    {
      icon: '/assets/img/service/employee.png',
      title: 'Employee Self-Service Portal',
      description: 'Empower your employees with a self-service portal to view their payslips, apply for leave, and manage their personal information.'
    }
  ];

  const features = [
    'Smart Attendance Monitoring',
    'Effortless Payroll Automation',
    'Quick & Secure Payments',
    'Real-Time Alerts'
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg3">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Payroll & HRMS Solutions</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Payroll & HRMS</li>
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
                  <img src="/assets/img/service/payroll-hrms.jpg" alt="Payroll & HRMS" />
                </div> */}
                
                <div className="row align-items-center mb-5 mx-2">
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                    <h2>Streamline Your HR and Payroll Processes with Our Integrated Solutions</h2>
                    <p>Managing human resources and payroll can be a complex and time-consuming task. Our integrated Payroll & HRMS solutions are designed to simplify and automate these processes, allowing you to manage your workforce more efficiently and effectively.</p>

                    <p>From attendance and leave management to payroll processing and compliance, our solution provides a single platform to manage all your HR and payroll needs. It helps you save time, reduce errors, and stay compliant with the latest laws and regulations.</p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <AutoplayVideo src="/assets/in-lens.mp4" />
                  </div>
                </div>

                <div className="service-article-content mt-4">
                  <div className="service-article-another">
                    <h3>The Advantages of Our Payroll & HRMS Solutions</h3>
                    <p>Discover the benefits of our integrated HR and payroll software:</p>
                  </div>

                  <div className="row mt-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <Image src={benefit.icon} alt={benefit.title} width={50} height={50} />
                          <h4>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Core Features of Our Payroll & HRMS</h3>
                    <p>Our solution is packed with features to meet all your HR and payroll needs:</p>
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
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Demo of Our Payroll & HRMS</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Contact us today for a free demo and a personalized quote for our Payroll & HRMS solution.</p>
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
