import './MySchedulePage.css';

interface MySchedulePageProps {
  onBack: () => void;
}

export default function MySchedulePage({ onBack }: MySchedulePageProps) {
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
        <span className="page-badge">Schedule Overview</span>
        <h1>My Schedule</h1>
        <p>
          Review and manage your upcoming Korean class bookings, student sessions, and consultations.
        </p>
      </header>

      <section aria-label="Schedule Content" className="placeholder-card">
        <div className="placeholder-icon" aria-hidden="true">
          📅
        </div>
        <h2>Upcoming Sessions</h2>
        <p>
          Your booked lessons with students will appear here. Synchronize with your calendar or check student appointment details in real-time.
        </p>
        <button
          type="button"
          onClick={() => alert('Schedule synchronization coming soon.')}
          className="primary-btn"
        >
          Sync Calendar
        </button>
      </section>
    </div>
  );
}
