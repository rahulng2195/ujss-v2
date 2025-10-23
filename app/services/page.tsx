import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Product & Services - Tally, Cloud, Digital Marketing | UJSS',
  description: 'Explore our comprehensive product and services including Tally Solutions, Cloud Services, Digital Marketing, DSC & Legal Services, and Business Applications.',
  keywords: 'Tally Product, Cloud Services, Digital Marketing, DSC Services, Business Applications',
};

export default function ServicesPage() {
  const products = [
    {
      icon: 'flaticon-big-data',
      bgClass: 'service-icon-bg3',
      title: 'User Based Tally On Cloud',
      slug: 'user-based-tally-cloud',
      description: 'Flexible cloud-based Tally access with user-based pricing. Access your data from anywhere with secure, scalable cloud infrastructure.'
    },
    {
      icon: 'flaticon-research',
      bgClass: 'service-icon-bg1',
      title: 'Dedicated Cloud Server',
      slug: 'dedicated-cloud-server',
      description: 'Private dedicated cloud servers for enhanced performance, security, and complete control over your business data.'
    },
    {
      icon: 'flaticon-headphones',
      bgClass: 'service-icon-bg',
      title: 'Cloud with Admin Panel',
      slug: 'tally-on-cloud-with-admin-panel',
      description: 'Comprehensive cloud solution with powerful admin panel for easy management, monitoring, and user control.'
    },
    {
      icon: 'flaticon-caution',
      bgClass: 'service-icon-bg2',
      title: 'Tally Add-ons & Plugins',
      slug: 'tally-addons-plugins',
      description: 'Enhance Tally functionality with custom add-ons and plugins designed for specific business requirements.'
    },
    {
      icon: 'flaticon-money',
      bgClass: 'service-icon-bg4',
      title: 'Tally Mobile App',
      slug: 'tally-mobile-app',
      description: 'Access your Tally data on-the-go with our mobile app. View reports, track inventory, and manage business anywhere.'
    }
  ];

  const services = [
    {
      icon: 'flaticon-research',
      bgClass: 'service-icon-bg1',
      title: 'Tally Implementation',
      slug: 'tally-implementation',
      description: 'Complete Tally setup, configuration, and implementation services tailored to your business processes and requirements.'
    },
    {
      icon: 'flaticon-headphones',
      bgClass: 'service-icon-bg',
      title: 'Tally AMC & Support',
      slug: 'tally-amc-support',
      description: 'Annual Maintenance Contract with 24/7 support, updates, troubleshooting, and expert assistance for uninterrupted operations.'
    },
    {
      icon: 'flaticon-share',
      bgClass: 'service-icon-bg5',
      title: 'Tally Data Synchronization',
      slug: 'tally-data-sync',
      description: 'Seamless data synchronization between multiple Tally installations, branches, and locations in real-time.'
    }
  ];

  const digitalMarketing = [
    {
      icon: 'flaticon-big-data',
      bgClass: 'service-icon-bg3',
      title: 'Website & App Development',
      slug: 'website-app-development',
      description: 'Custom website and mobile app development with responsive design, modern UI/UX, and powerful functionality.'
    },
    {
      icon: 'flaticon-share',
      bgClass: 'service-icon-bg5',
      title: 'Social Media Management (SMM)',
      slug: 'social-media-management',
      description: 'Complete social media management including content creation, posting, engagement, and performance analytics.'
    },
    {
      icon: 'flaticon-research',
      bgClass: 'service-icon-bg1',
      title: 'Search Engine Optimization (SEO)',
      slug: 'seo-services',
      description: 'Improve your website ranking on search engines with our proven SEO strategies, on-page and off-page optimization.'
    },
    {
      icon: 'flaticon-money',
      bgClass: 'service-icon-bg4',
      title: 'Pay Per Click (PPC) Services',
      slug: 'ppc-services',
      description: 'Targeted PPC campaigns on Google Ads, Facebook, and other platforms to drive quality traffic and conversions.'
    }
  ];

  const dscLegalServices = [
    {
      icon: 'flaticon-caution',
      bgClass: 'service-icon-bg2',
      title: 'DSC (Digital Signature Certificate)',
      slug: 'dsc-services',
      description: 'Get your Digital Signature Certificate for secure online transactions, e-filing, and document authentication.'
    },
    {
      icon: 'flaticon-research',
      bgClass: 'service-icon-bg1',
      title: 'Startup Registration',
      slug: 'startup-registration',
      description: 'Complete startup registration services including company formation, DPIIT recognition, and compliance support.'
    },
    {
      icon: 'flaticon-money',
      bgClass: 'service-icon-bg4',
      title: 'GST & Taxation',
      slug: 'gst-taxation',
      description: 'GST registration, filing, compliance, and comprehensive taxation services for businesses of all sizes.'
    },
    {
      icon: 'flaticon-headphones',
      bgClass: 'service-icon-bg',
      title: 'License Registration',
      slug: 'license-registration',
      description: 'Assistance with various business licenses and registrations including trade license, FSSAI, and more.'
    }
  ];

  const businessApplications = [
    {
      icon: 'flaticon-big-data',
      bgClass: 'service-icon-bg3',
      title: 'CRM (Customer Relationship Management)',
      slug: 'crm-solutions',
      description: 'Powerful CRM solutions to manage customer relationships, sales pipeline, and improve customer satisfaction.'
    },
    {
      icon: 'flaticon-research',
      bgClass: 'service-icon-bg1',
      title: 'Payroll & HRMS',
      slug: 'payroll-hrms',
      description: 'Complete payroll processing and HR management system for attendance, leave, employee records, and compliance.'
    },
    {
      icon: 'flaticon-share',
      bgClass: 'service-icon-bg5',
      title: 'Miracle Accounting Software',
      slug: 'miracle-software',
      description: 'Comprehensive accounting software solution for small to medium businesses with inventory and billing features.'
    },
    {
      icon: 'flaticon-caution',
      bgClass: 'service-icon-bg2',
      title: 'Field Tracking Solutions',
      slug: 'field-tracking',
      description: 'Real-time GPS-based field force tracking, attendance management, and task monitoring for better productivity.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Our Product & Services</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Product & Services</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Products Section */}
      <div className="service-another pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Products</span>
            <h2>Tally Cloud Products & Solutions</h2>
            <p className="mt-3">Comprehensive Tally cloud products designed for businesses of all sizes</p>
          </div>
          
          <div className="row pt-45">
            {products.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-another-card">
                  <Link href={`/services/${product.slug}`}>
                    <i className={`${product.icon} service-icon ${product.bgClass}`}></i>
                  </Link>
                  <h3><Link href={`/services/${product.slug}`}>{product.title}</Link></h3>
                  <p>{product.description}</p>
                  <Link href={`/services/${product.slug}`} className="learn-btn">
                    Learn more 
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-another-shape">
          <div className="shape-1"><img src="/assets/img/shape/shape13.png" alt="Shape" /></div>
          <div className="shape-2"><img src="/assets/img/shape/shape11.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="service-another pt-100 pb-70" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Services</span>
            <h2>Tally Implementation & Support Services</h2>
            <p className="mt-3">Professional Tally services to ensure smooth operations</p>
          </div>
          
          <div className="row pt-45 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-another-card">
                  <Link href={`/services/${service.slug}`}>
                    <i className={`${service.icon} service-icon ${service.bgClass}`}></i>
                  </Link>
                  <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="learn-btn">
                    Learn more 
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-another-shape">
          <div className="shape-3"><img src="/assets/img/shape/shape10.png" alt="Shape" /></div>
          <div className="shape-4"><img src="/assets/img/shape/shape9.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="service-another pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Digital Marketing</span>
            <h2>Grow Your Online Presence</h2>
            <p className="mt-3">Complete digital marketing solutions to boost your business visibility</p>
          </div>
          
          <div className="row pt-45">
            {digitalMarketing.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="service-another-card">
                  <Link href={`/services/${service.slug}`}>
                    <i className={`${service.icon} service-icon ${service.bgClass}`}></i>
                  </Link>
                  <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="learn-btn">
                    Learn more 
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="service-another-shape">
          <div className="shape-5"><img src="/assets/img/shape/shape7.png" alt="Shape" /></div>
          <div className="shape-6"><img src="/assets/img/shape/shape12.png" alt="Shape" /></div>
        </div>
      </div>

      {/* DSC & Legal Services Section */}
      <div className="service-another pt-100 pb-70" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">DSC & Legal Services</span>
            <h2>Business Registration & Compliance</h2>
            <p className="mt-3">Complete legal and compliance services for your business</p>
          </div>
          
          <div className="row pt-45">
            {dscLegalServices.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="service-another-card">
                  <Link href={`/services/${service.slug}`}>
                    <i className={`${service.icon} service-icon ${service.bgClass}`}></i>
                  </Link>
                  <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="learn-btn">
                    Learn more 
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Applications Section */}
      <div className="service-another pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Business Applications</span>
            <h2>Enterprise Software Solutions</h2>
            <p className="mt-3">Powerful business applications to streamline your operations</p>
          </div>
          
          <div className="row pt-45">
            {businessApplications.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="service-another-card">
                  <Link href={`/services/${service.slug}`}>
                    <i className={`${service.icon} service-icon ${service.bgClass}`}></i>
                  </Link>
                  <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3>
                  <p>{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="learn-btn">
                    Learn more 
                    <i className='bx bx-plus'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="choose-area pt-100 pb-70" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Why Choose UJSS</span>
            <h2>Your Trusted Technology Partner</h2>
          </div>
          
          <div className="row pt-45">
            <div className="col-lg-4 col-md-6">
              <div className="choose-card">
                <i className='bx bx-check-shield' style={{fontSize: '48px', color: '#ff5500'}}></i>
                <h3>Expert Team</h3>
                <p>Certified professionals with years of experience in implementing and supporting business solutions</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-card">
                <i className='bx bx-support' style={{fontSize: '48px', color: '#ff5500'}}></i>
                <h3>24/7 Support</h3>
                <p>Round-the-clock technical assistance to ensure your business never stops running</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-card">
                <i className='bx bx-trending-up' style={{fontSize: '48px', color: '#ff5500'}}></i>
                <h3>Scalable Solutions</h3>
                <p>Flexible services that grow with your business needs and adapt to changing requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}