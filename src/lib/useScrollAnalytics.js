import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// Tracks when each major section enters the viewport.
// Each section fires once per page load to avoid duplicate events.
const SECTIONS = [
  { id: 'top',          event: 'section_hero_viewed' },
  { id: 'walkin',       event: 'section_walkin_viewed' },
  { id: 'specialties',  event: 'section_specialties_viewed' },
  { id: 'doctors',      event: 'section_doctors_viewed' },
  { id: 'services',     event: 'section_services_viewed' },
  { id: 'why',          event: 'section_whychoose_viewed' },
  { id: 'reviews',      event: 'section_testimonials_viewed' },
  { id: 'book',         event: 'section_booking_viewed' },
];

export default function useScrollAnalytics() {
  useEffect(() => {
    const observed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (observed.has(id)) return;
          observed.add(id);
          const section = SECTIONS.find((s) => s.id === id);
          if (section) track(section.event);
        });
      },
      { threshold: 0.25 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
