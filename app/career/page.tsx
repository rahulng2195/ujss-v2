'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerModal from '@/components/CareerModal';
import Image from 'next/image';
import Link from 'next/link';

export default function CareerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const jobOpenings = [
    {
      id: 1,
      title: 'CLOUD SUPPORT EXECUTIVE',
      department: 'Technical Support',
      location: 'Bhandup, Mumbai',
      type: 'Full Time',
      experience: '1-3 years',
    },
    {
      id: 2,
      title: 'TALLY SUPPORT EXECUTIVE',
      department: 'Technical Support',
      location: 'Bhandup, Mumbai',
      type: 'Full Time',
      experience: '2-4 years',
    },
    {
      id: 3,
      title: 'SALES MANAGER',
      department: 'Sales',
      location: 'Bhandup, Mumbai',
      type: 'Full Time',
      experience: '3-5 years',
    },
    {
      id: 4,
      title: 'INSIDE SALES EXECUTIVE',
      department: 'Sales',
      location: 'Bhandup, Mumbai',
      type: 'Full Time',
      experience: '1-2 years',
    },
  ];

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg7">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Career Opportunities</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Career</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Career Intro */}
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Join Our Team</span>
            <h2>Build Your Career With UJSS</h2>
            <p>We&apos;re always looking for talented individuals to join our growing team. Explore exciting opportunities and take your career to the next level.</p>
          </div>

          <div className="row pt-45">
            <div className="col-lg-4 col-md-6">
              <div className="service-another-card">
                <i className="flaticon-team service-icon service-icon-bg1"></i>
                <h3>Great Team</h3>
                <p>Work with passionate and talented professionals who are committed to excellence and innovation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-another-card">
                <i className="flaticon-growth service-icon service-icon-bg2"></i>
                <h3>Career Growth</h3>
                <p>We invest in your professional development with training programs and advancement opportunities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-another-card">
                <i className="flaticon-balance service-icon service-icon-bg3"></i>
                <h3>Work-Life Balance</h3>
                <p>Flexible work arrangements, competitive benefits, and a supportive work environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="pricing-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Open Positions</span>
            <h2>Current Job Openings</h2>
          </div>

          <div className="row pt-45">
            {jobOpenings.map((job) => (
              <div key={job.id} className="col-lg-6">
                <div className="career-card">
                  <div className="career-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="career-body">
                    <ul className="job-details">
                      <li>
                        <i className='bx bx-briefcase'></i>
                        <span>Department: {job.department}</span>
                      </li>
                      <li>
                        <i className='bx bx-map'></i>
                        <span>Location: {job.location}</span>
                      </li>
                      <li>
                        <i className='bx bx-time'></i>
                        <span>Experience: {job.experience}</span>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="career-footer">
                    <button 
                      onClick={() => handleApplyClick(job.title)}
                      className="default-btn"
                      style={{ cursor: 'pointer' }}
                    >
                      Apply Now
                      <i className='bx bx-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="work-area-two pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Application Process</span>
            <h2>How To Apply</h2>
          </div>

          <div className="row pt-45">
            <div className="col-lg-3 col-md-6">
              <div className="work-card">
                <div className="work-number">
                  <span>1</span>
                </div>
                <h3>Browse Jobs</h3>
                <p>Explore our current job openings and find the perfect match for your skills.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="work-card">
                <div className="work-number">
                  <span>2</span>
                </div>
                <h3>Submit Application</h3>
                <p>Fill out the online application form and upload your resume and cover letter.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="work-card">
                <div className="work-number">
                  <span>3</span>
                </div>
                <h3>Interview</h3>
                <p>If selected, you&apos;ll be contacted for a phone or video interview with our team.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="work-card">
                <div className="work-number">
                  <span>4</span>
                </div>
                <h3>Join Us</h3>
                <p>Receive an offer and start your exciting journey with UJSS!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="newsletter-area pb-100">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="newsletter-content">
                  <h2>Don&apos;t See a Perfect Fit?</h2>
                  <p>We&apos;re always interested in meeting talented people. Send us your resume and we&apos;ll keep you in mind for future opportunities.</p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="newsletter-btn">
                  <button 
                    onClick={() => {
                      setSelectedJob('');
                      setIsModalOpen(true);
                    }}
                    className="default-btn"
                    style={{ cursor: 'pointer' }}
                  >
                    Send Your Resume
                    <i className='bx bx-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CareerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob}
      />

      <Footer />
    </>
  );
}