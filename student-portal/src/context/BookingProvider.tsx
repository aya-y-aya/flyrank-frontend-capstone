'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service } from '@/types/booking';

interface BookingContextType {
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
  availabilityId: number | null;
  setAvailability: (id: number | null) => void;
  policyAccepted: boolean;
  setPolicyAccepted: (accepted: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [availabilityId, setAvailabilityId] = useState<number | null>(null);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // By bundling these two state mutations into a single action, the second a user clicks a new calendar slot,
  // the "Proceed to Payment" button on Step 3 instantly disables itself.
  const setAvailability = (id: number | null) => {
    setAvailabilityId(id);
    setPolicyAccepted(false);
  };

  return (
    <BookingContext.Provider
      value={{
        selectedService,
        setSelectedService,
        availabilityId,
        setAvailability,
        policyAccepted,
        setPolicyAccepted,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextType {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}