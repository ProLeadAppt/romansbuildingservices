import { HowToSchema } from './LocalSEO/StructuredData';

const steps = [
  {
    title: 'You call or send a message',
    body: "Easiest thing is to ring Minas on 0414 922 276. If you can send a couple of photos of the job through, even better. We talk about what you have got, what you think you need, and roughly when you want it done.",
  },
  {
    title: 'We come and look at it',
    body: "Site visit is free across Sydney. Minas does the looking himself for anything heritage or structural. For straight stonework one of the senior crew might come out. We poke at the mortar, look behind the wall if we can, and tell you what is actually going on.",
  },
  {
    title: 'You get a real quote',
    body: "Written, itemised, no surprises later. We tell you what the work involves, what we are using, how long it takes and what it costs. If we are not the right people for the job, we say so and point you somewhere that is.",
  },
  {
    title: 'We do the work',
    body: "Minas is on the tools for anything heritage, structural or stonework. For larger jobs we bring in two or three of the team. Site is cleaned at the end of every day. You get progress photos if you want them and you can call any time during the job.",
  },
];

export const HowWeWorkSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-bg-light">
      {/* HowTo rich-result schema. Targets AI Overview + Google "how to hire
          a mason" queries, and gives the visible 4-step process a machine-
          readable anchor. */}
      <HowToSchema steps={steps} />
      <div className="max-w-4xl mx-auto">
        <div
          className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3">
            How we work
          </h2>
          <p className="font-body text-text-muted max-w-2xl mx-auto">
            Same process for a back-yard wall and a heritage facade. The size of the job changes, the
            way we run it does not.
          </p>
        </div>

        <ol
          className="space-y-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              id={`howwework-step-${i + 1}`}
              className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy text-white font-heading flex items-center justify-center text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="font-heading text-xl text-navy mb-2">{step.title}</h3>
                <p className="font-body text-text-muted leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
