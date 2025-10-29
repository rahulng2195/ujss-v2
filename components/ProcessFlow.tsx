'use client';

import Image from 'next/image';

export default function ProcessFlow() {
  return (
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
                      <span>1</span> Discovery & Strategy 
                    </h3>
                    <p>
                      We begin by understanding your business, goals, and challenges to develop a comprehensive strategy.
                    </p>
                  </li>
                  <li className="text-right">
                    <h3>
                     <span>2</span> Design & Development 
                    </h3>
                    <p>
                      Our team designs and develops custom solutions tailored to your specific needs and requirements.
                    </p>
                  </li>
                  <li className="text-right">
                    <h3>
                     <span>3</span> Testing & Quality Assurance 
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
                      <span>4</span> Deployment & Integration
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
  );
}