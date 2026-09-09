import { useState } from 'react';
import './MySchedulePage.css';
import './MyServicesPage.css';
import AddServiceModal, { type NewServiceData } from './AddServiceModal';

interface MyServicesPageProps {
  onBack: () => void;
}

interface ServiceItem {
  id: number;
  name: string;
  badge: string;
  price: string;
  duration: string;
  desc: string;
}

const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 1,
    name: 'TOPIK I Review',
    badge: 'Beginner',
    price: '₱600',
    duration: '60 mins',
    desc: 'Personalized private review session for TOPIK I grammar and vocabulary.',
  },
  {
    id: 2,
    name: 'TOPIK II Review',
    badge: 'Advanced',
    price: '₱600',
    duration: '60 mins',
    desc: 'Intensive prep covering advanced Korean grammar, listening, and essay writing.',
  },
  {
    id: 3,
    name: 'Grammar Class',
    badge: 'Core Skill',
    price: '₱600',
    duration: '60 mins',
    desc: 'Comprehensive Korean sentence structure and conversation practice.',
  },
];

export default function MyServicesPage({ onBack }: MyServicesPageProps) {
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAddService = (newService: NewServiceData) => {
    const created: ServiceItem = {
      id: Date.now(),
      ...newService,
    };
    setServices((prev) => [...prev, created]);
    setSuccessMessage(`Service "${newService.name}" created successfully!`);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <button
          type="button"
          onClick={onBack}
          className="back-button"
          aria-label="Back to Instructor Dashboard"
        >
          ← Back to Dashboard
        </button>
        <span className="page-badge">Service Catalog</span>
        <h1>My Services</h1>
        <p>
          View, edit, and create Korean language instructional offerings and set customized pricing.
        </p>
      </header>

      {successMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            backgroundColor: 'var(--primary-light)',
            border: '1px solid var(--primary-border)',
            color: 'var(--primary)',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          ✓ {successMessage}
        </div>
      )}

      <section aria-label="Services List" className="services-list">
        {services.map((svc) => (
          <article key={svc.id} className="service-card">
            <div>
              <span className="service-badge">{svc.badge}</span>
              <h2 className="service-name">{svc.name}</h2>
              <p className="service-desc">{svc.desc}</p>
            </div>
            <div className="service-footer">
              <span className="service-price">{svc.price}</span>
              <span className="service-duration">{svc.duration}</span>
            </div>
          </article>
        ))}
      </section>

      <section aria-label="Add New Service" className="placeholder-card">
        <div className="placeholder-icon" aria-hidden="true">
          ✨
        </div>
        <h2>Create a New Service</h2>
        <p>
          Expand your curriculum by adding new private tutoring, group review sessions, or mock exams.
        </p>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="primary-btn"
        >
          + Add New Service
        </button>
      </section>

      <AddServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddService}
      />
    </div>
  );
}
