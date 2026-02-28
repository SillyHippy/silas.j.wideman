import { MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-16">
      <div className="animate-fade-in-up">
        <p className="text-lg text-muted-foreground mb-2 font-medium">👋 Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground mb-4">
          Silas Wideman
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
          Highly motivated and dependable team player with excellent stamina, a positive attitude, and exceptional soft skills.
        </p>
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium">
          <MapPin className="w-4 h-4 text-primary" />
          Tulsa, OK
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 animate-bounce-gentle text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
