'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step3_PolicyGate() {
  const { policyAccepted, setPolicyAccepted, availabilityId } = useBooking();

  return (
    <section aria-labelledby="step3-heading" className="space-y-4">
      <h2 id="step3-heading" className="text-xl font-semibold text-gray-900">
        3. Policy Agreement
      </h2>
      <p className="text-sm text-gray-500">
        Please review and agree to our cancellation and rescheduling policies.
      </p>
      <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          checked={policyAccepted}
          disabled={!availabilityId}
          onChange={(e) => setPolicyAccepted(e.target.checked)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span>I agree to the booking and cancellation policy</span>
      </label>
      {!availabilityId && (
        <p className="text-xs text-amber-600">Please select a time slot in Step 2 first.</p>
      )}
    </section>
  );
}

