import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Quote } from 'lucide-react';

export function FeaturedPublication() {
  return (
    <section className="bg-warm-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Featured Publication
          </h2>
          <p className="text-xl text-gray-600 font-light">Recent work advancing the field</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-16 shadow-elegant-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0 w-full md:w-56">
              <div className="w-full h-72 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-elegant overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                  alt="Academic journal cover featuring AI and ethics research" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <Badge className="gradient-navy text-white hover:shadow-elegant mb-4 px-4 py-2">
                  Nature Machine Intelligence
                </Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6 leading-tight">
                "Towards Inclusive AI: A Framework for Bias Detection and Mitigation in Large Language Models"
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                This groundbreaking study presents a comprehensive framework for identifying and addressing 
                bias in large language models, with particular focus on social justice implications and 
                practical implementation strategies for more equitable AI systems.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200 px-3 py-1">
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200 px-3 py-1">
                  AI Ethics
                </Badge>
                <Badge variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-200 px-3 py-1">
                  Social Justice
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-navy hover:shadow-elegant text-white px-6 py-3 text-lg transform hover:scale-105 transition-all duration-200">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Publication
                </Button>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-6 py-3 text-lg transform hover:scale-105 transition-all duration-200">
                  <Quote className="w-5 h-5 mr-2" />
                  Cite This Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
