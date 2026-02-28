import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <div className="relative bg-card border border-border/60 rounded-2xl p-8 sm:p-10 shadow-sm">
            <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic font-medium mb-4">
              "I believe in showing up every day with a positive attitude, giving my best effort, and being someone my team can always count on."
            </blockquote>
            <p className="text-sm text-muted-foreground font-semibold">— Silas Wideman</p>
            <p className="text-xs text-muted-foreground mt-1">Personal Mission Statement</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
