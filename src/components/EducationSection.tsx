import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-10">
          Education
        </h2>
        <Card className="rounded-2xl border-border/60 bg-card shadow-sm max-w-md mx-auto">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="p-3 rounded-xl bg-primary/10 shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-heading font-bold text-foreground">
                High School Diploma
              </h3>
              <p className="text-sm text-muted-foreground">Sapulpa High School</p>
              <p className="text-xs text-muted-foreground">Graduated 2023 · Sapulpa, OK</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
