'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';

export default function PlaygroundPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const agents = [
    { 
      title: 'Lead Qualification Agent', 
      category: 'Sales', 
      description: 'Screens and prioritizes incoming leads to identify the most promising prospects.', 
      icon: 'bx-filter-alt' 
    },
    { 
      title: '24/7 Customer Support Agent', 
      category: 'Support', 
      description: 'Instantly answers common customer queries and resolves issues around the clock.', 
      icon: 'bx-support' 
    },
    { 
      title: 'Smart Email Assistant', 
      category: 'Productivity', 
      description: 'Manages incoming emails, drafts responses, and sends automated follow-ups.', 
      icon: 'bx-envelope' 
    },
    { 
      title: 'Sales Prospecting Agent', 
      category: 'Sales', 
      description: 'Finds potential customers, gathers contact information, and sends personalized outreach.', 
      icon: 'bx-user-voice' 
    },
    { 
      title: 'Data Analysis Agent', 
      category: 'Analytics', 
      description: 'Identifies trends and patterns in your business data and generates insightful reports.', 
      icon: 'bx-bar-chart-alt-2' 
    },
    { 
      title: 'Meeting Scheduler Agent', 
      category: 'Productivity', 
      description: 'Coordinates schedules with clients and team members and manages meeting invites.', 
      icon: 'bx-calendar-check' 
    },
    { 
      title: 'Content Creation Agent', 
      category: 'Marketing', 
      description: 'Generates high-quality blog posts, social media content, and marketing copy.', 
      icon: 'bx-pencil' 
    },
    { 
      title: 'Social Media Manager Agent', 
      category: 'Marketing', 
      description: 'Manages your social media presence, including posting content and engaging with followers.', 
      icon: 'bx-share-alt' 
    },
  ];

  const categories = ['All', 'Sales', 'Support', 'Productivity', 'Analytics', 'Marketing'];

  const handleHire = (agent) => {
    setSelectedAgent(agent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAgent(null);
  };

  const filteredAgents = activeCategory === 'All' 
    ? agents 
    : agents.filter(agent => agent.category === activeCategory);

  return (
    <>
      <Navbar />
      
      {/* Page Banner */}
      <div className="inner-banner inner-bg5">
        <div className="container">
          <div className="inner-title text-center">
            <h1>Hire an AI Agent</h1>
            <p>Automate your business tasks with our army of intelligent AI agents.</p>
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

      {/* Agent Listing Area */}
      <div className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-before sp-after">Our Agents</span>
            <h2>Choose an Agent to Get Started</h2>
            <p>Select an agent that fits your needs and let it do the hard work for you.</p>
          </div>

          <div className="agent-category-filter">
            {categories.map(category => (
              <button 
                key={category} 
                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="row pt-45">
            {filteredAgents.map((agent, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="agent-card">
                  <div className="agent-card-header">
                    <i className={`bx ${agent.icon}`}></i>
                    <h3>{agent.title}</h3>
                    <span className="badge bg-primary">{agent.category}</span>
                  </div>
                  <div className="agent-card-body">
                    <p>{agent.description}</p>
                  </div>
                  <div className="agent-card-footer">
                    <button className="default-btn" onClick={() => handleHire(agent)}>
                      Hire Agent
                      <i className='bx bx-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Agent Modal */}
      {showModal && selectedAgent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Hire {selectedAgent.title}</h3>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>You are about to hire the <strong>{selectedAgent.title}</strong>. Please provide your instructions below.</p>
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Instructions for the Agent</label>
                  <textarea className="form-control" rows="5" placeholder={`e.g., Find 10 potential customers for my software company in the finance industry.`}></textarea>
                </div>
                <button type="button" className="default-btn" onClick={closeModal}>
                  Deploy Agent
                  <i className='bx bx-rocket'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .agent-category-filter {
          text-align: center;
          margin-bottom: 40px;
        }
        .agent-category-filter .btn {
          margin: 5px;
        }
        .agent-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .agent-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .agent-card-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .agent-card-header i {
          font-size: 48px;
          color: #ff5500;
        }
        .agent-card-header h3 {
          font-size: 20px;
          font-weight: 600;
          margin-top: 15px;
        }
        .agent-card-header .badge {
          margin-top: 10px;
        }
        .agent-card-body {
          flex-grow: 1;
        }
        .agent-card-footer {
          text-align: center;
          margin-top: 20px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          width: 90%;
          max-width: 600px;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .modal-header h3 {
          font-size: 24px;
          font-weight: 600;
        }
        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>

      <Footer />
    </>
  );
}
