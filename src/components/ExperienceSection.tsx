import { Briefcase } from "lucide-react";

interface Job {
  title: string;
  org: string;
  location: string;
  dates: string;
  type: "paid" | "volunteer" | "training";
  bullets: string[];
}

const jobs: Job[] = [
  {
    title: "Grounds Maintenance Worker",
    org: "Camp Hudgens / Indian Nations Council, BSA",
    location: "Okay, OK",
    dates: "Mar 2024 – Oct 2024",
    type: "paid",
    bullets: [
      "Performed mowing, weed-eating, edging, and tree trimming across the campgrounds",
      "Repaired and maintained fences and outdoor structures",
      "Cared for livestock including feeding, watering, and cleaning pens",
      "Supported general ranch operations as directed",
    ],
  },
  {
    title: "Volunteer Youth Mentor",
    org: "Camp Fire Green Country",
    location: "Tulsa, OK",
    dates: "Jun 2023 – Aug 2023",
    type: "volunteer",
    bullets: [
      "Mentored youth in group and individual settings during summer programs",
      "Helped plan and lead activities focused on personal development and teamwork",
      "Provided a positive role model and emotional support for participants",
    ],
  },
  {
    title: "Janitorial Assistant (Vocational Training)",
    org: "Sapulpa High School / TOPS Program",
    location: "Sapulpa, OK",
    dates: "Aug 2022 – May 2023",
    type: "training",
    bullets: [
      "Cleaned and sanitized classrooms, restrooms, and common areas",
      "Managed trash removal and restocked supplies",
      "Learned workplace skills through a supervised vocational training program",
    ],
  },
  {
    title: "Production Line Worker (Vocational Training)",
    org: "Green Country Staffing / Dale Rogers Training Center",
    location: "Tulsa, OK",
    dates: "Jun 2022 – Aug 2022",
    type: "training",
    bullets: [
      "Performed assembly line tasks including quality checks and packaging",
      "Followed safety protocols and maintained a clean workspace",
      "Gained foundational experience in production and logistics",
    ],
  },
];

const typeBadge: Record<Job["type"], { label: string; className: string }> = {
  paid: { label: "Paid", className: "bg-primary/15 text-primary" },
  volunteer: { label: "Volunteer", className: "bg-accent/15 text-accent" },
  training: { label: "Training", className: "bg-muted text-muted-foreground" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground text-center mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const badge = typeBadge[job.type];
              return (
                <div key={i} className="relative pl-12 sm:pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 sm:left-3.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className="bg-card rounded-2xl border border-border/60 p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-foreground">{job.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.org}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {job.location} · {job.dates}
                    </p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
