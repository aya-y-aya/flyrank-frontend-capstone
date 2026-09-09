'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step3_PolicyGate() {
  const { policyAccepted, setPolicyAccepted, availabilityId } = useBooking();

  return (
    <section aria-labelledby="step3-heading" className="space-y-3 sm:space-y-4">
      <div>
        <h2 id="step3-heading" className="text-lg sm:text-xl font-bold text-gray-900">
          3. Policy Agreement
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          Please review and agree to our no refund cancellation policy.
        </p>
      </div>

      <label
        className={`flex items-start sm:items-center space-x-3 p-3 sm:p-3.5 rounded-lg border transition-all min-h-12 ${
          !availabilityId
            ? 'opacity-60 bg-gray-50 border-gray-200 cursor-not-allowed'
            : 'bg-white border-gray-200 hover:border-gray-300 cursor-pointer'
        }`}
      >
        <input
          type="checkbox"
          checked={policyAccepted}
          disabled={!availabilityId}
          onChange={(e) => setPolicyAccepted(e.target.checked)}
          className="mt-0.5 sm:mt-0 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-xs sm:text-sm text-gray-700 leading-normal select-none">
          I understand and agree to the no refund cancellation policy.
        </span>
      </label>

      {!availabilityId && (
        <p className="text-xs text-amber-600 font-medium">
          ⚠️ Please select a timeslot in Step 2 to unlock policy agreement.
        </p>
      )}
    </section>
  );
}
