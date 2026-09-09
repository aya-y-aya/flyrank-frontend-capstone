'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';
import { Service } from '@/types/booking';

const AVAILABLE_SERVICES: Service[] = [
  {
    serviceId: 1,
    serviceName: 'TOPIK I Review',
    categoryId: 1,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Personalized private review session on TOPIK I Review.',
  },
  {
    serviceId: 2,
    serviceName: 'TOPIK II Review',
    categoryId: 1,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Personalized private review session on TOPIK I Review.',
  },
  {
    serviceId: 3,
    serviceName: 'Grammar Class',
    categoryId: 2,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Personalized private review session on Korean Grammar.',
  },
];

export default function Step1_ServiceSelect() {
  const { selectedService, setSelectedService } = useBooking();

  return (
    <section aria-labelledby="step1-heading" className="space-y-3 sm:space-y-4">
      <div>
        <h2 id="step1-heading" className="text-lg sm:text-xl font-bold text-gray-900">
          1. Select a Service
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          Choose the training session you would like to book.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {AVAILABLE_SERVICES.map((service) => {
          const isSelected = selectedService?.serviceId === service.serviceId;
          return (
            <button
              key={service.serviceId}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col justify-between min-h-24 cursor-pointer ${
                isSelected
                  ? 'border-blue-600 bg-blue-50/70 shadow-xs ring-2 ring-blue-600/20'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
              }`}
            >
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-900 leading-snug">
                  {service.serviceName}
                </p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {service.description}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">Starting from</span>
                <span className="text-sm sm:text-base font-bold text-blue-600">
                  ₱{service.base_price}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
