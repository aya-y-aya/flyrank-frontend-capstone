'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';

export default function Step1_ServiceSelect() {
  const { selectedService } = useBooking();

  return (
    <section aria-labelledby="step1-heading" className="space-y-4">
      <h2 id="step1-heading" className="text-xl font-semibold text-gray-900">
        1. Select a Service
      </h2>
      <p className="text-sm text-gray-500">
        Choose the service you would like to book.
      </p>
      {selectedService ? (
        <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
          <p className="font-medium text-blue-900">{selectedService.serviceName}</p>
          <p className="text-sm text-blue-700">${selectedService.base_price}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic">No service currently selected.</p>
      )}
    </section>
  );
}

