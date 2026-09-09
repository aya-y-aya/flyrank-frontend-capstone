import BookingFlow from '@/components/booking/BookingFlow';

export default async function BookingPage() {
  return (
    <main className="min-h-screen bg-background py-6 sm:py-10 xl:py-16 px-4 sm:px-6 lg:px-8 box-border">
      <div className="max-w-4xl xl:max-w-5xl mx-auto">
        <header className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl xl:text-[32px] font-bold text-foreground leading-[1.2] tracking-tight">
            Select a Korean Language Service
          </h1>
          <p className="text-base text-foreground/90 mt-2 max-w-xl mx-auto leading-[1.5]">
            Book private mentorship sessions and exam preparation with a verified instructor.
          </p>
        </header>

        <BookingFlow />
      </div>
    </main>
  );
}