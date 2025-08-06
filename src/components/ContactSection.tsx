import { ContactList } from "./ContactList";
import { SocialMedia } from "./SocialMedia";

export function ContactSection() {
  return (
    <section className='bg-white rounded-lg shadow-md shadow-amber-50 p-6 space-y-4'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>
        Entre em Contato
      </h2>
      <ContactList />
      <div className='mt-6 pt-4 border-t border-gray-200'>
        <SocialMedia />
      </div>
    </section>
  );
}
