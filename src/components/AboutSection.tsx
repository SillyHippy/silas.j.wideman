import { Badge } from "@/components/ui/badge";

const qualities = [
  "🤝 Team Player",
  "💪 Dependable",
  "😊 Positive Attitude",
  "📚 Eager Learner",
  "🏋️ Physically Active",
  "🎯 Detail-Oriented",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
          About Me
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I'm a dependable and physically active individual with a strong work ethic and a positive attitude. 
          I bring hands-on experience in grounds maintenance, animal care, youth mentorship, janitorial work, 
          and food processing. I thrive in team-oriented environments and take pride in being reliable, 
          approachable, and always willing to learn something new.
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
