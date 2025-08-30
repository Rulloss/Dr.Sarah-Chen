import { Hero } from '@/components/Hero';
import { ResearchAreas } from '@/components/ResearchAreas';
import { FeaturedPublication } from '@/components/FeaturedPublication';
import { RecentEvent } from '@/components/RecentEvent';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ResearchAreas />
      <FeaturedPublication />
      <RecentEvent />
      <ContactSection />
    </div>
  );
}
