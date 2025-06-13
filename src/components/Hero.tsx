import { useState, useEffect } from 'react';
import { ArrowDown, Download, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "AI Engineer", 
    "Software Architect",
    "Tech Innovator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-1/4 left-1/4' },
    { Icon: Database, delay: '1s', position: 'top-1/3 right-1/4' },
    { Icon: Brain, delay: '2s', position: 'bottom-1/3 left-1/3' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Tech Icons - Only on larger screens */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden xl:block pointer-events-none`}
          style={{ animationDelay: item.delay }}
        >
          <div className="animate-floating opacity-20 hover:opacity-40 transition-opacity duration-300">
            <item.Icon size={40} className="text-primary" />
          </div>
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Hello, I'm</span>
            <span className="block text-gradient">Kauê Oenning</span>
          </h1>
          
          <div className="h-12 sm:h-14 md:h-16 mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              <span className="inline-block transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          <p className={`text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            Passionate about modern web solutions and intelligent automations. 
            Focused on creating responsive, interactive, and efficient systems with 
            cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 transition-all duration-700 ${
            isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <a
              href="/KaueOenning-Curriculum.pdf"
              download
              className="inline-flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 text-sm md:text-base border rounded-lg px-6 py-3 font-medium"
            >
              <Download className="mr-2" size={18} />
              Download CV
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`animate-bounce mt-8 md:mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.9s' }}>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
