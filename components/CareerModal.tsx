'use client';

import { useState, useEffect } from 'react';

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function CareerModal({ isOpen, onClose, jobTitle }: CareerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: jobTitle || '',
    experience: '',
    currentCompany: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const [fileName, setFileName] = useState('');

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  useEffect(() => {
    if (jobTitle) {
      setFormData(prev => ({ ...prev, position: jobTitle }));
    }
  }, [jobTitle]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        resume: file
      });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting application...' });

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('position', formData.position);
      submitData.append('experience', formData.experience);
      submitData.append('currentCompany', formData.currentCompany);
      submitData.append('coverLetter', formData.coverLetter);

      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      const response = await fetch('/api/career', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: jobTitle || '',
          experience: '',
          currentCompany: '',
          resume: null,
          coverLetter: ''
        });
        setFileName('');

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setStatus({ type: 'idle', message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="career-modal-overlay" onClick={onClose}>
      <div className="career-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="career-modal-close" onClick={onClose}>
          <i className='bx bx-x'></i>
        </button>

        <div className="career-modal-header">
          <i className='bx bx-briefcase-alt-2'></i>
          <h3>Apply for Position</h3>
          {jobTitle && <p className="job-title">{jobTitle}</p>}
        </div>

        <form onSubmit={handleSubmit} className="career-modal-form">
          <div className="form-row">
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
          </div>

          <div className="form-row">
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

            <div className="form-group">
              <label htmlFor="experience">Total Experience *</label>
              <select
                id="experience"
                name="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select experience</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-2 years">1-2 years</option>
                <option value="2-3 years">2-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>

          {!jobTitle && (
            <div className="form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select
                id="position"
                name="position"
                className="form-control"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select position</option>
                <option value="Cloud Support Executive">Cloud Support Executive</option>
                <option value="Tally Support Executive">Tally Support Executive</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Inside Sales Executive">Inside Sales Executive</option>
                <option value="Other">Other Position</option>
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="currentCompany">Current Company</label>
            <input
              type="text"
              id="currentCompany"
              name="currentCompany"
              className="form-control"
              value={formData.currentCompany}
              onChange={handleChange}
              placeholder="Current or last company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Upload Resume * (PDF, DOC, DOCX)</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                id="resume"
                name="resume"
                className="file-input"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
              <label htmlFor="resume" className="file-input-label">
                <i className='bx bx-cloud-upload'></i>
                <span>{fileName || 'Choose file or drag here'}</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter / Message</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              className="form-control"
              rows={4}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're the perfect fit for this role..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="default-btn career-submit-btn"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Submitting...' : 'Submit Application'}
            <i className='bx bx-right-arrow-alt'></i>
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
    // </div>
  );
}
