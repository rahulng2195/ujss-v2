import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ServiceSidebar from '@/components/ServiceSidebar';
import '../../../styles/service-details.css';


export const metadata = {
  title: 'AI Agents for Business Automation | Intelligent Digital Assistants - UJSS',
  description: 'Deploy intelligent AI agents to automate tasks, save costs, and drive growth. Explore our ready-to-use agents for lead qualification, customer support, data analysis, and more.',
  keywords: 'AI agents, digital assistants, business automation, AI for business, lead qualification AI, customer support AI, AI data analysis, UJSS AI',
};

export default function AIAgentsPage() {
  const benefits = [
    {
      icon: 'bx-timer',
      title: 'Save Time & Money',
      description: 'Our AI agents work 24/7, handling the tasks of multiple employees at a fraction of the cost, freeing up your team to focus on strategic initiatives.'
    },
    {
      icon: 'bx-rocket',
      title: 'Instant Response Times',
      description: 'Provide immediate answers to customer inquiries and qualify leads the moment they come in, ensuring you never miss an opportunity.'
    },
    {
      icon: 'bx-trending-up',
      title: 'Continuous Improvement',
      description: 'Our agents learn from every interaction, constantly adapting and improving to deliver better results and a higher return on investment.'
    },
    {
      icon: 'bx-check-shield',
      title: 'Never Miss Opportunities',
      description: 'Automate lead capture and follow-up processes to ensure every potential customer is engaged, maximizing your sales pipeline.'
    }
  ];

  const readyToUseAgents = [
    { icon: 'bx-filter-alt', title: 'Lead Qualification Agent' },
    { icon: 'bx-support', title: '24/7 Customer Support Agent' },
    { icon: 'bx-envelope', title: 'Smart Email Assistant' },
    { icon: 'bx-user-voice', title: 'Sales Prospecting Agent' },
    { icon: 'bx-bar-chart-alt-2', title: 'Data Analysis Agent' },
    { icon: 'bx-calendar-check', title: 'Meeting Scheduler Agent' },
    { icon: 'bx-pencil', title: 'Content Creation Agent' },
    { icon: 'bx-share-alt', title: 'Social Media Manager Agent' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg4">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Intelligent AI Agents</h1>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li><Link href="/services">Services</Link></li>
              <li><i className='bx bx-chevron-right'></i></li>
              <li>AI Agents</li>
            </ul>
          </div>
        </div>

        <div className="inner-banner-shape">
          <div className="shape-one"><img src="/assets/img/inner-banner/banner-shape1.png" alt="Shape" /></div>
          <div className="shape-two"><img src="/assets/img/inner-banner/banner-shape2.png" alt="Shape" /></div>
          <div className="shape-three"><img src="/assets/img/inner-banner/banner-shape3.png" alt="Shape" /></div>
        </div>
      </div>

      {/* Service Details */}
      <div className="service-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-article">
                <div className="service-article-img">
                  <img src="/assets/img/service/ai-agents.jpg" alt="AI Agents" />
                </div>
                
                <div className="service-article-content">
                  <h2>Your 24/7 Digital Employee is Here</h2>
                  <p>Imagine an intelligent assistant that can think, learn, and act autonomously to handle complex business tasks. That’s an AI Agent. It’s more than just automation; it’s a digital employee that works around the clock, delivering results faster and more cost-effectively than ever before.</p>
                  
                  <p>Our AI Agents are designed to integrate seamlessly into your existing workflows, augmenting your team’s capabilities and driving unprecedented efficiency. From managing customer interactions to analyzing complex data, these agents are the key to unlocking your business’s full potential.</p>

                  <div className="service-article-another mt-5">
                    <h3>🚀 Key Business Benefits</h3>
                    <p>Discover the immediate impact of deploying AI Agents in your operations:</p>
                  </div>

                  <div className="row mt-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="col-lg-6 col-md-6 mb-4">
                        <div className="service-feature-card">
                          <i className={`bx ${benefit.icon}`}></i>
                          <h4>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Ready-to-Use AI Agents</h3>
                    <p>We have a library of pre-built agents ready for immediate deployment:</p>
                  </div>

                  <div className="service-benefits-grid">
                    {readyToUseAgents.map((agent, index) => (
                      <div key={index} className="service-benefit-item">
                        <i className={`bx ${agent.icon}`}></i>
                        <span>{agent.title}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-article-quote mt-5">
                    <i className='bx bxs-quote-left'></i>
                    <p>Our AI agent handles 80% of our customer support queries, allowing our team to focus on high-value interactions. The ROI was visible in just two months.</p>
                    <span>- A Happy Client</span>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Our Implementation Process</h3>
                    <p>We make it easy to integrate AI into your business:</p>
                  </div>

                  <div className="service-process-steps">
                    <div className="service-process-step">
                      <div className="service-process-step-number">1</div>
                      <div className="service-process-step-content">
                        <h4>Consultation & Needs Analysis</h4>
                        <p>We start with a free consultation to understand your challenges and identify where AI can deliver the most value.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">2</div>
                      <div className="service-process-step-content">
                        <h4>Agent Selection & Customization</h4>
                        <p>Choose from our library of ready-to-use agents or let us build a custom agent tailored to your unique needs.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">3</div>
                      <div className="service-process-step-content">
                        <h4>Setup & Integration</h4>
                        <p>We configure and integrate the AI agent with your existing tools, such as CRM, email, and other software.</p>
                      </div>
                    </div>

                    <div className="service-process-step">
                      <div className="service-process-step-number">4</div>
                      <div className="service-process-step-content">
                        <h4>Training & Optimization</h4>
                        <p>We train the agent on your business data and continuously optimize its performance for the best results.</p>
                      </div>
                    </div>
                  </div>

                  <div className="service-article-another mt-5">
                    <h3>Affordable Investment, Quick ROI</h3>
                    <p>Getting started with AI is more accessible than you think. Our packages are designed for businesses of all sizes, with most clients seeing a return on investment within a few months.</p>
                  </div>

                  <div className="row mt-4 justify-content-center">
                    <div className="col-md-8">
                      <div className="service-cta-box" style={{background: 'linear-gradient(135deg, #3c8ce7 0%, #00eaff 100%)', color: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center'}}>
                        <i className='bx bx-bot' style={{fontSize: '48px', marginBottom: '15px'}}></i>
                        <h4 style={{fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#fff'}}>Get a Free AI Consultation</h4>
                        <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>Let us analyze your business and show you how much time and money you can save with an AI agent.</p>
                        <Link href="/contact" className="default-btn" style={{background: '#fff', color: '#3c8ce7'}}>
                          Book a Free Analysis
                          <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
