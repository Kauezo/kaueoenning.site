
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: GraduationCap,
      title: "Bachelor's in Software Engineering",
      subtitle: "UNIVILLE (2025 - In Progress)",
      description: "Focused on modern development practices and system architecture"
    },
    {
      icon: Award,
      title: "Technical Degree",
      subtitle: "Systems Development - SENAI (2022 - 2024)",
      description: "Comprehensive training in software development fundamentals"
    },
    // {
    //   icon: Calendar,
    //   title: "High School Graduate",
    //   subtitle: "SESI (2022 - 2024)",
    //   description: "Strong foundation in science and technology"
    // }
  ];

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Joinville, SC - Brazil" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer driven by innovation and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="border-gradient glow-hover transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a Full Stack Developer focused on modern web solutions and intelligent automations, 
                    I bring practical experience with cutting-edge technologies including Java, React, 
                    Node.js, and Python.
                  </p>
                  <p>
                    My expertise spans integrating Artificial Intelligence, working with databases, 
                    and n8n automations. I develop responsive, interactive, and efficient systems 
                    with a passion for innovation and continuous learning.
                  </p>
                  <p>
                    I thrive on solving challenging projects involving automation, AI, and 
                    technical creativity, always aiming to solve real-world problems with 
                    strategic use of AI and technical innovation.
                  </p>
                </div>

                {/* Personal Info */}
                <div className="mt-8 space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="text-primary" size={20} />
                      <span className="text-muted-foreground">{info.label}:</span>
                      <span className="text-foreground font-medium">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Achievements */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Education & Background</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="border-gradient hover:glow transition-all duration-300 transform hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <achievement.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-primary text-sm mb-2">
                          {achievement.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Strengths */}
            {/* <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Key Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Technical Innovation", 
                  "Continuous Learning",
                  "Team Collaboration",
                  "Project Management",
                  "Strategic Thinking"
                ].map((strength, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {strength}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
