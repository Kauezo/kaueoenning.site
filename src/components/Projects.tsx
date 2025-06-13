import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye, Code } from 'lucide-react';

const Projects = () => {
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

  // Placeholder projects - you can add your own projects here
  const projects = [
    {
      title: "Work List",
      description: "Lista de tarefas desenvolvida com Vue.js, oferecendo uma interface gráfica moderna e funcionalidades básicas de gerenciamento de tarefas. Projeto que demonstra habilidades em desenvolvimento desktop com Vue.",
      technologies: ["Vue", "Vue Router", "Vuex"],
      image: "/work-list.png",
      category: "Web Development",
      githubUrl: "https://github.com/Kauezo/works-list-vue",
      liveUrl: "https://kauezo.github.io/works-list-vue/",
      featured: true,
    },
    {
      title: "Quadro Kanban",
      description: "Dashboard de gerenciamento de tarefas desenvolvido com React e JavaScript. Permite criar, mover e organizar tarefas em diferentes colunas (To Do, In Progress, Done). Interface intuitiva e responsiva..",
      image: "/kanban-board.png", 
      technologies: ["React", "TypeScript", "Css"],
      category: "Full Stack",
      githubUrl: "https://github.com/Kauezo/Quadro-Kanban",
      liveUrl: "https://kauezo.github.io/Quadro-Kanban/",
      featured: true
    },
    {
      title: "Mini Blog",
      description: "Desenvolvimento de um site responsivo e funcional que permite aos usuários postar fotos. Utilização de React, Firebase e MongoDB para criação do projeto.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node", "Firebase", "Css"],
      category: "Web Development",
      githubUrl: "https://github.com/Kauezo/Mini-Blog",
      liveUrl: "https://kauezo.github.io/Mini-Blog/",
      featured: false
    },
    
  ];

  const categories = ["All", "Web Development", "Full Stack", "Mobile", "Automation"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground glow' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group border-gradient overflow-hidden transition-all duration-700 delay-${index * 100} transform hover:scale-[1.02] glow-hover ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary/40">
                      <Code size={48} />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <Eye className="mr-2" size={16} />
                    Preview
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                {/* Project Info */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={14} />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="border-gradient glow-hover transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects and opportunities. 
                Let's build something amazing together!
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
