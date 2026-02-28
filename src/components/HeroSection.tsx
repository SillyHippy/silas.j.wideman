import { MapPin, ChevronDown, Download, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-lg text-muted-foreground mb-2 font-medium">👋 Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-foreground mb-4">
          Silas Wideman
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
          Highly motivated and dependable team player with nearly two years of verifiable employment, exceptional soft skills, and a positive attitude.
        </p>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="mailto:silas.j.wideman@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            silas.j.wideman@gmail.com
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="tel:+14802959955"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            (480) 295-9955 · Call or Text
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            Tulsa, OK
          </div>
          <a
            href="/Silas_Wideman_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ChevronDown className="w-6 h-6 animate-bounce-gentle" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
