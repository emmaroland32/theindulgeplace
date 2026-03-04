import { Suspense } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/ui/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact & Reservations',
  description: 'Reserve a table at BkCooks, inquire about The Boardroom or The Lounge, or send a general enquiry to The Indulge Place.',
  openGraph: {
    title: 'Contact & Reservations | The Indulge Place',
    description: 'Reserve a table or event space at The Indulge Place, Ogudu, Lagos.',
    images: [{ url: '/images/exterior.png', width: 1200, height: 630, alt: 'The Indulge Place' }],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <Section className="text-center max-w-3xl mx-auto" containerized={false}>
        <Container className="max-w-3xl">
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
            We&apos;d Love to <span className="italic text-gold">Hear From You</span>
          </h1>
          <p className="text-beige/70 text-lg leading-relaxed">
            Whether you&apos;re planning a reservation, a private event, or simply want to learn more,
            our team is ready to curate your perfect experience.
          </p>
        </Container>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-display text-gold mb-6">Visit Us</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-beige/90">24, Gerrad Street</p>
                    <p className="text-beige/60">Ogudu, Lagos</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-beige/90">Mon – Sun: 10:00 AM – 11:00 PM</p>
                    <p className="text-beige/60">BkCooks Kitchen closes at 10:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <a href="tel:+2348120000000" className="text-beige/90 hover:text-gold transition-colors">
                    +234 812 000 0000
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <a href="mailto:info@theindulgeplace.com" className="text-beige/90 hover:text-gold transition-colors break-all">
                    info@theindulgeplace.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full h-52 rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.578!2d3.3773!3d6.5881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3bc5c53a27%3A0x7c3d5bae4d2c82c6!2sOgudu%2C+Lagos!5e0!3m2!1sen!2sng!4v1645564800000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="opacity-60 hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 rounded-xl p-8 border border-white/5">
            <h2 className="text-2xl font-display text-gold mb-8">Send an Inquiry</h2>
            <Suspense fallback={<div className="text-beige/40 text-sm animate-pulse">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </div>
  );
}
