import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Quote, Calendar } from 'lucide-react';

const publications = [
  {
    title: "Towards Inclusive AI: A Framework for Bias Detection and Mitigation in Large Language Models",
    journal: "Nature Machine Intelligence",
    year: "2024",
    authors: "S. Chen, M. Rodriguez, K. Patel, J. Thompson",
    abstract: "This study presents a comprehensive framework for identifying and addressing bias in large language models, with particular focus on social justice implications and practical implementation strategies.",
    tags: ["Machine Learning", "AI Ethics", "Social Justice"],
    type: "Journal Article"
  },
  {
    title: "Human-AI Collaboration in Creative Problem Solving: A Cognitive Science Perspective",
    journal: "Journal of Human-Computer Interaction",
    year: "2023",
    authors: "S. Chen, A. Kumar, L. Williams",
    abstract: "An empirical study examining how humans and AI systems can collaborate effectively in creative problem-solving tasks, with implications for interface design and cognitive augmentation.",
    tags: ["HCI", "Creativity", "Collaboration"],
    type: "Journal Article"
  },
  {
    title: "Algorithmic Fairness in Social Media: Challenges and Solutions",
    journal: "Proceedings of the International Conference on Web and Social Media",
    year: "2023",
    authors: "S. Chen, R. Johnson, M. Lee",
    abstract: "This paper explores the challenges of ensuring algorithmic fairness in social media platforms and proposes novel solutions for bias mitigation in recommendation systems.",
    tags: ["Social Media", "Fairness", "Algorithms"],
    type: "Conference Paper"
  },
  {
    title: "The Ethics of AI in Healthcare: A Multidisciplinary Approach",
    journal: "AI & Society",
    year: "2022",
    authors: "S. Chen, D. Martinez, P. Singh, K. Brown",
    abstract: "A comprehensive analysis of ethical considerations in AI healthcare applications, combining perspectives from computer science, medicine, and philosophy.",
    tags: ["Healthcare", "Ethics", "AI"],
    type: "Journal Article"
  }
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Publications
          </h1>
          <p className="text-lg text-gray-600">
            Research contributions to the field
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-navy text-white">{pub.type}</Badge>
                      <Badge variant="outline" className="border-accent-gold text-accent-gold">
                        <Calendar className="w-3 h-3 mr-1" />
                        {pub.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-navy mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-accent-gold font-medium mb-4">{pub.journal}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {pub.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="border-navy text-navy"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-navy hover:bg-navy/90 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Full Paper
                  </Button>
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    <Quote className="w-4 h-4 mr-2" />
                    Cite This Work
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
