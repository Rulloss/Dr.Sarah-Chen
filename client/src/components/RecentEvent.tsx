import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Video, Download } from 'lucide-react';

export function RecentEvent() {
  return (
    <section className="bg-subtle-blue py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
            Recent Event
          </h2>
          <p className="text-xl text-gray-600 font-light">Sharing insights with the academic community</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-16 shadow-elegant-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <div className="mb-6">
                <Badge className="gradient-accent text-white hover:shadow-elegant mb-4 px-4 py-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  March 15, 2024
                </Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6 leading-tight">
                Keynote: "The Future of Human-AI Collaboration"
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                Delivered the opening keynote at the International Conference on AI and Society, 
                exploring how we can design AI systems that augment human capabilities while 
                preserving human agency and dignity.
              </p>
              
              <div className="mb-8 space-y-4">
                <p className="text-gray-600 flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-3 text-accent-gold" />
                  MIT Conference Center, Cambridge, MA
                </p>
                <p className="text-gray-600 flex items-center text-lg">
                  <Users className="w-5 h-5 mr-3 text-accent-gold" />
                  Over 500 attendees from 30+ countries
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-accent hover:shadow-elegant text-white px-6 py-3 text-lg transform hover:scale-105 transition-all duration-200">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Recording
                </Button>
                <Button variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-6 py-3 text-lg transform hover:scale-105 transition-all duration-200">
                  <Download className="w-5 h-5 mr-2" />
                  Download Slides
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-96">
              <div className="w-full h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-elegant overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Dr. Chen delivering keynote speech at AI conference with audience" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
