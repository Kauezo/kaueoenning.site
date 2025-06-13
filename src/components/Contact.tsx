import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaueoenning9@gmail.com",
      href: "mailto:kaueoenning9@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Joinville, SC - Brazil",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Kauezo",
      href: "https://github.com/Kauezo"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@kauê-oenning",
      href: "https://www.linkedin.com/in/kau%C3%AA-oenning-96a4702b6/"
    },
    {
      icon: Download,
      label: "Currículo",
      value: "Download CV",
      href: "/KaueOenning-Curriculum.pdf"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gradient mb-4">Kauê Oenning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer, AI Engineer, Software Architect, Tech Innovator<br/>
            Joinville, SC - Brazil
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="border-gradient glow-hover transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gradient mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground font-medium hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open('https://github.com/Kauezo', '_blank')}
                    >
                      <Github className="mr-2" size={16} />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open('https://www.linkedin.com/in/kau%C3%AA-oenning-96a4702b6/', '_blank')}
                    >
                      <Linkedin className="mr-2" size={16} />
                      LinkedIn
                    </Button>
                    <a
                      href="/KaueOenning-Curriculum.pdf"
                      download
                      className="inline-flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 text-xs border rounded-lg px-3 py-2 font-medium"
                    >
                      <Download className="mr-2" size={16} />
                      Download CV
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="border-gradient glow-hover transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gradient mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-hover transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border transition-all duration-700 delay-600 ${
          isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-muted-foreground">
            © 2025 Kauê Oenning. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
