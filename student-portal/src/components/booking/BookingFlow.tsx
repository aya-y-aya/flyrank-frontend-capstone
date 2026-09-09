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
      <div className="w-full max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto space-y-6 sm:space-y-8 bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-stone-200 box-border">
        <Step1_ServiceSelect />
        <Step2_TimePicker />
        <Step3_PolicyGate />
        <Step4_Checkout />
      </div>
    </BookingProvider>
  );
}
