import './App.css';

function App() {
  const cards = [
    {
      badge: 'My Schedule',
      title: 'Booking Sessions',
      desc: 'Review timeslots and bookings for korean classes and/or services.',
      action: 'View Schedule →',
    },
    {
      badge: 'My Availability',
      title: 'Availability',
      desc: 'Edit your timeslot vailability.',
      action: 'Manage Availability →',
    },
    {
      badge: 'My Services',
      title: 'Korean Services',
      desc: 'View, edit, and create Korean services.',
      action: 'Open Services →',
    },
  ];

  return (
    <div className="App">
      <main id="center">
        <header className="hero-header">
          <h1>Instructor Portal</h1>
          <p>
            Welcome to the HanVoice Instructor Portal. Manage class schedules, instructor availability, and other bookings.
          </p>
        </header>

        <section aria-label="Quick Actions" className="dashboard-grid">
          {cards.map((card) => (
            <article key={card.title} className="dashboard-card">
              <div>
                <span className="card-badge">{card.badge}</span>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-desc">{card.desc}</p>
              </div>
              <button type="button" className="card-action">
                {card.action}
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
