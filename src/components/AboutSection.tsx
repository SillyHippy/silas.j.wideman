import { Badge } from "@/components/ui/badge";

const qualities = [
  "🤝 Team Player",
  "💪 Dependable",
  "😊 Positive Attitude",
  "📚 Eager Learner",
  "🏋️ Excellent Stamina",
  "🎯 Detail-Oriented",
  "🗣️ Strong Communicator",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
          About Me
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Highly motivated and dependable individual with nearly two years of verifiable employment 
          in commercial sorting and extensive volunteer experience in youth leadership and grounds maintenance. 
          A proven team player with excellent stamina, a positive attitude, and exceptional soft skills. 
          Effective at following multi-step verbal instructions and interacting professionally with youth, 
          peers, and supervisors.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {qualities.map((q) => (
            <Badge
              key={q}
              variant="secondary"
              className="text-sm px-4 py-2 rounded-full font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {q}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
