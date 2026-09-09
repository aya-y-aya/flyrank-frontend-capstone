'use client';

import React from 'react';
import { useBooking } from '@/context/BookingProvider';
import { Service } from '@/types/booking';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

const AVAILABLE_SERVICES: (Service & { tag?: string })[] = [
  {
    serviceId: 1,
    serviceName: 'TOPIK I Review',
    categoryId: 1,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Personalized private review session on TOPIK I Review.',
    tag: 'Beginner',
  },
  {
    serviceId: 2,
    serviceName: 'TOPIK II Review',
    categoryId: 1,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Intensive prep covering advanced grammar, reading, and listening.',
    tag: 'Advanced',
  },
  {
    serviceId: 3,
    serviceName: 'Grammar Class',
    categoryId: 2,
    isActive: true,
    pricing_model: 'FIXED',
    base_price: 600,
    description: 'Personalized private review session on essential Korean grammar.',
    tag: 'Core Skill',
  },
];

const FREE_CONSULTATION_SERVICE: Service & { tag?: string } = {
  serviceId: 99,
  serviceName: 'Free 30-Min Consultation',
  categoryId: 99,
  isActive: true,
  pricing_model: 'FIXED',
  base_price: 0,
  description: 'Complimentary 30-minute introductory consultation to assess your Korean level.',
  tag: 'Free Trial',
};

export default function Step1_ServiceSelect() {
  const { selectedService, setSelectedService } = useBooking();

  const handleSelectFreeConsultation = () => {
    setSelectedService(FREE_CONSULTATION_SERVICE);
  };

  return (
    <section aria-labelledby="step1-heading" className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="small-label text-foreground/70 block mb-0.5">
            Step 01
          </span>
          <h2 id="step1-heading" className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2]">
            Select a Service
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 mt-1 leading-[1.5]">
            Choose the training session you would like to book.
          </p>
        </div>

        {/* Conditional Secondary Action: Soft Lavender (#A855F7, active #7E22CE) */}
        <div>
          <Button
            type="button"
            variant="secondary-soft"
            size="sm"
            onClick={handleSelectFreeConsultation}
            className="w-full sm:w-auto"
            aria-label="Book Free 30-Min Consultation"
          >
            ✦ Book Free 30-Min Consultation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {AVAILABLE_SERVICES.map((service) => {
          const isSelected = selectedService?.serviceId === service.serviceId;
          return (
            <button
              key={service.serviceId}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`text-left p-4 rounded-xl border transition-all duration-150 flex flex-col justify-between min-h-28 cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary-light/60 shadow-xs ring-2 ring-primary/20'
                  : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="font-bold text-base text-foreground leading-snug">
                    {service.serviceName}
                  </p>
                  {service.tag && (
                    <Tag variant="secondary">
                      {service.tag}
                    </Tag>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-foreground/75 leading-[1.5] line-clamp-2">
                  {service.description}
                </p>
              </div>

              <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-stone-100">
                <span className="small-label text-foreground/70">
                  Starting from
                </span>
                <span className="text-base font-bold text-primary">
                  ₱{service.base_price}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedService?.serviceId === FREE_CONSULTATION_SERVICE.serviceId && (
        <div className="p-3.5 rounded-lg bg-secondary-light border border-secondary-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tag variant="secondary">Selected</Tag>
            <span className="text-sm font-semibold text-foreground">
              {FREE_CONSULTATION_SERVICE.serviceName} (₱0)
            </span>
          </div>
          <span className="small-label text-secondary font-semibold">
            30 MIN FREE
          </span>
        </div>
      )}
    </section>
  );
}
