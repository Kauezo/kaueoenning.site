
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Brain, Settings, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                setTimeout(() => {
                  setAnimatedProgress(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                  }));
                }, Math.random() * 1000);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      color: "text-green-400",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 82 },
        { name: "Python", level: 78 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      title: "AI & Automations",
      icon: Brain,
      color: "text-purple-400",
      skills: [
        { name: "n8n", level: 88 },
        { name: "AI Agents", level: 85 },
        { name: "Intelligent Integrations", level: 80 },
        { name: "Workflow Automation", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-yellow-400", 
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Supabase", level: 75 },
        { name: "Baserow", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "text-red-400",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Microsoft Office", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Cursor", level: 80 },
        { name: "Lovable", level: 85 },
        { name: "IDEA", level: 78 }
      ]
    }
  ];

  const languages = [
    { name: "Portuguese", level: "Native", flag: "🇧🇷" },
    { name: "English", level: "Advanced", flag: "🇺🇸" },
    { name: "Spanish", level: "Basic", flag: "🇪🇸" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across modern development stack and emerging technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`border-gradient glow-hover transition-all duration-700 delay-${index * 100} transform hover:scale-[1.02] ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <category.icon className={`${category.color}`} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={animatedProgress[skill.name] || 0} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <Card className={`border-gradient glow-hover transition-all duration-700 delay-600 max-w-2xl mx-auto mb-12 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gradient">Languages</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                >
                  <div className="text-4xl mb-2">{lang.flag}</div>
                  <h4 className="font-semibold text-foreground mb-1">{lang.name}</h4>
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary"
                  >
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className={`text-center transition-all duration-700 delay-800 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="border-gradient glow-hover transition-all duration-300 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Certifications & Learning</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Spring Boot (Udemy)",
                  "Java (Udemy)", 
                  "Vue (Udemy)",
                  "React with Hooks and API (Udemy)",
                  "Python with Math (UDESC)",
                  "AI & Automations (Builders)",
                  "TOEIC - English",
                  "Advanced Excel (Udemy)"
                ].map((cert, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 py-2"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
