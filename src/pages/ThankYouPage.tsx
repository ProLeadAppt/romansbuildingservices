import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, Shield, Award, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </motion.div>

          {/* Main Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your request has been successfully submitted. We've received your information and will contact you soon.
            </p>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Need immediate assistance?</p>
                      <a 
                        href="tel:+61483981292" 
                        className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                      >
                        +61 483 981 292
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Clock className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="text-xl font-semibold text-foreground">
                        Within 2-4 Hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review Your Request</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll carefully review your project details and requirements
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Personal Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    One of our experts will call you within 2-4 hours
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Schedule Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll arrange a convenient time for your free assessment
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-green-500" />
                <span className="text-sm">5-Star Google Rating</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Free Assessment</span>
              </div>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;