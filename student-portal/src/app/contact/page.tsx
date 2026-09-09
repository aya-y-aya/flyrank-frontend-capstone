import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-6 sm:py-10 xl:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center box-border">
      <div className="w-full max-w-lg xl:max-w-xl mx-auto">
        <ContactForm />
      </div>
    </main>
  );
}
