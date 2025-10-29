'use client';

import { useState, useEffect } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function InquiryModal({ isOpen, onClose, serviceName }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceName || '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  useEffect(() => {
    if (serviceName) {
      setFormData(prev => ({ ...prev, service: serviceName }));
    }
  }, [serviceName]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: serviceName || '',
          message: ''
        });

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setStatus({ type: 'idle', message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit inquiry. Please try again.' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="inquiry-modal-overlay" onClick={onClose}>
      <div className="inquiry-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="inquiry-modal-close" onClick={onClose}>
          <i className='bx bx-x'></i>
        </button>
        
        <div className="inquiry-modal-header">
          <h3>Get in Touch</h3>
          <p>{serviceName ? `Inquiry for ${serviceName}` : 'Tell us about your requirements'}</p>
        </div>

        <form onSubmit={handleSubmit} className="inquiry-modal-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          {!serviceName && (
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select
                id="service"
                name="service"
                className="form-control"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Tally on Cloud">Tally on Cloud</option>
                <option value="Tally Implementation">Tally Implementation</option>
                <option value="Tally AMC & Support">Tally AMC & Support</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Website Development">Website Development</option>
                <option value="DSC Services">DSC Services</option>
                <option value="GST & Taxation">GST & Taxation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="default-btn inquiry-submit-btn"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
            <i className='bx bx-plus'></i>
          </button>

          {status.message && (
            <div
              className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}
              style={{
                padding: '12px 15px',
                borderRadius: '8px',
                marginTop: '15px',
                backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                color: status.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                fontSize: '14px'
              }}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
