
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "24/7 email support",
      "API access"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for growing businesses",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Advanced security"
    ],
    highlighted: true,
    buttonText: "Try Pro"
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "250GB storage",
      "Enterprise analytics",
      "24/7 phone support",
      "Advanced API access",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom onboarding"
    ],
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-purple-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-white/70 text-lg">Choose the plan that works best for your business with no hidden fees.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <Card 
                className={`card-hover h-full border-white/5 ${
                  tier.highlighted 
                    ? 'card-gradient shadow-xl ring-2 ring-primary' 
                    : 'bg-secondary/30 shadow-lg'
                }`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-white/70 ml-1">/month</span>
                  </div>
                  <p className="text-white/70 mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <Check size={16} className="text-green-400" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full btn-hover ${tier.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-white/60 animate-fade-in">
          <p>Need a custom plan? <a href="#contact" className="text-primary hover:underline">Contact us</a> for a personalized quote.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
