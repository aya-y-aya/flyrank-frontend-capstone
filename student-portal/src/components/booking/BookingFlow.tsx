'use client';

import React from 'react';
import { BookingProvider } from '@/context/BookingProvider';
import Step1_ServiceSelect from './Step1_ServiceSelect';
import Step2_TimePicker from './Step2_TimePicker';
import Step3_PolicyGate from './Step3_PolicyGate';
import Step4_Checkout from './Step4_Checkout';

export default function BookingFlow() {
  return (
    <BookingProvider>
      <div className="max-w-2xl mx-auto space-y-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <Step1_ServiceSelect />
        <Step2_TimePicker />
        <Step3_PolicyGate />
        <Step4_Checkout />
      </div>
    </BookingProvider>
  );
}

