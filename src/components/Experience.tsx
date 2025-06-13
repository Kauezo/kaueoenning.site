
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: "IT Intern",
      company: "Wela Vision",
      period: "2025 - Ongoing",
      location: "Joinville, SC",
      type: "Internship",
      description: "Provided technical support and maintenance of hardware and software systems.",
      responsibilities: [
        "Assisted in the implementation of technological solutions",
        "Optimized internal processes through automation",
        "Maintained and troubleshot IT infrastructure",
        "Collaborated with development teams"
      ],
      technologies: ["Technical Support", "Hardware Maintenance", "Software Troubleshooting", "Process Optimization"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20px' }
    );

    itemRefs.current.forEach(ref => {
      if (ref) itemObserver.observe(ref);
    });

    return () => itemObserver.disconnect();
  }, [isVisible]);

  return (
    <section id="experience" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Experience</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key contributions in the tech industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`relative mb-8 md:mb-12 transition-all duration-700 ${
                visibleItems[index] ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot - Only on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full border-4 border-background z-10 animate-pulse-glow"></div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-6 lg:pr-12' : 'md:ml-auto md:pl-6 lg:pl-12'}`}>
                <Card className="border-gradient glow-hover transition-all duration-300 transform hover:scale-[1.02] w-full">
                  <CardContent className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gradient mb-1">{exp.title}</h3>
                        <p className="text-lg lg:text-xl text-foreground font-medium">{exp.company}</p>
                      </div>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 self-start">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm lg:text-base">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm lg:text-base">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm lg:text-base">
                        <Briefcase size={16} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm lg:text-base">
                            <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm lg:text-base">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 text-xs lg:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 ${
          visibleItems.length > 0 ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <Card className="border-gradient glow-hover transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-gradient mb-4">Looking for New Opportunities</h3>
              <p className="text-muted-foreground mb-6 text-sm lg:text-base">
                I'm always excited to take on new challenges and contribute to innovative projects. 
                Let's connect and explore how we can work together!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-hover text-sm lg:text-base"
              >
                Get In Touch
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
