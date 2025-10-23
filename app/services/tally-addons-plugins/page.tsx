import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import Link from 'next/link';
import '../../../styles/service-details.css';

export const metadata = {
  title: 'Tally Addons & Plugins | Custom Tally Solutions - UJSS',
  description: 'Enhance the power of TallyPrime with our custom addons and plugins. Automate tasks, get advanced reports, and integrate with other software to supercharge your accounting.',
  keywords: 'Tally addons, Tally plugins, custom Tally solutions, Tally customization, Tally integration, Tally reports, Tally automation, UJSS Tally addons',
};

export default function TallyAddonsPluginsPage() {
  const benefits = [
    {
      icon: 'bx-rocket',
      title: 'Supercharge Your Tally',
      description: 'Unlock new features and capabilities that go beyond the standard TallyPrime experience, making your accounting more powerful and efficient.'
    },
    {
      icon: 'bx-bot',
      title: 'Automate Repetitive Tasks',
      description: 'Save countless hours by automating manual data entry, invoicing, and other repetitive tasks, reducing errors and freeing up your team.'
    },
    {
      icon: 'bx-line-chart',
      title: 'Get Deeper Insights',
      description: 'Generate advanced, customized reports that provide deeper insights into your business performance, helping you make smarter decisions.'
    },
    {
      icon: 'bx-git-compare',
      title: 'Seamless Integrations',
      description: 'Integrate TallyPrime with your other business-critical applications like CRM, e-commerce platforms, and payment gateways.'
    },
    {
      icon: 'bx-customize',
      title: 'Tailored to Your Needs',
      description: 'Our addons are designed to be flexible and can be customized to fit the unique workflows and requirements of your business.'
    },
    {
      icon: 'bx-shield-check',
      title: 'Ensure Compliance',
      description: 'Stay up-to-date with the latest statutory requirements with addons for GST, TDS, and other compliance needs.'
    }
  ];

  const popularAddons = [
    { icon: 'bx-file', title: 'Advanced GST & E-invoicing' },
    { icon: 'bx-bar-chart-square', title: 'Custom MIS Reports' },
    { icon: 'bx-transfer', title: 'Bank Reconciliation Automation' },
    { icon: 'bx-lock-alt', title: 'Enhanced Security & User Control' },
    { icon: 'bx-cloud-upload', title: 'CRM & E-commerce Integration' },
    { icon: 'bx-printer', title: 'Advanced Barcode Printing' },
    { icon: 'bx-task', title: 'Approval & Workflow Management' },
    { icon: 'bx-import', title: 'Excel to Tally Import Utility' },
    { icon: 'bx-block', title: 'Negative Stock Control' },
    { icon: 'bx-file-blank', title: 'Document Management' },
    { icon: 'bx-credit-card', title: 'Credit Control' },
    { icon: 'bx-shield-quarter', title: 'Voucher Type Wise Security' },
    { icon: 'bx-money-withdraw', title: 'Negative Cash Control' },
  ];

  const industryModules = [
    { icon: 'bx-factory', title: 'Tally For Manufacturers' },
    { icon: 'bx-package', title: 'Tally For Distributors' },
    { icon: 'bx-car', title: 'Tally For Transportation Business' },
    { icon: 'bx-store', title: 'Tally For Trading Business' },
    { icon: 'bx-building-house', title: 'Tally Module For Builders' },
    { icon: 'bx-user-pin', title: 'Tally Module For Custom House Agents' },
    { icon: 'bx-tv', title: 'Tally Module For Advertising Companies' },
    { icon: 'bx-film', title: 'Tally For Film Distribution Business' },
  ];

  const tallyAutomations = [
    {
      icon: 'bx-message-dots',
      title: 'WhatsApp Messaging',
      description: 'Connect smarter with your customers! Share invoices, payment reminders, and reports directly from Tally to WhatsApp in just one click.'
    },
    {
      icon: 'bx-pencil',
      title: 'Digital Signature',
      description: 'Add digital signatures to your invoices in Tally.ERP 9 or TallyPrime. It ensures your invoices are authentic, professional, and fully verified.'
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg5">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Tally Addons & Plugins</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Tally Addons & Plugins</li>
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
                  <img src="/assets/img/service/tally-addons.jpg" alt="Tally Addons & Plugins" />
                </div>
                
                <div className="service-article-content">
                  <h2>Enhance the Power of TallyPrime with Custom Addons</h2>
                  <p>Take your TallyPrime to the next level with our powerful and easy-to-use addons and plugins. Designed to enhance functionality and streamline your workflows, our Tally addons help you automate tasks, get deeper business insights, and integrate with the tools you use every day.</p>
                  
                  <p>Whether you need to automate data entry, generate custom reports, or ensure statutory compliance, our library of Tally addons has a solution for you. And if you have a unique requirement, our team of expert developers can build a custom addon tailored specifically to your business needs.</p>

                  <div className="service-article-another mt-5">
                    <h3>Why Use Tally Addons?</h3>
                    <p>Unlock the full potential of your Tally software with these key benefits:</p>
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
                    <h3>Our Most Popular Tally Addons</h3>
                    <p>Explore our library of ready-to-use addons that solve common business challenges:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {popularAddons.map((addon, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className={`bx ${addon.icon}`}></i>
                        <span>{addon.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Tally Industry Specific Modules</h3>
                    <p>We have developed specialized modules for various industries to meet their unique requirements:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {industryModules.map((module, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className={`bx ${module.icon}`}></i>
                        <span>{module.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Tally Automations</h3>
                    <p>Automate your business processes with our powerful Tally automation solutions:</p>
                  </div>

                  <div className="row mt-4">
                    {tallyAutomations.map((automation, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <i className={`bx ${automation.icon}`}></i>
                          <h4>{automation.title}</h4>
                          <p>{automation.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>The custom MIS report addon from UJSS has transformed the way we analyze our sales data. We now get the insights we need in minutes, not hours.</p>
                    <span>- A Valued Client</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Don't See What You Need? We Build Custom Addons!</h3>
                    <p>If you have a unique business requirement, our team can develop a custom Tally addon just for you. Our process is simple and collaborative:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Requirement Analysis</h4>
                        <p>We work with you to understand your exact needs and document the requirements for the custom addon.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Development & Testing</h4>
                        <p>Our developers build the addon and conduct rigorous testing to ensure it is bug-free and meets your requirements.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Deployment & Training</h4>
                        <p>We deploy the addon to your Tally environment and provide training to your team on how to use it effectively.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #ff5500 0%, #ff8c00 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-extension' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free Addon Consultation</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Have a specific need? Talk to our Tally experts and find the perfect addon or get a quote for a custom solution.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#ff5500'}}>
                          Request a Callback
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
