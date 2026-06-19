import ComingSoon from "@/components/layout/ComingSoon";

const SERVICE_META: Record<string, { title: string; description: string }> = {
  "overseas-recruitment": {
    title: "Overseas Recruitment",
    description:
      "End-to-end overseas recruitment solutions connecting skilled Indian workers with verified international employers across multiple industries and destinations.",
  },
  "work-visa-assistance": {
    title: "Work Visa Assistance",
    description:
      "Guidance on work visa requirements, permit applications, and documentation procedures for your destination country.",
  },
  "resume-assessment": {
    title: "Resume Assessment",
    description:
      "Expert review of your CV to align it with international recruitment standards and employer expectations.",
  },
  "interview-preparation": {
    title: "Interview Preparation",
    description:
      "Mock interviews, guidance, and tips to help you succeed in employer interviews for overseas positions.",
  },
  "documentation-support": {
    title: "Documentation Support",
    description:
      "Assistance with compiling, verifying, and submitting all required employment and travel documentation.",
  },
  "pre-departure-guidance": {
    title: "Pre-Departure Guidance",
    description:
      "Practical preparation covering travel logistics, destination orientation, and everything you need before you fly.",
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = SERVICE_META[slug] ?? {
    title: "Service",
    description: "This service page is being prepared and will be available shortly.",
  };

  return <ComingSoon page={meta.title} description={meta.description} />;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_META).map((slug) => ({ slug }));
}
