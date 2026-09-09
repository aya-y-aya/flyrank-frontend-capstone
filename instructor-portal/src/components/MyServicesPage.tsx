import './MySchedulePage.css';
import './MyServicesPage.css';

interface MyServicesPageProps {
  onBack: () => void;
}

export default function MyServicesPage({ onBack }: MyServicesPageProps) {
  const services = [
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
          onClick={() => alert('Add Service modal coming soon.')}
          className="primary-btn"
        >
          + Add New Service
        </button>
      </section>
    </div>
  );
}
