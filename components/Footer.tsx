'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-area footer-bg2 pt-100">
      <div className="container">
        <div className="footer-midal pb-70">
          <div className="row">
            <div className="col-lg-4 col-sm-7">
              <div className="footer-widget">
                <div className="footer-img">
                  <Image src="/assets/img/ujss logo.png" className="footer-img1" alt="Logo" width={130} height={60} />
                  <Image src="/assets/img/ujsswhiteLogo.png" className="footer-img2" alt="Logo" width={130} height={60} />
                </div>
                <p>
                  Your Partner in Digital Innovation & Custom Software Development.
                </p>
                <div className="footer-social-icon">
                  <ul className="social-link">
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                    </li> 
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                    </li> 
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                    </li> 
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-pinterest-alt'></i></a>
                    </li> 
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-7">
              <div className="footer-widget ps-5">
                <h3>Company</h3>
                <ul className="footer-list">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Product & Services</Link></li>
                  <li><Link href="/playground">Playground</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-5">
              <div className="footer-widget">
                <h3>Resources</h3>
                <ul className="footer-list">
                  <li><a href="#">AI Agents <sup className="badge badge-danger text-danger">New</sup></a></li>
                  <li><a href="#">Business Software</a></li>
                  <li><a href="#">Cloud Service</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">DSC & Legal Service</a></li>
                  <li><a href="#">Web & App Development</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-5">
              <div className="footer-widget">
                <h3>Address</h3>
                <ul className="footer-list-two">
                  <li>
                    <i className='flaticon-telephone'></i>
                    <a href="tel:+919167423035">+91 91674 23035</a>
                  </li>
                  <li>
                    <i className='flaticon-email-1'></i>
                    <a href="mailto:enquiry@ujss.in">enquiry@ujss.in</a>
                  </li>
                  <li>
                    <i className='flaticon-place'></i>
                     78 Business Park Promises, 4th Floor, Office No. 418 BMC Building, Bhandup Station Road, Bhandup - west. Mumbai - 400078
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-right-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right-text text-center">
                <p>
                  2025, All Rights Reserved By UJSS. 
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4">
              <div className="copy-right-list">
                <ul>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-condition">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
