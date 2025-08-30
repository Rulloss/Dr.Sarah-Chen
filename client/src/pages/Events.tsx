import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Video, Clock } from 'lucide-react';

const events = [
  {
    title: "Keynote: The Future of Human-AI Collaboration",
    type: "Keynote Speech",
    date: "March 15, 2024",
    location: "MIT Conference Center, Cambridge, MA",
    event: "International Conference on AI and Society",
    attendees: "500+ attendees from 30+ countries",
    status: "past",
    description: "Exploring how we can design AI systems that augment human capabilities while preserving human agency and dignity."
  },
  {
    title: "Panel: Ethics in AI Development",
    type: "Panel Discussion",
    date: "April 22, 2024",
    location: "Stanford University, CA",
    event: "Stanford AI Ethics Symposium",
    attendees: "200+ industry professionals and academics",
    status: "upcoming",
    description: "Moderated panel discussion on implementing ethical guidelines in AI development processes."
  },
  {
    title: "Workshop: Bias Detection in ML Systems",
    type: "Workshop",
    date: "May 10, 2024",
    location: "Google AI, Mountain View, CA",
    event: "Google AI Ethics Workshop Series",
    attendees: "50 ML engineers and researchers",
    status: "upcoming",
    description: "Hands-on workshop covering practical techniques for identifying and mitigating bias in machine learning systems."
  },
  {
    title: "Invited Talk: AI for Social Good",
    type: "Invited Talk",
    date: "February 8, 2024",
    location: "UC Berkeley, CA",
    event: "Berkeley AI Research Seminar",
    attendees: "150+ students and faculty",
    status: "past",
    description: "Discussing how AI can be leveraged to address pressing social challenges and promote equity."
  }
];

export default function Events() {
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Events
          </h1>
          <p className="text-lg text-gray-600">
            Speaking engagements and academic events
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy mb-6">
            Upcoming Events
          </h2>
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-l-accent-gold">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-accent-gold text-white">{event.type}</Badge>
                        <Badge variant="outline" className="border-accent-gold text-accent-gold">
                          <Clock className="w-3 h-3 mr-1" />
                          Upcoming
                        </Badge>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-2">
                        {event.title}
                      </h3>
                      <p className="text-accent-gold font-medium mb-4">{event.event}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-accent-gold hover:bg-accent-gold/90 text-white">
                      Event Details
                    </Button>
                    <Button variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white">
                      Add to Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-navy mb-6">
            Past Events
          </h2>
          <div className="grid gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-l-navy">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-navy text-white">{event.type}</Badge>
                        <Badge variant="outline" className="border-charcoal text-charcoal">
                          <Calendar className="w-3 h-3 mr-1" />
                          {event.date}
                        </Badge>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-2">
                        {event.title}
                      </h3>
                      <p className="text-navy font-medium mb-4">{event.event}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2 text-navy" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-navy hover:bg-navy/90 text-white">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      Download Materials
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
