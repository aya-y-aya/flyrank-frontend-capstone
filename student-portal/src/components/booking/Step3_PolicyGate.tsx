'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step3_PolicyGate() {
  const { policyAccepted, setPolicyAccepted, availabilityId } = useBooking();

  return (
    <section aria-labelledby="step3-heading" className="space-y-4">
      <div>
        <span className="small-label text-foreground/70 block mb-0.5">
          Step 03
        </span>
        <h2 id="step3-heading" className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2]">
          Policy Agreement
        </h2>
        <p className="text-sm sm:text-base text-foreground/80 mt-1 leading-[1.5]">
          Please review and agree to our{' '}
          <a
            href="#cancellation-policy"
            className="text-primary hover:text-primary-hover underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              alert('Cancellation Policy: Cancellations are non-refundable. Rescheduling is permitted up to 24 hours in advance.');
            }}
          >
            cancellation & attendance policy
          </a>
          .
        </p>
      </div>

      <label
        className={`flex items-start sm:items-center space-x-3 p-3.5 sm:p-4 rounded-lg border transition-all duration-150 min-h-12 ${
          !availabilityId
            ? 'opacity-60 bg-stone-50 border-stone-200 cursor-not-allowed'
            : 'bg-white border-stone-200 hover:border-stone-300 cursor-pointer shadow-2xs'
        }`}
      >
        <input
          type="checkbox"
          checked={policyAccepted}
          disabled={!availabilityId}
          onChange={(e) => setPolicyAccepted(e.target.checked)}
          className="mt-0.5 sm:mt-0 h-4.5 w-4.5 rounded border-stone-300 accent-primary text-primary focus:ring-primary cursor-pointer disabled:cursor-not-allowed"
        />
        <span className="text-sm sm:text-base text-foreground leading-[1.5] select-none">
          I understand and agree to the no refund cancellation policy.
        </span>
      </label>

      {!availabilityId && (
        <p className="text-xs text-amber-700 font-medium">
          ⚠️ Please select a timeslot in Step 2 to unlock policy agreement.
        </p>
      )}
    </section>
  );
}
