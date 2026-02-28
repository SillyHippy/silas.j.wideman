import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Wrench, Sparkles, Package } from "lucide-react";

const categories = [
  {
    title: "Grounds & Animal Care",
    icon: Leaf,
    skills: ["Mowing & Edging", "Weed-eating", "Tree Trimming", "Fence Repair", "Livestock Feeding", "Watering & Irrigation", "Pen Cleaning", "General Ranch Tasks"],
  },
  {
    title: "Youth Mentorship",
    icon: Users,
    skills: ["Group Facilitation", "One-on-One Mentoring", "Activity Planning", "Positive Role Modeling", "Communication"],
  },
  {
    title: "General Skills",
    icon: Wrench,
    skills: ["Physical Stamina", "Punctuality", "Following Instructions", "Safety Awareness", "Teamwork", "Adaptability"],
  },
  {
    title: "Janitorial & Maintenance",
    icon: Sparkles,
    skills: ["Sweeping & Mopping", "Restroom Sanitation", "Trash Removal", "Supply Restocking", "Floor Care", "Surface Disinfecting"],
  },
  {
    title: "Logistics & Processing",
    icon: Package,
    skills: ["Assembly Line Work", "Quality Control Checks", "Packaging", "Labeling", "Workplace Safety Compliance"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="rounded-2xl border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
