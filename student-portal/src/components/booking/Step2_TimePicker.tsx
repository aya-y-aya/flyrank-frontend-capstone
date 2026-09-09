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
    <section aria-labelledby="step2-heading" className="space-y-4">
      <div>
        <span className="small-label text-foreground/70 block mb-0.5">
          Step 02
        </span>
        <h2 id="step2-heading" className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2]">
          Pick a Time
        </h2>
        <p className="text-sm sm:text-base text-foreground/80 mt-1 leading-[1.5]">
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
              className={`min-h-12 px-3 py-2.5 rounded-lg border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${
                isSelected
                  ? 'border-primary bg-primary-light text-primary font-bold ring-2 ring-primary/20 shadow-xs'
                  : 'border-stone-200 bg-white text-foreground hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <span className="text-sm sm:text-base font-semibold">{slot.time}</span>
              <span
                className={`small-label mt-0.5 ${
                  isSelected ? 'text-primary' : 'text-foreground/60'
                }`}
              >
                {slot.label}
              </span>
            </button>
          );
        })}
      </div>

      {availabilityId ? (
        <p className="text-sm text-primary font-semibold">
          ✓ Selected slot ID: {availabilityId}
        </p>
      ) : (
        <p className="text-xs text-foreground/60 italic">Please choose a slot above.</p>
      )}
    </section>
  );
}
