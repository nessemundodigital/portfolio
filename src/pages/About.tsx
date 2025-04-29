import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ChevronRight, Download, Award, Clock, Users, Coffee } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About Me - Alex Design';
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I'm a passionate graphic designer and app developer dedicated to creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Portrait of Alex, graphic designer and app developer" 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                      <div className="font-bold text-lg">8+ Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Hello, I'm Alex</h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a graphic designer and app developer with over 8 years of experience creating digital solutions for clients around the world. My passion lies in creating visually stunning and functional designs that help businesses succeed.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I specialize in brand identity, UI/UX design, mobile app development, and web applications. My approach combines creativity with technical expertise to deliver solutions that not only look beautiful but also perform exceptionally well.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                When I'm not designing or coding, you can find me exploring new design trends, experimenting with emerging technologies, or sharing my knowledge through blog posts and tutorials.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button icon={<ChevronRight size={18} />} iconPosition="right">
                    Let's Work Together
                  </Button>
                </Link>
                
                <Button variant="outline" icon={<Download size={18} />}>
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full text-primary mb-4">
                <Award size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary mb-4">
                <Users size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">65+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/10 p-4 rounded-full text-accent mb-4">
                <Clock size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-warning/10 p-4 rounded-full text-warning mb-4">
                <Coffee size={24} />
              </div>
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Cups of Coffee</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              I've developed expertise in various areas of design and development over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-6">Design Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">UI/UX Design</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Brand Identity</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Illustration</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Motion Graphics</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Development Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">React / React Native</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">HTML/CSS/JavaScript</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Swift / SwiftUI</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}