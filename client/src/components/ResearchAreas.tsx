import { Card, CardContent } from '@/components/ui/card';
import { Brain, Handshake, Network } from 'lucide-react';

const researchAreas = [
  {
    icon: Brain,
    title: 'AI Ethics & Fairness',
    description: 'Developing frameworks for ethical AI deployment and addressing bias in machine learning systems across diverse social contexts.',
    bgColor: 'bg-navy'
  },
  {
    icon: Handshake,
    title: 'Human-AI Collaboration',
    description: 'Researching optimal interfaces and interaction patterns for seamless collaboration between humans and artificial intelligence systems.',
    bgColor: 'bg-accent-gold'
  },
  {
    icon: Network,
    title: 'Digital Social Networks',
    description: 'Analyzing the impact of digital platforms on social behavior, community formation, and information dissemination patterns.',
    bgColor: 'bg-charcoal'
  }
];

export function ResearchAreas() {
  return (
    <section className="bg-subtle-blue py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Research Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Exploring the convergence of technology and society through interdisciplinary research
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card key={index} className="bg-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-10 text-center">
                <div className={`w-20 h-20 ${area.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <area.icon className="text-white text-3xl w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
