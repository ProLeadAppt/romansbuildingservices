import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import minasWorkingImage from '@/assets/minas-working.jpg';

export const AnimatedAboutSection = () => {
  const achievements = [
    { icon: Award, title: '25+ Years Experience', desc: 'Industry-leading expertise since 1995' },
    { icon: Users, title: '1000+ Projects', desc: 'Completed across Greater Sydney' },
    { icon: Shield, title: 'Fully Licensed', desc: 'Insured & certified professionals' },
    { icon: Star, title: '5-Star Rating', desc: 'Consistent excellence & satisfaction' }
  ];

  const values = [
    'Personal inspection of every project',
    'Direct communication with the owner',
    '25-year reputation for excellence', 
    'Family business values & integrity',
    'Hands-on quality control',
    'Lifetime craftsmanship guarantee'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 construction-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet <span className="gradient-text">Minas Romanakis</span>, Our Founder
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              For over 25 years, Minas has been personally dedicated to delivering the highest quality masonry and restoration work across Sydney. As a hands-on owner who inspects every project, Minas combines traditional craftsmanship with modern techniques to ensure exceptional results.
            </motion.p>

            <motion.div
              className="glass-morphism rounded-xl p-6 border-l-4 border-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground italic font-medium">
                "Quality isn't just our promise—it's my personal guarantee. Every project receives my direct attention because your satisfaction and the integrity of my family business depends on it."
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-semibold">— Minas Romanakis, Founder & Owner</p>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-full hover-glow transition-smooth">
                  <CardContent className="p-6 text-center space-y-3">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Values List */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Minas's Personal Commitment to You:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl floating-shadow">
            <motion.img
              src={minasWorkingImage}
              alt="Minas Romanakis working hands-on with masonry"
              className="w-full h-[500px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            
            {/* Floating Stats */}
            <motion.div
              className="absolute top-6 right-6 glass-morphism rounded-xl p-4 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-6 glass-morphism rounded-xl p-4 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">Personal</div>
                <div className="text-sm opacity-90">Guarantee</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};