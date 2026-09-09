import { useState, useEffect } from 'react';
import './App.css';
import MySchedulePage from './components/MySchedulePage';
import MyAvailabilityPage from './components/MyAvailabilityPage';
import MyServicesPage from './components/MyServicesPage';

type ViewMode = 'dashboard' | 'schedule' | 'availability' | 'services';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'schedule' || hash === 'availability' || hash === 'services') {
        setCurrentView(hash);
      } else {
        setCurrentView('dashboard');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view: ViewMode) => {
    if (view === 'dashboard') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
    setCurrentView(view);
  };

  const cards = [
    {
      id: 'schedule' as ViewMode,
      badge: 'My Schedule',
      title: 'Booking Sessions',
      desc: 'Review timeslots and bookings for korean classes and/or services.',
      action: 'View Schedule →',
    },
    {
      id: 'availability' as ViewMode,
      badge: 'My Availability',
      title: 'Availability',
      desc: 'Edit your timeslot availability and recurring open hours.',
      action: 'Manage Availability →',
    },
    {
      id: 'services' as ViewMode,
      badge: 'My Services',
      title: 'Korean Services',
      desc: 'View, edit, and create Korean instructional services.',
      action: 'Open Services →',
    },
  ];

  return (
    <div className="App">
      <main id="center">
        {currentView === 'schedule' && (
          <MySchedulePage onBack={() => navigateTo('dashboard')} />
        )}

        {currentView === 'availability' && (
          <MyAvailabilityPage onBack={() => navigateTo('dashboard')} />
        )}

        {currentView === 'services' && (
          <MyServicesPage onBack={() => navigateTo('dashboard')} />
        )}

        {currentView === 'dashboard' && (
          <>
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
                  <button
                    type="button"
                    onClick={() => navigateTo(card.id)}
                    className="card-action"
                    aria-label={`Open ${card.badge}`}
                  >
                    {card.action}
                  </button>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

