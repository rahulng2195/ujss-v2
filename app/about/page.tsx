import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Brands from '@/components/Brands';
import Testimonial from '@/components/Testimonial';

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
            <p>Success Grows When We Collaborate.</p>
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
                  We are a team of passionate experts dedicated to helping businesses thrive in the digital age. Our strategy is built on a foundation of innovation, collaboration, and a deep understanding of our clients' needs.
                </h3>
                <p>
                  At UJSS, we provide cutting-edge solutions in cloud computing, custom software development, data security, and digital marketing. We believe in building strong partnerships with our clients, working together to achieve their goals and drive growth.
                </p>
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
      <div className="history-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Our History</span>
            <h2>The Facts About Our Company</h2>
          </div>
          <div className="history-list">
            <ul>
              <li>
                <i className="bx bx-check" />
                <div className="content">
                  <h3>2010</h3>
                  <span>February 20th</span>
                </div>
              </li>
              <li>
                <i className="bx bx-check" />
                <div className="content">
                  <h3>2012</h3>
                  <span>January 14th</span>
                </div>
              </li>
              <li>
                <i className="bx bx-check" />
                <div className="content">
                  <h3>2016</h3>
                  <span>March 25th</span>
                </div>
              </li>
              <li>
                <i className="bx bx-check" />
                <div className="content">
                  <h3>2018</h3>
                  <span>December 10th</span>
                </div>
              </li>
              <li>
                <i className="bx bx-check" />
                <div className="content">
                  <h3>2019</h3>
                  <span>February 01th</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="history-content">
                <h2>A Legacy of Innovation and Growth</h2>
                <p>
                  Since our inception, UJSS has been on a mission to help businesses leverage the power of technology. We have continuously evolved and expanded our services to meet the changing needs of our clients and the market.
                </p>
                <p>
                  Our journey has been marked by a commitment to excellence, a passion for innovation, and a dedication to our clients' success. We are proud of our history and excited about the future as we continue to push the boundaries of what's possible.
                </p>
                <a href="/services" className="default-btn">
                  Learn more
                  <i className="bx bx-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-img">
                <img src="assets/img/history-img.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  Founded with a vision to provide exceptional IT services, UJSS has grown from a small startup to a leading provider of digital solutions. Our journey is a testament to our commitment to innovation and excellence.
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
                  We are a team of strategists, designers, and developers who are passionate about technology and its potential to revolutionize businesses. We specialize in a wide range of services, from cloud computing to digital marketing.
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
                  Our mission is to empower businesses with transformative digital solutions that drive growth, efficiency, and success. We are dedicated to providing innovative and reliable services that exceed our clients' expectations.
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
      <div className="work-area-two pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Working Process</span>
            <h2 className="h2-color2">Simple &amp; Clean Work Process</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4">
              <div className="work-item-list">
                <ul>
                  <li className="text-right">
                    <h3>
                      Discovery & Strategy <span>1</span>
                    </h3>
                    <p>
                      We begin by understanding your business, goals, and challenges to develop a comprehensive strategy.
                    </p>
                  </li>
                  <li className="text-right">
                    <h3>
                      Design & Development <span>2</span>
                    </h3>
                    <p>
                      Our team designs and develops custom solutions tailored to your specific needs and requirements.
                    </p>
                  </li>
                  <li className="text-right">
                    <h3>
                      Testing & Quality Assurance <span>3</span>
                    </h3>
                    <p>
                      We conduct rigorous testing to ensure your solution is robust, reliable, and ready for deployment.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="work-img-2">
                <img src="assets/img/work-img.png" alt="Images" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="work-item-list-2">
                <ul>
                  <li>
                    <h3>
                      <span>4</span>Deployment & Integration
                    </h3>
                    <p>
                      We deploy your solution and integrate it seamlessly with your existing systems and workflows.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span>5</span>Training & Support
                    </h3>
                    <p>
                      We provide comprehensive training and ongoing support to ensure a smooth transition and continued success.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span>6</span>Optimization & Growth
                    </h3>
                    <p>
                      We continuously monitor, analyze, and optimize your solution to drive growth and achieve your business objectives.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work Area Two End */}
     
      {/* Team Area Two */}
      <div className="team-area-two pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Team</span>
            <h2 className="h2-color2">
              Meet Our Data Scientist to Grow Your Business
            </h2>
          </div>
          <div className="team-slider-two owl-carousel owl-theme">
            <div className="team-card active">
              <a href="#">
                <img src="assets/img/team/team-img7.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Cristiono Kopper</a>
                </h3>
                <span>Web Developer</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card team-rotated">
              <a href="#">
                <img src="assets/img/team/team-img8.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Jermin Jekson</a>
                </h3>
                <span>Marketing Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card">
              <a href="#">
                <img src="assets/img/team/team-img9.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Hobler Jeain</a>
                </h3>
                <span>General Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card team-rotated-2">
              <a href="#">
                <img src="assets/img/team/team-img10.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Julfiker Jeain</a>
                </h3>
                <span>CEO At Ostino</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card active">
              <a href="#">
                <img src="assets/img/team/team-img11.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Hobler Jeain</a>
                </h3>
                <span>General Manager</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="team-card team-rotated-2">
              <a href="#">
                <img src="assets/img/team/team-img12.jpg" alt="Images" />
              </a>
              <div className="content">
                <h3>
                  <a href="team.html">Julfiker Jeain</a>
                </h3>
                <span>CEO At Ostino</span>
                <ul className="social-link">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="team-two-shape">
          <div className="shape1">
            <img src="assets/img/shape/shape13.png" alt="Images" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/shape11.png" alt="Images" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/shape10.png" alt="Images" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/shape9.png" alt="Images" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape/shape12.png" alt="Images" />
          </div>
          <div className="shape6">
            <img src="assets/img/shape/shape7.png" alt="Images" />
          </div>
          <div className="shape7">
            <img src="assets/img/shape/shape14.png" alt="Images" />
          </div>
        </div>
      </div>
      {/* Team Area Two End */}
      
      {/* Testimonial Area */}
      <Testimonial />
      {/* Testimonial Area End */}
      {/* Brand Logo Area */}
      <Brands />

      <Footer />
    </>
  );
}