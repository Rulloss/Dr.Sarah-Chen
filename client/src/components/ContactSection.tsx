import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Info, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'wouter';

export function ContactSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Interested in collaboration or have questions about my research?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-light-gray">
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-bold text-navy mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-navy mr-3" />
                  <span className="text-charcoal">s.chen@stanford.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-navy mr-3" />
                  <span className="text-charcoal">+1 (650) 723-2300</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-navy mr-3 mt-1" />
                  <span className="text-charcoal">
                    Gates Computer Science Building<br />
                    Stanford University, CA 94305
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-serif font-bold text-navy mb-4">
                  Office Hours
                </h4>
                <p className="text-charcoal mb-2">Tuesdays & Thursdays</p>
                <p className="text-gray-600">2:00 PM - 4:00 PM</p>
                <p className="text-sm text-gray-500 mt-2 flex items-center">
                  <Info className="w-4 h-4 mr-1" />
                  By appointment only
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-light-gray">
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-bold text-navy mb-6">
                Connect Online
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Linkedin className="text-navy text-xl mr-3 w-6 h-6" />
                  <span className="text-charcoal font-medium">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Twitter className="text-navy text-xl mr-3 w-6 h-6" />
                  <span className="text-charcoal font-medium">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="text-navy text-xl mr-3 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-charcoal font-medium">Scholar</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <svg className="text-navy text-xl mr-3 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span className="text-charcoal font-medium">ORCID</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
