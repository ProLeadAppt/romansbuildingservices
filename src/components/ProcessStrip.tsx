import { Phone, Search, FileText, Hammer } from 'lucide-react';

const steps = [
  { icon: Phone, label: 'You Call' },
  { icon: Search, label: 'We Inspect' },
  { icon: FileText, label: 'We Quote' },
  { icon: Hammer, label: 'We Build' },
];

export const ProcessStrip = () => {
  return (
    <section className="bg-navy texture-grain py-12">
      <div
        className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-white/15 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.label}
              className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <step.icon className="w-4 h-4 text-white/70" />
              </div>
              <span className="font-body text-xs text-white/50 uppercase tracking-wider">
                {step.label}
              </span>
              {i < steps.length - 1 && (
                <span className="absolute -right-4 top-5 text-white/20 text-xs hidden md:block">
                  &#8250;
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
