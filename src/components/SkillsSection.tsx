import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Wrench, Sparkles, Package } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    title: "Grounds & Animal Care",
    icon: Leaf,
    skills: ["Yard Work", "Horse Grooming", "Post-Event Cleanup", "General Facility Upkeep"],
  },
  {
    title: "Youth Mentorship",
    icon: Users,
    skills: ["Group Coordination", "Child Supervision (Ages 8-16)", "Activity Management", "Event Support"],
  },
  {
    title: "General Skills",
    icon: Wrench,
    skills: ["Following Multi-Step Verbal Directions", "Safety Procedures", "Time Management", "Teamwork", "Communication", "Customer Interaction"],
  },
  {
    title: "Janitorial & Maintenance",
    icon: Sparkles,
    skills: ["Interior & Exterior Cleaning", "Sweeping", "Trash Removal", "Window Cleaning", "Property Upkeep"],
  },
  {
    title: "Logistics & Processing",
    icon: Package,
    skills: ["Commercial Recyclable Sorting", "Stocking", "Product Facing", "Equipment Operation (Baler/Pallet Jack)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Skills
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <Card className="rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-bold">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="rounded-full text-xs font-medium"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
