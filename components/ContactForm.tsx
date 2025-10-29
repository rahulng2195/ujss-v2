'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    msg_subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const response = await fetch('/api/contact', {
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
          phone_number: '',
          msg_subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="contact-form">
      <div className="section-title">
        <span className="sp-before sp-after">Contact</span>
        <h2>Contact With Us</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <i className="bx bx-user" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Your Name*"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <i className="bx bx-user" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="E-mail*"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <i className="bx bx-phone" />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Your Phone*"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-group">
              <i className="bx bx-file" />
              <input
                type="text"
                name="msg_subject"
                value={formData.msg_subject}
                onChange={handleChange}
                className="form-control"
                required
                placeholder="Your Subject*"
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <i className="bx bx-envelope" />
              <textarea
                name="message"
                className="form-control"
                cols={30}
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message*"
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <button
              type="submit"
              className="default-btn border-radius"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              <i className="bx bx-plus" />
            </button>

            {status.message && (
              <div
                className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}
                style={{
                  padding: '15px',
                  borderRadius: '8px',
                  marginTop: '20px',
                  backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: status.type === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                }}
              >
                {status.message}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
