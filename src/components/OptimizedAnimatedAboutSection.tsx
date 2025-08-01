import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
const minasWorkingImage = '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png';

export const OptimizedAnimatedAboutSection = () => {
  const achievements = [
    { icon: Award, title: '25+ Years Experience', desc: 'Industry-leading expertise since 1995' },
    { icon: Users, title: '1000+ Projects', desc: 'Completed across Greater Sydney' },
    { icon: Shield, title: 'Fully Licensed', desc: 'Insured & certified professionals' },
    { icon: Star, title: '5-Star Rating', desc: 'Consistent excellence & satisfaction' }
  ];

  const values = [
    'Prevent 30% annual cost increases',
    'Save $15,000+ through early action',
    'Protect your property value investment', 
    '2-hour emergency response guarantee',
    'Catch expensive problems before they escalate',
    'Since 1995 - trusted cost-saving expertise'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 construction-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Meet <span className="gradient-text">Minas Romanakis</span>, Our Founder
            </h2>
            
            <p className="text-lg text-muted-foreground mb-4">
              Since 1995, Minas has saved Sydney property owners millions in avoided damage costs. His early intervention approach prevents 30% annual cost increases and protects property values. With 2025's new building standards, his expertise is more valuable than ever.
            </p>

            <div className="glass-morphism rounded-xl p-6 border-l-4 border-primary">
              <p className="text-foreground italic font-medium">
                "I've seen too many property owners lose $50,000+ because they waited. My job is to catch problems early and save you money. Every hour you delay costs you more—that's why I guarantee 2-hour emergency response."
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-semibold">— Minas Romanakis, Founder & Cost-Saving Expert</p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group hover-scale"
              >
                <Card className="h-full hover-glow transition-smooth">
                  <CardContent className="p-6 text-center space-y-3">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Values List */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Minas's Personal Commitment to You:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl floating-shadow">
            <img
              src={minasWorkingImage}
              alt="Minas Romanakis working hands-on with masonry restoration"
              className="w-full h-[500px] object-cover hover-scale will-change-transform"
              loading="lazy"
              width={600}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute top-6 right-6 glass-morphism rounded-xl p-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years</div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 glass-morphism rounded-xl p-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">Personal</div>
                <div className="text-sm opacity-90">Guarantee</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};