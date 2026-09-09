import BookingFlow from '@/components/booking/BookingFlow';

export default async function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl text-black font-bold text-center mb-8">Select a Service</h1>
      <BookingFlow />
    </main>
  );
}