'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step4_Checkout() {
  const { selectedService, availabilityId, policyAccepted } = useBooking();

  const canProceed = Boolean(selectedService && availabilityId && policyAccepted);

  return (
    <section aria-labelledby="step4-heading" className="space-y-3 sm:space-y-4 pt-2 border-t border-gray-100">
      <div>
        <h2 id="step4-heading" className="text-lg sm:text-xl font-bold text-gray-900">
          4. Checkout & Confirmation
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          Confirm your selections and proceed to checkout.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <div className="text-xs sm:text-sm text-gray-600">
          {selectedService ? (
            <span>Total: <strong className="text-sm sm:text-base text-gray-900">₱{selectedService.base_price}</strong></span>
          ) : (
            <span className="italic text-gray-400">Total calculated upon service selection</span>
          )}
        </div>

        <button
          type="button"
          disabled={!canProceed}
          className="w-full sm:w-auto min-h-12 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-[0.99] flex items-center justify-center cursor-pointer shadow-xs"
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
}
