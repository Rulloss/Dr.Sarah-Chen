import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            About Dr. Sarah Chen
          </h1>
          <p className="text-lg text-gray-600">
            Academic journey and research philosophy
          </p>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                Academic Background
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Sarah Chen received her Ph.D. in Computer Science from MIT in 2015, where she 
                  specialized in artificial intelligence and human-computer interaction. Her doctoral 
                  dissertation, "Ethical Frameworks for AI Decision-Making Systems," laid the foundation 
                  for her continued research in AI ethics and fairness.
                </p>
                <p>
                  Prior to joining Stanford University as a Professor in 2020, Dr. Chen served as an 
                  Assistant Professor at UC Berkeley and held research positions at Google AI and 
                  Microsoft Research. Her interdisciplinary approach combines technical expertise 
                  in machine learning with deep insights from social sciences and ethics.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                Research Philosophy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  My research is guided by the belief that artificial intelligence should serve 
                  humanity's best interests while respecting human dignity and promoting social 
                  justice. I advocate for a human-centered approach to AI development that 
                  considers the broader societal implications of technological advancement.
                </p>
                <p>
                  Through my work, I strive to bridge the gap between technical innovation and 
                  ethical responsibility, ensuring that AI systems are not only powerful but 
                  also fair, transparent, and accountable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-navy mb-4">
                Awards & Recognition
              </h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-accent-gold text-white">NSF CAREER Award</Badge>
                  <Badge className="bg-navy text-white">ACM Fellow</Badge>
                  <Badge className="bg-charcoal text-white">MIT Technology Review Innovator</Badge>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2023: ACM SIGCHI Outstanding Contribution Award</li>
                  <li>• 2022: NSF CAREER Award for AI Ethics Research</li>
                  <li>• 2021: MIT Technology Review Innovator Under 35</li>
                  <li>• 2020: Google AI Ethics Research Award</li>
                  <li>• 2019: Best Paper Award, International Conference on AI and Society</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
