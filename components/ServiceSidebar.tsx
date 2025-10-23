'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Service {
  name: string;
  href: string;
  category: string;
}

const services: Service[] = [
  // Digital Marketing
  { name: 'Website & App Development', href: '/services/website-app-development', category: 'Digital Marketing' },
  { name: 'Social Media Management', href: '/services/social-media-management', category: 'Digital Marketing' },
  { name: 'Search Engine Optimization', href: '/services/seo-services', category: 'Digital Marketing' },
  { name: 'Pay Per Click Advertising', href: '/services/ppc-advertising', category: 'Digital Marketing' },
  
  // Legal Services
  { name: 'Digital Signature Certificate', href: '/services/digital-signature-certificate', category: 'Legal Services' },
  { name: 'Startup Registration', href: '/services/startup-registration', category: 'Legal Services' },
  { name: 'GST & Taxation Services', href: '/services/gst-taxation', category: 'Legal Services' },
  { name: 'License Registration', href: '/services/license-registration', category: 'Legal Services' },
  
  // Tally Products
  { name: 'Tally on Cloud', href: '/services/tally-on-cloud', category: 'Tally Products' },
  { name: 'Dedicated Cloud Server', href: '/services/dedicated-cloud-server', category: 'Tally Products' },
  { name: 'Cloud with Admin Panel', href: '/services/cloud-admin-panel', category: 'Tally Products' },
  { name: 'Tally Add-ons & Plugins', href: '/services/tally-addons-plugins', category: 'Tally Products' },
  { name: 'Tally Mobile App', href: '/services/tally-mobile-app', category: 'Tally Products' },
  
  // Tally Services
  { name: 'Tally Implementation', href: '/services/tally-implementation', category: 'Tally Services' },
  { name: 'Tally AMC & Support', href: '/services/tally-amc-support', category: 'Tally Services' },
  { name: 'Tally Data Synchronization', href: '/services/tally-data-sync', category: 'Tally Services' },
  
  // Business Applications
  { name: 'CRM Solutions', href: '/services/crm-solutions', category: 'Business Applications' },
  { name: 'Payroll & HRMS', href: '/services/payroll-hrms', category: 'Business Applications' },
  { name: 'Field Tracking Solutions', href: '/services/field-tracking', category: 'Business Applications' },
];

export default function ServiceSidebar() {
  const pathname = usePathname();

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <div className="service-details-sidebar">
      {/* Services List */}
      <div className="services-list">
        <h3>Our Services</h3>
        {Object.entries(groupedServices).map(([category, categoryServices]) => (
          <div key={category} className="service-category-group">
            <h4 className="service-category-title">{category}</h4>
            <ul>
              {categoryServices.map((service) => (
                <li key={service.href} className={pathname === service.href ? 'active' : ''}>
                  <Link href={service.href}>
                    {service.name}
                    <i className='bx bx-chevron-right'></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Widget */}
      <div className="service-contact-widget">
        <h3>Need Help?</h3>
        <div className="contact-info">
          <i className='bx bx-phone-call'></i>
          <h4>Call Us</h4>
          <p><a href="tel:+919876543210">+91 98765 43210</a></p>
        </div>
        <div className="contact-info">
          <i className='bx bx-envelope'></i>
          <h4>Email Us</h4>
          <p><a href="mailto:info@ujss.in">info@ujss.in</a></p>
        </div>
        <div className="contact-info">
          <i className='bx bx-map'></i>
          <h4>Visit Us</h4>
          <p>Mumbai, Maharashtra, India</p>
        </div>
        <Link href="/contact" className="default-btn">
          Get A Quote
          <i className='bx bx-plus'></i>
        </Link>
      </div>

      {/* Download Brochure */}
      <div className="service-download-widget">
        <h3>Download Resources</h3>
        <a href="/brochure.pdf" className="download-btn" download>
          <i className='bx bxs-file-pdf'></i>
          <span>Service Brochure</span>
          <i className='bx bx-download'></i>
        </a>
        <a href="/company-profile.pdf" className="download-btn" download>
          <i className='bx bxs-file-doc'></i>
          <span>Company Profile</span>
          <i className='bx bx-download'></i>
        </a>
      </div>

      {/* Quick CTA */}
      <div className="service-cta-widget">
        <div className="cta-content">
          <i className='bx bx-support'></i>
          <h3>24/7 Support Available</h3>
          <p>Our experts are always ready to help you with your business needs</p>
          <Link href="/contact" className="cta-btn">Contact Support</Link>
        </div>
      </div>
    </div>
  );
}
