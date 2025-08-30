import { Badge } from '@/components/ui/badge';
import { Brain, Users, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          {/* Enhanced professional headshot */}
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-12 rounded-full bg-gradient-to-br from-white to-light-gray border-4 border-white shadow-elegant-lg overflow-hidden ring-8 ring-white/50">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Dr. Sarah Chen - Professional headshot" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy mb-6 tracking-tight">
            Dr. Sarah Chen
          </h1>
          <p className="text-2xl md:text-3xl text-charcoal mb-4 font-light">
            Professor of Computer Science & Social Innovation
          </p>
          <p className="text-xl text-gray-600 mb-12 font-medium">Stanford University</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="gradient-navy text-white hover:shadow-elegant px-4 py-2 text-sm transform hover:scale-105 transition-all duration-200">
              <Brain className="w-5 h-5 mr-2" />
              AI & Society
            </Badge>
            <Badge className="gradient-accent text-white hover:shadow-elegant px-4 py-2 text-sm transform hover:scale-105 transition-all duration-200">
              <Users className="w-5 h-5 mr-2" />
              Human-Computer Interaction
            </Badge>
            <Badge className="bg-charcoal text-white hover:bg-gray-700 hover:shadow-elegant px-4 py-2 text-sm transform hover:scale-105 transition-all duration-200">
              <TrendingUp className="w-5 h-5 mr-2" />
              Computational Social Science
            </Badge>
          </div>
        </div>
        
        <div className="prose prose-xl max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
            Dr. Sarah Chen is a renowned researcher and educator working at the intersection of artificial intelligence, 
            social sciences, and engineering. Her groundbreaking work focuses on developing AI systems that are both 
            technically robust and socially beneficial, with particular emphasis on algorithmic fairness, human-centered 
            design, and the societal implications of emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
