'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

const TIME_SLOTS = [
  { id: 101, time: '09:00 AM', label: 'Morning' },
  { id: 102, time: '11:00 AM', label: 'Morning' },
  { id: 103, time: '01:30 PM', label: 'Afternoon' },
  { id: 104, time: '03:30 PM', label: 'Afternoon' },
  { id: 105, time: '05:00 PM', label: 'Evening' },
  { id: 106, time: '06:30 PM', label: 'Evening' },
];

export default function Step2_TimePicker() {
  const { availabilityId, setAvailability } = useBooking();

  return (
    <section aria-labelledby="step2-heading" className="space-y-3 sm:space-y-4">
      <div>
        <h2 id="step2-heading" className="text-lg sm:text-xl font-bold text-gray-900">
          2. Pick a Time
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          Select an available timeslot for your appointment.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3">
        {TIME_SLOTS.map((slot) => {
          const isSelected = availabilityId === slot.id;
          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => setAvailability(slot.id)}
              className={`min-h-12 px-3 py-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                isSelected
                  ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold ring-2 ring-blue-600/20'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-medium">{slot.time}</span>
              <span className="text-[11px] text-gray-500">{slot.label}</span>
            </button>
          );
        })}
      </div>

      {availabilityId ? (
        <p className="text-xs text-green-700 font-medium">
          ✓ Selected slot ID: {availabilityId}
        </p>
      ) : (
        <p className="text-xs text-gray-400 italic">Please choose a slot above.</p>
      )}
    </section>
  );
}
