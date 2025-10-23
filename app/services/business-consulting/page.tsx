import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Business Consulting Services - Digital Transformation & Strategy | UJSS',
  description: 'Expert business consulting to optimize operations, improve efficiency, and drive digital transformation. Strategic guidance from experienced consultants.',
  keywords: 'Business Consulting, Digital Transformation, Business Strategy, Process Optimization',
};

export default function BusinessConsultingPage() {
  return (
    <>
      <Navbar />
      
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Business Consulting</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Business Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-article">
                <div className="service-article-img">
                  <img src="/assets/img/service/service-details.jpg" alt="Business Consulting" />
                </div>
                
                <div className="service-article-content">
                  <h2>Strategic Business Consulting for Growth</h2>
                  <p>Navigate the complexities of modern business with our expert consulting services. We help organizations optimize operations, implement best practices, and achieve sustainable growth through strategic planning and digital transformation.</p>
                  
                  <div className="service-article-another mt-4">
                    <h3>Our Consulting Services</h3>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-line-chart'></i>
                        <h4>Business Strategy</h4>
                        <p>Develop comprehensive strategies aligned with your business goals and market opportunities</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-network-chart'></i>
                        <h4>Process Optimization</h4>
                        <p>Streamline operations and eliminate inefficiencies to improve productivity and reduce costs</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-rocket'></i>
                        <h4>Digital Transformation</h4>
                        <p>Guide your journey to digital excellence with technology integration and change management</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="service-details-card">
                        <i className='bx bx-user-check'></i>
                        <h4>Training & Development</h4>
                        <p>Empower your team with skills and knowledge needed for success in the digital age</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Partner with us to transform your business challenges into opportunities for growth and innovation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-details-sidebar">
                <div className="services-list">
                  <h3>All Services</h3>
                  <ul>
                    <li><Link href="/services/tally-solutions">Tally Solutions <i className='bx bx-chevron-right'></i></Link></li>
                    <li><Link href="/services/tally-on-cloud">Tally on Cloud <i className='bx bx-chevron-right'></i></Link></li>
                    <li><Link href="/services/digital-marketing">Digital Marketing <i className='bx bx-chevron-right'></i></Link></li>
                    <li><Link href="/services/ai-agents">AI Agents <i className='bx bx-chevron-right'></i></Link></li>
                    <li className="active"><Link href="/services/business-consulting">Business Consulting <i className='bx bx-chevron-right'></i></Link></li>
                    <li><Link href="/services/cloud-computing">Cloud Computing <i className='bx bx-chevron-right'></i></Link></li>
                  </ul>
                </div>

                <div className="service-contact-widget">
                  <h3>Need Help?</h3>
                  <div className="contact-info">
                    <i className='bx bx-phone'></i>
                    <h4>Call Us</h4>
                    <p>+91-XXXXX-XXXXX</p>
                  </div>
                  <div className="contact-info">
                    <i className='bx bx-envelope'></i>
                    <h4>Email Us</h4>
                    <p>info@ujss.in</p>
                  </div>
                  <Link href="/contact" className="default-btn">
                    Get A Quote
                    <i className='bx bx-plus'></i>
                  </Link>
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
