'use client';

import Link from 'next/link';
import { useState } from 'react';
import InquiryModal from './InquiryModal';

interface ServiceCardProps {
  icon: string;
  bgClass: string;
  title: string;
  slug: string;
  description: string;
}

export default function ServiceCard({ icon, bgClass, title, slug, description }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="service-another-card">
        <Link href={`/services/${slug}`}>
          <i className={`${icon} service-icon ${bgClass}`}></i>
        </Link>
        <h3><Link href={`/services/${slug}`}>{title}</Link></h3>
        <p>{description}</p>
        <div className="service-card-buttons">
          <Link href={`/services/${slug}`} className="learn-btn">
            Learn more 
            <i className='bx bx-plus'></i>
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inquiry-btn"
          >
            <i className='bx bx-envelope'></i>
            Inquiry
          </button>
        </div>
      </div>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={title}
      />
    </>
  );
}
