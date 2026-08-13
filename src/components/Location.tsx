import React from 'react';
import { Section } from './Section';
import { MapPin, Navigation, Bus, Clock } from 'lucide-react';

export function Location() {
  return (
    <Section id="location" title="Our Location" className="bg-transparent">
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-brand-green-900 mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-brand-gold" />
              Find Us in Cooch Behar
            </h3>
            <p className="text-brand-text-muted text-lg leading-relaxed mb-6">
              Sitalkuchi High School is centrally located in Sitalkuchi block, Cooch Behar. Our campus is easily accessible and provides a safe, serene environment for our students.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-brand-gold/20 p-3 rounded-full mr-4 text-brand-green-800">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-green-900">Address</h4>
                <p className="text-brand-text-muted mt-1">
                  Sitalkuchi High School<br />
                  P.O. Sitalkuchi, Dist. Cooch Behar<br />
                  West Bengal, PIN - 736158
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-gold/20 p-3 rounded-full mr-4 text-brand-green-800">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-green-900">Transportation</h4>
                <p className="text-brand-text-muted mt-1">
                  Well-connected by local bus routes and auto-rickshaws from Mathabhanga and surrounding areas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-gold/20 p-3 rounded-full mr-4 text-brand-green-800">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-green-900">Visiting Hours</h4>
                <p className="text-brand-text-muted mt-1">
                  Monday to Friday: 10:30 AM - 4:30 PM<br />
                  Saturday: 10:30 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[400px] lg:h-full relative">
            {/* Embed Google Map iframe or use a static image representation if map not strictly available */}
            <img
              src="/images/270.jpg"
              alt="Sitalkuchi High School Location Map"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
