import { Mail, Phone, MapPin } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-8">
          I'm always open to new opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:silaswideman@gmail.com"
            className="inline-flex items-center gap-2 bg-card border border-border/60 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4 text-primary" />
            silaswideman@gmail.com
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
