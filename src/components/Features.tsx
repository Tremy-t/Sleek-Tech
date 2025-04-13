
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, BarChart, Code, Users, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <Card className="card-gradient card-hover border-white/5 shadow-lg overflow-hidden h-full"
    style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-6">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </CardContent>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-purple-400" size={24} />,
      title: "Lightning Fast",
      description: "Experience unparalleled speed with our optimized platform that loads in milliseconds."
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: "Bank-Level Security",
      description: "Rest easy knowing your data is protected with military-grade encryption protocols."
    },
    {
      icon: <BarChart className="text-indigo-400" size={24} />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our comprehensive analytics dashboard and reporting tools."
    },
    {
      icon: <Code className="text-purple-400" size={24} />,
      title: "Developer Friendly",
      description: "Built with developers in mind, featuring extensive API documentation and SDKs."
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that help your team work together efficiently."
    },
    {
      icon: <Globe className="text-indigo-400" size={24} />,
      title: "Global Infrastructure",
      description: "Deployed across multiple regions worldwide for reliable access and low latency."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[20%] w-64 h-64 bg-purple-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[30%] w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-white/70 text-lg">Our platform is packed with cutting-edge features designed to transform your digital experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in">
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
