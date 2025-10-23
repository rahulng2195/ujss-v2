import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Service Details - Zinka',
  description: 'Learn more about our services',
};

export default function ServiceDetailPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg1">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Service Details</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Service Details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-article">
                <div className="service-article-img">
                  <Image src="/assets/img/service/service-details.jpg" alt="Service" width={800} height={500} unoptimized />
                </div>

                <div className="service-article-content">
                  <h2>Consumer Analytics</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <div className="row pt-3 pb-3">
                    <div className="col-lg-6">
                      <div className="service-article-list">
                        <h3>Service Features</h3>
                        <ul>
                          <li><i className='bx bx-check'></i> Advanced Data Analytics</li>
                          <li><i className='bx bx-check'></i> Real-time Insights</li>
                          <li><i className='bx bx-check'></i> Custom Dashboards</li>
                          <li><i className='bx bx-check'></i> 24/7 Support</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="service-article-list">
                        <h3>Benefits</h3>
                        <ul>
                          <li><i className='bx bx-check'></i> Improved Decision Making</li>
                          <li><i className='bx bx-check'></i> Cost Reduction</li>
                          <li><i className='bx bx-check'></i> Increased Efficiency</li>
                          <li><i className='bx bx-check'></i> Better ROI</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3>How It Works</h3>
                  <p>Our consumer analytics solution helps you understand your customers better through advanced data analysis and visualization techniques. We collect, process, and analyze data from multiple sources to provide actionable insights.</p>

                  <div className="service-article-quote">
                    <i className='flaticon-quote'></i>
                    <p>&quot;Data is the new oil. It&apos;s valuable, but if unrefined it cannot really be used.&quot;</p>
                    <span>- Clive Humby</span>
                  </div>

                  <h3>Why Choose Us</h3>
                  <p>We combine industry expertise with cutting-edge technology to deliver solutions that drive real business value. Our team of experienced data scientists and analysts work closely with you to understand your unique needs and challenges.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-list">
                  <h3>All Services</h3>
                  <ul>
                    <li><Link href="/services/detail" className="active">Consumer Analytics</Link></li>
                    <li><Link href="/services/detail">Marketing Analytics</Link></li>
                    <li><Link href="/services/detail">Sales Analytics</Link></li>
                    <li><Link href="/services/detail">Risk Analytics</Link></li>
                    <li><Link href="/services/detail">Business Analytics</Link></li>
                    <li><Link href="/services/detail">Social Media Analytics</Link></li>
                  </ul>
                </div>

                <div className="service-contact">
                  <h3>Contact Info</h3>
                  <ul>
                    <li>
                      <i className='flaticon-telephone'></i>
                      <a href="tel:+4498886660000">+449 888 666 0000</a>
                    </li>
                    <li>
                      <i className='flaticon-email-1'></i>
                      <a href="mailto:hello@zinka.com">hello@zinka.com</a>
                    </li>
                    <li>
                      <i className='flaticon-place'></i>
                      855 road, brooklyn street new york 600
                    </li>
                  </ul>
                </div>

                <div className="service-download">
                  <h3>Download</h3>
                  <a href="#" className="download-btn">
                    <i className='bx bxs-file-pdf'></i>
                    Service Brochure
                  </a>
                  <a href="#" className="download-btn">
                    <i className='bx bxs-file-doc'></i>
                    Company Profile
                  </a>
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