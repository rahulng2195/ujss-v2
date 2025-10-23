'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [chartType, setChartType] = useState('bar');

  const demos = [
    {
      id: 'analytics',
      title: 'Data Analytics',
      icon: 'flaticon-big-data',
      description: 'Explore our interactive data analytics dashboard',
    },
    {
      id: 'ai',
      title: 'AI Models',
      icon: 'flaticon-robot',
      description: 'Try our AI-powered prediction models',
    },
    {
      id: 'visualization',
      title: 'Data Visualization',
      icon: 'flaticon-chart',
      description: 'Create stunning data visualizations',
    },
    {
      id: 'automation',
      title: 'Automation',
      icon: 'flaticon-automation',
      description: 'Test our workflow automation tools',
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg5">
        <div className="container">
          <div className="inner-title text-center">
            <h3>Playground</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>Playground</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Playground Intro */}
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Interactive Demo</span>
            <h2>Try Our Tools & Solutions</h2>
            <p>Experience the power of our AI and data analytics solutions with these interactive demos. No installation required!</p>
          </div>
        </div>
      </div>

      {/* Demo Categories */}
      <div className="service-area pb-70">
        <div className="container">
          <div className="row">
            {demos.map((demo) => (
              <div key={demo.id} className="col-lg-3 col-md-6">
                <div 
                  className={`service-another-card ${activeTab === demo.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(demo.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={`${demo.icon} service-icon service-icon-bg1`}></i>
                  <h3>{demo.title}</h3>
                  <p>{demo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Area */}
      <div className="case-study-area pt-100 pb-70">
        <div className="container">
          <div className="playground-demo-area">
            {/* Analytics Demo */}
            {activeTab === 'analytics' && (
              <div className="demo-content">
                <div className="section-title text-center pb-4">
                  <h2>Data Analytics Dashboard</h2>
                  <p>Visualize and analyze your data in real-time</p>
                </div>

                <div className="row pb-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-card">
                      <h3>$45.2K</h3>
                      <p>TOTAL REVENUE</p>
                      <span className="trend-up">+12.5%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-card">
                      <h3>1,425</h3>
                      <p>NEW CUSTOMERS</p>
                      <span className="trend-up">+8.2%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-card">
                      <h3>89.5%</h3>
                      <p>SATISFACTION RATE</p>
                      <span className="trend-up">+3.1%</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="counter-card">
                      <h3>326</h3>
                      <p>ACTIVE PROJECTS</p>
                      <span className="trend-down">-2.4%</span>
                    </div>
                  </div>
                </div>

                <div className="demo-controls">
                  <h4>Chart Type:</h4>
                  <div className="btn-group" role="group">
                    <button 
                      type="button" 
                      className={`btn ${chartType === 'bar' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setChartType('bar')}
                    >
                      Bar Chart
                    </button>
                    <button 
                      type="button" 
                      className={`btn ${chartType === 'line' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setChartType('line')}
                    >
                      Line Chart
                    </button>
                    <button 
                      type="button" 
                      className={`btn ${chartType === 'pie' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setChartType('pie')}
                    >
                      Pie Chart
                    </button>
                  </div>
                </div>

                <div className="demo-chart-placeholder">
                  <div className="chart-container">
                    <div className="placeholder-text">
                      <i className='bx bx-bar-chart-alt-2'></i>
                      <h4>{chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart Preview</h4>
                      <p>Interactive chart visualization would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Models Demo */}
            {activeTab === 'ai' && (
              <div className="demo-content">
                <div className="section-title text-center pb-4">
                  <h2>AI Prediction Models</h2>
                  <p>Test our machine learning algorithms</p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="demo-form">
                      <h4>Input Parameters</h4>
                      <form>
                        <div className="form-group">
                          <label>Customer Age</label>
                          <input type="number" className="form-control" placeholder="Enter age" />
                        </div>
                        <div className="form-group">
                          <label>Purchase History</label>
                          <select className="form-control">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Engagement Score</label>
                          <input type="range" className="form-range" min="0" max="100" />
                        </div>
                        <button type="button" className="default-btn">
                          Run Prediction
                          <i className='bx bx-play'></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="demo-result">
                      <h4>Prediction Results</h4>
                      <div className="result-card">
                        <div className="result-metric">
                          <span className="metric-label">Churn Probability</span>
                          <span className="metric-value">23.5%</span>
                        </div>
                        <div className="result-metric">
                          <span className="metric-label">Lifetime Value</span>
                          <span className="metric-value">$2,450</span>
                        </div>
                        <div className="result-metric">
                          <span className="metric-label">Confidence Score</span>
                          <span className="metric-value">87.2%</span>
                        </div>
                        <div className="result-recommendation">
                          <h5>Recommendation:</h5>
                          <p>This customer shows high engagement and low churn risk. Consider upselling premium features.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visualization Demo */}
            {activeTab === 'visualization' && (
              <div className="demo-content">
                <div className="section-title text-center pb-4">
                  <h2>Data Visualization Studio</h2>
                  <p>Create beautiful charts and graphs from your data</p>
                </div>

                <div className="visualization-demo">
                  <div className="viz-toolbar">
                    <button className="btn btn-sm btn-primary">
                      <i className='bx bx-upload'></i> Upload Data
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className='bx bx-save'></i> Save
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      <i className='bx bx-export'></i> Export
                    </button>
                  </div>

                  <div className="viz-preview">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="viz-card">
                          <Image src="/assets/img/blog/blog1.png" alt="Chart" width={300} height={200} unoptimized />
                          <h5>Sales Trend</h5>
                          <p>Monthly revenue analysis</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="viz-card">
                          <Image src="/assets/img/blog/blog2.png" alt="Chart" width={300} height={200} unoptimized />
                          <h5>Customer Distribution</h5>
                          <p>Geographic breakdown</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="viz-card">
                          <Image src="/assets/img/blog/blog3.png" alt="Chart" width={300} height={200} unoptimized />
                          <h5>Product Performance</h5>
                          <p>Top selling items</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Automation Demo */}
            {activeTab === 'automation' && (
              <div className="demo-content">
                <div className="section-title text-center pb-4">
                  <h2>Workflow Automation</h2>
                  <p>Automate repetitive tasks and save time</p>
                </div>

                <div className="automation-demo">
                  <div className="workflow-builder">
                    <h4>Build Your Workflow</h4>
                    <div className="workflow-steps">
                      <div className="workflow-step">
                        <div className="step-icon">
                          <i className='bx bx-play-circle'></i>
                        </div>
                        <h5>Trigger</h5>
                        <p>New customer signup</p>
                      </div>

                      <div className="workflow-arrow">
                        <i className='bx bx-right-arrow-alt'></i>
                      </div>

                      <div className="workflow-step">
                        <div className="step-icon">
                          <i className='bx bx-envelope'></i>
                        </div>
                        <h5>Action 1</h5>
                        <p>Send welcome email</p>
                      </div>

                      <div className="workflow-arrow">
                        <i className='bx bx-right-arrow-alt'></i>
                      </div>

                      <div className="workflow-step">
                        <div className="step-icon">
                          <i className='bx bx-user-plus'></i>
                        </div>
                        <h5>Action 2</h5>
                        <p>Add to CRM</p>
                      </div>

                      <div className="workflow-arrow">
                        <i className='bx bx-right-arrow-alt'></i>
                      </div>

                      <div className="workflow-step">
                        <div className="step-icon">
                          <i className='bx bx-check-circle'></i>
                        </div>
                        <h5>Complete</h5>
                        <p>Workflow finished</p>
                      </div>
                    </div>

                    <div className="workflow-actions">
                      <button className="default-btn">
                        <i className='bx bx-plus'></i> Add Step
                      </button>
                      <button className="default-btn">
                        <i className='bx bx-play'></i> Test Workflow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="newsletter-area pt-100 pb-100">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="newsletter-content">
                  <h2>Ready to Get Started?</h2>
                  <p>Contact us to learn more about how these tools can transform your business.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="newsletter-btn text-end">
                  <Link href="/contact" className="default-btn">
                    Contact Sales
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