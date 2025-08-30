import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';

const courses = [
  {
    code: "CS 224N",
    title: "AI Ethics and Society",
    semester: "Spring 2024",
    level: "Graduate",
    description: "This course examines the ethical implications of artificial intelligence and machine learning systems, covering topics such as algorithmic bias, fairness, transparency, and accountability.",
    students: 45,
    hours: "3 credits",
    topics: ["AI Ethics", "Algorithmic Fairness", "Social Impact", "Policy"]
  },
  {
    code: "CS 147",
    title: "Human-Computer Interaction",
    semester: "Fall 2023",
    level: "Undergraduate",
    description: "Introduction to human-computer interaction principles and design methods, with focus on creating user-centered AI systems and interfaces.",
    students: 120,
    hours: "4 credits",
    topics: ["HCI", "User Research", "Interface Design", "Usability"]
  },
  {
    code: "CS 229",
    title: "Machine Learning for Social Good",
    semester: "Spring 2023",
    level: "Graduate",
    description: "Advanced machine learning techniques applied to social problems, including healthcare, education, and environmental sustainability.",
    students: 35,
    hours: "3 credits",
    topics: ["ML Applications", "Social Impact", "Data Science", "Ethics"]
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Courses
          </h1>
          <p className="text-lg text-gray-600">
            Teaching the next generation of responsible technologists
          </p>
        </div>

        <div className="grid gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-navy text-white">{course.code}</Badge>
                      <Badge className="bg-accent-gold text-white">{course.level}</Badge>
                      <Badge variant="outline" className="border-charcoal text-charcoal">
                        {course.semester}
                      </Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-4">
                      {course.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-navy" />
                    <span>{course.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-navy" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-5 h-5 mr-2 text-navy" />
                    <span>{course.topics.length} main topics</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.topics.map((topic, topicIndex) => (
                    <Badge 
                      key={topicIndex} 
                      variant="outline" 
                      className="border-navy text-navy"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Course Materials
                  </Button>
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    Syllabus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
