import React from 'react';
import BookingFlow from '@/components/booking/BookingFlow';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-6 sm:py-10 xl:py-16 px-4 sm:px-6 lg:px-8 box-border">
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <header className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-gray-900 tracking-tight">
            Book an Appointment
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Schedule your flight training session with an available certified flight instructor.
          </p>
        </header>

        <BookingFlow />
      </div>
    </main>
  );
}