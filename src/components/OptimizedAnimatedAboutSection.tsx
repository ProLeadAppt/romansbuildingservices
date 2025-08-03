import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
const stoneWallBackground = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';
const minasWorkingImage = '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png';

export const OptimizedAnimatedAboutSection = () => {
  const achievements = [
    { icon: Award, title: '30+ Years Experience', desc: 'Industry-leading expertise since 1995' },
    { icon: Users, title: '1000+ Projects', desc: 'Completed across Greater Sydney' },
    { icon: Shield, title: 'Fully Licensed', desc: 'Insured & certified professionals' },
    { icon: Star, title: '5-Star Rating', desc: 'Consistent excellence & satisfaction' }
  ];

  const values = [
    'Personal inspection of every project',
    'Direct communication with the owner',
    '30-year reputation for excellence', 
    'Family business values & integrity',
    'Hands-on quality control',
    'Lifetime craftsmanship guarantee'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Stone Wall Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
        style={{ backgroundImage: `url(${stoneWallBackground})` }}
      />
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
              Minas has been personally dedicated to delivering the highest quality masonry and restoration work across Sydney. As a hands-on owner who inspects every project, Minas combines traditional craftsmanship with modern techniques to ensure exceptional results.
            </p>

            <div className="glass-morphism rounded-xl p-6 border-l-4 border-primary">
              <p className="text-foreground italic font-medium">
                "Quality isn't just our promise—it's my personal guarantee. Every project receives my direct attention because your satisfaction and the integrity of my family business depends on it."
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-semibold">— Minas Romanakis, Founder & Owner</p>
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
            <h3 className="text-xl font-semibold mb-4">Minas's Personal Commitment as Licensed Masonry Contractor:</h3>
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