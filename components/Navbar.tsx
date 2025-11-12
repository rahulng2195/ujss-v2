'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}

export default function Navbar() {
    useEffect(() => {
        if (window.jQuery) {
            window.jQuery('.mean-menu').meanmenu({
                meanScreenWidth: "991"
            });
        }
    }, []);
  return (
    <>
      <div className="navbar-area">
        {/* Menu For Mobile Device */}
        <div className="mobile-nav">
          <Link href="/" className="logo">
            <Image src="/assets/img/ujss logo.png" className="logo-one" alt="Logo" width={150} height={80} />
            <Image src="/assets/img/ujsswhiteLogo.png" className="logo-two" alt="Logo" width={150} height={80} />
          </Link>
        </div>

        {/* Menu For Desktop Device */}
        <div className="main-nav nav-bar-two">
          <div className="container-fluid">
            <nav className="container-max-2 navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <Image src="/assets/img/ujss logo.png" alt="Logo" width={150} height={80} />
              </Link>

              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/services" className="nav-link">
                     Product & Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/playground" className="nav-link">
                      Playground
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/career" className="nav-link">
                      Career
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="side-nav d-flex align-items-center">
                  {/* <div className="side-item">
                    <div className="search-box">
                      <i className='flaticon-loupe'></i>
                    </div>
                  </div> */}

                  {/* <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className='flaticon-contact'></i>
                      </a>
                    </div>
                  </div> */}

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="tel:+919167423035" className="nav-menu-btn">
                        <i className='bx bx-phone'></i>
                        +91 9167423035
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="side-nav-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            
            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-item">
                    <div className="search-box">
                      <i className='flaticon-loupe'></i>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="user-btn">
                      <a href="#">
                        <i className='flaticon-contact'></i>
                      </a>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="nav-add-btn">
                      <a href="#" className="nav-menu-btn border-radius">
                        Contact us 
                        <i className='bx bx-plus'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className="search-overlay">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-layer"></div>
            <div className="search-layer"></div>
            <div className="search-layer"></div>
            
            <div className="search-close">
              <span className="search-close-line"></span>
              <span className="search-close-line"></span>
            </div>

            <div className="search-form">
              <form>
                <input type="text" className="input-search" placeholder="Search here..." />
                <button type="submit"><i className="flaticon-loupe"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
