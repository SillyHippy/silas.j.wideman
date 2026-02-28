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
    title: "Coordinator & Grounds Crew",
    org: "Tulsa Youth Ranch",
    location: "Tulsa, OK",
    dates: "Oct 2025 – Present",
    type: "volunteer",
    bullets: [
      "Coordinates activities for students attending weekly Tuesday evening sessions",
      "Performs physical property maintenance, including detailed yard work and grooming horses",
      "Interacts positively with students and manages snack distribution/post-activity cleanup",
    ],
  },
  {
    title: "Recycling Processor & Sorter",
    org: "SHOW (Search, Habilitation, Opportunities, Work)",
    location: "Coweta, OK",
    dates: "Aug 2023 – Jun 2025",
    type: "paid",
    bullets: [
      "Consistently met production goals while successfully sorting commercial recyclables",
      "Adhered strictly to quality and safety protocols for handling and processing materials",
      "Managed workflow by staging sorted materials and ensuring the work area remained clear",
      "Demonstrated focus and sustained attention for the duration of the shift to ensure accuracy",
    ],
  },
  {
    title: "Assistant Camp Counselor",
    org: "Camp Loughridge",
    location: "Tulsa, OK",
    dates: "Summers 2021 – 2025 (June & July)",
    type: "volunteer",
    bullets: [
      "Directly supervised, mentored, and supported groups of 8-10 year-old boys",
      "Assisted co-counselors in planning and leading daily camp activities",
    ],
  },
  {
    title: "Janitorial / Maintenance (Vocational Training)",
    org: "St. John's Sportsplex",
    location: "Tulsa, OK",
    dates: "Nov 2025",
    type: "training",
    bullets: [
      "Performed thorough cleaning of a large-scale facility, including interior and exterior property maintenance",
      "Conducted janitorial duties: sweeping concrete floors, cleaning windows, and managing all trash receptacles",
      "Demonstrated excellent stamina during physically demanding tasks over an extended period",
      "Maintained a positive, professional attitude and asked clarifying questions to ensure tasks were completed to specification",
    ],
  },
  {
    title: "Stocker (Vocational Training)",
    org: "Save-A-Lot",
    location: "Tulsa, OK",
    dates: "Nov 2025",
    type: "training",
    bullets: [
      "Gained hands-on experience in stocking, product facing, and maintaining store layout",
      "Followed multi-step verbal instructions to accurately place grocery items",
      "Trained in operating equipment, including a box cutter, pallet jack, and cardboard baler",
      "Demonstrated ability to work at a steady, consistent pace",
    ],
  },
  {
    title: "High School Farm & Animal Assistance",
    org: "Sapulpa High School",
    location: "Sapulpa, OK",
    dates: "2022 – 2023",
    type: "volunteer",
    bullets: [
      "Gained hands-on experience cleaning animal stalls, gathering eggs, and conducting planting/harvesting in a greenhouse",
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
