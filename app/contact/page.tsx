import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - UJSS',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Page Banner */}
      <div className="inner-banner inner-bg10">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Contact Us</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      <>
        {/* Contact Area */}
        <div className="contact-area pb-70">
          <div className="container">
            <div className="section-title text-center">
              <span className="sp-before sp-after">Contact</span>
              <h2>Get in Touch</h2>
            </div>
            <div className="row pt-45">
              <div className="col-lg-4 col-md-6">
                <div className="contact-card">
                  <i className="flaticon-planet-earth" />
                  <h3>Office Location</h3>
                  <p>78 Business Park Promises, 4th Floor, </p>
                  <p>Office No. 418 BMC Building, Bhandup Station</p>
                  <p> Road, Bhandup - west. Mumbai - 400078</p>
                  <a href="#" className="contact-card-btn">
                    Direction
                    <i className="bx bx-plus plus-btn" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-card">
                  <i className="flaticon-email" />
                  <h3>Contact</h3>
                  <p>contact@ujss.in </p>
                  <p> Mobile: +91 91674 23035 </p>
                  <a href="#" className="contact-card-btn">
                    Learn More
                    <i className="bx bx-plus plus-btn" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                <div className="contact-card">
                  <i className="flaticon-clock" />
                  <h3>Hours of Operation</h3>
                  <p>Monday - Saturday: 10:00 - 19:00</p>
                  <a href="#" className="contact-card-btn">
                    Support
                    <i className="bx bx-plus plus-btn" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Area End */}
        {/* Contact Section */}
        <div className="contact-section pt-100 pb-70">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-img">
                  <img src="assets/img/contact-img.png" alt="Images" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-wrap">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section End */}
        {/* Contact Map */}
        <div className="contact-map">
          <div className="container-fluid m-0 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512.935980503196!2d72.93180369928787!3d19.14676682697231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9fd9cebf537%3A0xc6d90c706316028f!2sBmc%20Market%20Building!5e1!3m2!1sen!2sin!4v1759934400851!5m2!1sen!2sin"
              width={600}
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
        {/* Map Area End */}
      </>


      <Footer />
    </>
  );
}