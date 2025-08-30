import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Users, Calendar } from 'lucide-react';

const projects = [
  {
    title: "FairML Toolkit",
    type: "Open Source Software",
    status: "Active",
    funding: "NSF Grant #2021-45678",
    duration: "2022 - 2025",
    description: "A comprehensive Python toolkit for detecting and mitigating bias in machine learning models, with particular focus on fairness across different demographic groups.",
    collaborators: ["UC Berkeley", "MIT", "Google AI"],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
    impact: "Downloaded 50,000+ times, used by 200+ organizations worldwide"
  },
  {
    title: "AI Ethics in Healthcare",
    type: "Research Project",
    status: "Active",
    funding: "NIH Grant #HL-2023-001",
    duration: "2023 - 2026",
    description: "Investigating ethical considerations and bias detection in AI-powered medical diagnosis systems, with focus on ensuring equitable healthcare outcomes across diverse populations.",
    collaborators: ["Stanford Medical School", "Johns Hopkins", "Mayo Clinic"],
    technologies: ["Deep Learning", "Medical Imaging", "NLP", "Clinical Data"],
    impact: "3 publications, 2 patent applications, pilot deployment in 5 hospitals"
  },
  {
    title: "Democratic AI Platform",
    type: "Policy Initiative",
    status: "Completed",
    funding: "Democracy Fund Grant",
    duration: "2021 - 2023",
    description: "Development of AI systems for supporting democratic processes, including automated fact-checking, bias detection in political content, and tools for civic engagement.",
    collaborators: ["MIT Center for Collective Intelligence", "Harvard Kennedy School"],
    technologies: ["NLP", "Web Technologies", "Blockchain", "Data Analytics"],
    impact: "Influenced 3 policy papers, implemented in 2 pilot cities"
  },
  {
    title: "Human-AI Collaboration Lab",
    type: "Research Infrastructure",
    status: "Active",
    funding: "Stanford Internal Grant",
    duration: "2020 - ongoing",
    description: "State-of-the-art laboratory for studying human-AI interaction patterns, featuring advanced eye-tracking, brain imaging, and behavioral analysis capabilities.",
    collaborators: ["Stanford Psychology Dept", "Stanford Design School"],
    technologies: ["Eye Tracking", "EEG", "VR/AR", "Behavioral Analytics"],
    impact: "15+ publications, 50+ student researchers trained"
  }
];

export default function Projects() {
  const activeProjects = projects.filter(project => project.status === 'Active');
  const completedProjects = projects.filter(project => project.status === 'Completed');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600">
            Research initiatives and collaborative endeavors
          </p>
        </div>

        {/* Active Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy mb-6">
            Active Projects
          </h2>
          <div className="grid gap-8">
            {activeProjects.map((project, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-l-accent-gold">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-accent-gold text-white">{project.type}</Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-300">
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.funding}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Duration</h4>
                      <p className="text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.duration}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Collaborators</h4>
                      <p className="text-gray-600 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {project.collaborators.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-navy text-navy"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-light-gray p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-navy mb-2">Impact</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-accent-gold hover:bg-accent-gold/90 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-navy mb-6">
            Completed Projects
          </h2>
          <div className="grid gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-l-navy">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-navy text-white">{project.type}</Badge>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-300">
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.funding}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Duration</h4>
                      <p className="text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.duration}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Collaborators</h4>
                      <p className="text-gray-600 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {project.collaborators.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-navy text-navy"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-light-gray p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-navy mb-2">Impact</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-navy hover:bg-navy/90 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Results
                    </Button>
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      Final Report
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
