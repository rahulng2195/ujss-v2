import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Brands from '@/components/Brands';
import Testimonial from '@/components/Testimonial';
import ProcessFlow from '@/components/ProcessFlow';

export const metadata = {
  title: 'About Us - UJSS',
  description: 'Learn more about UJSS and our mission',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Banner */}
      <div className="inner-banner inner-bg3">
        <div className="container">
          <div className="inner-title text-center">
            <h3>About Us</h3>
            {/* <p>Success Grows When We Collaborate.</p> */}
            <ul>
              <li><a href="/">Home</a></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* About Widget Area */}
      <div className="about-widget-area pt-50 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-widget-img">
                <img src="assets/img/about/about-img4.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-widget-content">
                <div className="section-title">
                  <span className="sp-before sp-after">About Us</span>
                  <h2>Empowering Your Digital Transformation</h2>
                </div>
                <h3>
                  We are a team of passionate experts dedicated to helping businesses thrive in the digital age. Our strategy is built on a foundation of innovation, collaboration and a deep understanding of our client's need.
                </h3>
                {/* <p>
                  At UJSS, we provide cutting-edge solutions in cloud computing, custom software development, data security, and digital marketing. We believe in building strong partnerships with our clients, working together to achieve their goals and drive growth.
                </p> */}
                <div className="about-widget-list">
                  <ul>
                    <li>
                      <i className="bx bx-check" />
                      <span>01</span>
                      <p>
                        <strong>Expert Team:</strong> Our professionals bring years of experience and deep technical knowledge to every project.
                      </p>
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      <span>02</span>
                      <p>
                        <strong>Satisfied Result:</strong> We are committed to delivering measurable outcomes that drive performance and satisfaction.
                      </p>
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      <span>03</span>
                      <p>
                        <strong>24/7 Support:</strong> Our dedicated team is here to ensure your operations run smoothly and without interruption.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="about-video">
                  <a
                    href="https://www.youtube.com/watch?v=07d2dXHYb94&t=6s"
                    className="video-btn popup-btn"
                  >
                    <i className="flaticon-forward" />
                    <span>Play Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Widget Area End */}
      {/* Counter Area */}
      
      {/* Counter Area End */}

       {/* History Area */}
      
      {/* History Area End */}

      {/* Our Journey List Area */}
      <div className="service-list-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Our Journey</span>
            <h2>Our Journey's Path</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="service-list-content">
                <h3>Our History</h3>
                <p>
                  Founded with a vision to provide exceptional IT services, UJSS has grown from a small startup to a lead provider of digital solutions. Our journey is a testament to our commitment to innovation and excellence.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check" />
                    Founded in 2010
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Expanded to Cloud Services in 2012
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Launched Digital Marketing in 2016
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Reached 70+ Team Members in 2018
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-list-content">
                <h3>Who We Are</h3>
                <p>
                  We are a team of strategists, designers and developers who are passionate about technology and its potential to revolutionize businesses. We specialize in a wide range of services, from cloud computing to digital marketing.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check" />
                    Experienced Professionals
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Customer-Focused
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Results-Driven
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Always Learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-list-content">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to empower businesses with transformative digital solutions that drive growth, efficiency and success. We are dedicated to providing innovative and reliable services that exceed our client’s expectations.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-check" />
                    Client-Centric Approach
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Innovation and Excellence
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Integrity and Transparency
                  </li>
                  <li>
                    <i className="bx bx-check" />
                    Collaborative Partnerships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service List Area End */}
      {/* Work Area Two */}
      <ProcessFlow />
      {/* Work Area Two End */}
     
      
      {/* Testimonial Area */}
      <Testimonial />
      {/* Testimonial Area End */}
      {/* Brand Logo Area */}
      <Brands />

      <Footer />
    </>
  );
}