'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step4_Checkout() {
  const { selectedService, availabilityId, policyAccepted } = useBooking();

  const canProceed = Boolean(selectedService && availabilityId && policyAccepted);

  return (
    <section aria-labelledby="step4-heading" className="space-y-4">
      <h2 id="step4-heading" className="text-xl font-semibold text-gray-900">
        4. Checkout & Confirmation
      </h2>
      <p className="text-sm text-gray-500">
        Confirm your appointment and proceed to payment.
      </p>
      <button
        type="button"
        disabled={!canProceed}
        className="px-4 py-2 bg-blue-600 text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
      >
        Proceed to Payment
      </button>
    </section>
  );
}

