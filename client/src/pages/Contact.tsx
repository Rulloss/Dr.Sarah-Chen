import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Info, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', reason: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      reason: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch for collaboration opportunities or questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
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

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-serif font-bold text-navy mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-charcoal font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-charcoal font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="reason" className="text-charcoal font-medium">
                    Reason for Contact
                  </Label>
                  <Select value={formData.reason} onValueChange={handleSelectChange}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a reason for your message..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research-collaboration">Research Collaboration</SelectItem>
                      <SelectItem value="speaking-engagement">Speaking Engagement</SelectItem>
                      <SelectItem value="academic-consultation">Academic Consultation</SelectItem>
                      <SelectItem value="student-inquiry">Student Inquiry</SelectItem>
                      <SelectItem value="media-interview">Media Interview</SelectItem>
                      <SelectItem value="partnership-opportunity">Partnership Opportunity</SelectItem>
                      <SelectItem value="conference-invitation">Conference Invitation</SelectItem>
                      <SelectItem value="funding-opportunity">Funding Opportunity</SelectItem>
                      <SelectItem value="peer-review">Peer Review Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-charcoal font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-charcoal font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-navy hover:bg-navy/90 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
