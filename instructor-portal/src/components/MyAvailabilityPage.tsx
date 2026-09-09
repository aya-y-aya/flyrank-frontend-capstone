import './MySchedulePage.css';
import './MyAvailabilityPage.css';

interface MyAvailabilityPageProps {
  onBack: () => void;
}

export default function MyAvailabilityPage({ onBack }: MyAvailabilityPageProps) {
  const sampleSlots = [
    { day: 'Monday – Friday', time: '09:00 AM – 12:00 PM', status: 'Morning Slots' },
    { day: 'Monday – Friday', time: '01:30 PM – 05:00 PM', status: 'Afternoon Slots' },
    { day: 'Saturday', time: '10:00 AM – 03:00 PM', status: 'Weekend Slots' },
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
        <span className="page-badge">Weekly Timeslots</span>
        <h1>My Availability</h1>
        <p>
          Configure your weekly available slots and define open hours for student booking requests.
        </p>
      </header>

      <section aria-label="Available Timeslots" className="availability-grid">
        {sampleSlots.map((slot) => (
          <div key={slot.day + slot.time} className="slot-item">
            <div>
              <div className="slot-day">{slot.day}</div>
              <div className="slot-time">{slot.time}</div>
            </div>
            <span className="slot-badge">{slot.status}</span>
          </div>
        ))}
      </section>

      <section aria-label="Availability Controls" className="placeholder-card">
        <div className="placeholder-icon" aria-hidden="true">
          ⏰
        </div>
        <h2>Custom Availability Rules</h2>
        <p>
          Block time off, set buffer intervals between classes, or specify minimum notice periods for new bookings.
        </p>
        <button
          type="button"
          onClick={() => alert('Editing availability rules coming soon.')}
          className="primary-btn"
        >
          Edit Availability Rules
        </button>
      </section>
    </div>
  );
}
