'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step2_TimePicker() {
  const { availabilityId } = useBooking();

  return (
    <section aria-labelledby="step2-heading" className="space-y-4">
      <h2 id="step2-heading" className="text-xl font-semibold text-gray-900">
        2. Pick a Time
      </h2>
      <p className="text-sm text-gray-500">
        Select an available timeslot for your appointment.
      </p>
      {availabilityId ? (
        <p className="text-sm text-green-700">Selected slot ID: {availabilityId}</p>
      ) : (
        <p className="text-sm text-gray-400 italic">No timeslot selected yet.</p>
      )}
    </section>
  );
}

