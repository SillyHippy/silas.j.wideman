import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactFooter = () => {
  return (
    <footer id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* CTA Banner */}
        <ScrollReveal>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
              Ready to hire a dependable team player?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's talk! I'm excited to bring my energy and work ethic to your team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:silas.j.wideman@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <a
                href="tel:+14802959955"
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call or Text
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-6">
            Contact Information
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:silas.j.wideman@gmail.com"
              className="inline-flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              silas.j.wideman@gmail.com
            </a>
            <a
              href="tel:+14802959955"
              className="inline-flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              (480) 295-9955
            </a>
            <div className="inline-flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              Tulsa, OK
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-sm text-muted-foreground italic mb-6">
            References available upon request.
          </p>
        </ScrollReveal>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Thanks for stopping by! 😊 Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
