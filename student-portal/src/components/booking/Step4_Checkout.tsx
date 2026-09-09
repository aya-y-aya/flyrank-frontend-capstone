'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';
import Button from '@/components/ui/Button';

export default function Step4_Checkout() {
  const { selectedService, availabilityId, policyAccepted } = useBooking();

  const canProceed = Boolean(selectedService && availabilityId && policyAccepted);

  const handleConfirm = () => {
    alert(`Booking confirmed for ${selectedService?.serviceName}!`);
  };

  return (
    <section aria-labelledby="step4-heading" className="space-y-4 pt-4 border-t border-stone-200">
      <div>
        <span className="small-label text-foreground/70 block mb-0.5">
          Step 04
        </span>
        <h2 id="step4-heading" className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2]">
          Checkout & Confirmation
        </h2>
        <p className="text-sm sm:text-base text-foreground/80 mt-1 leading-[1.5]">
          Confirm your selections and proceed to complete your booking.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <div className="text-sm sm:text-base text-foreground">
          {selectedService ? (
            <span>
              Total: <strong className="text-base sm:text-lg text-foreground font-bold">₱{selectedService.base_price}</strong>
            </span>
          ) : (
            <span className="italic text-foreground/60">Total calculated upon service selection</span>
          )}
        </div>

        {/* Primary Action (#BE185D): Deep Magenta applied to primary buttons (e.g. Confirm Booking) */}
        <Button
          type="button"
          disabled={!canProceed}
          onClick={handleConfirm}
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
        >
          Confirm Booking
        </Button>
      </div>
    </section>
  );
}
