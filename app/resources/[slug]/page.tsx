import ComingSoon from "@/components/layout/ComingSoon";

const RESOURCE_META: Record<string, { title: string; description: string }> = {
  "blog": {
    title: "Blog",
    description:
      "Visa updates, salary guides, destination overviews, and recruitment insights for Indian workers pursuing overseas careers.",
  },
  "success-stories": {
    title: "Success Stories",
    description:
      "Real stories from Indian workers who secured overseas employment through Blitz Immigration — in their own words.",
  },
  "faq": {
    title: "FAQ",
    description:
      "Answers to the most common questions about costs, eligibility, documents, the application process, and what to expect abroad.",
  },
  "recruitment-process": {
    title: "Recruitment Process",
    description:
      "A step-by-step walkthrough of how our overseas recruitment process works — from browsing jobs to starting work abroad.",
  },
  "salary-guides": {
    title: "Salary Guides",
    description:
      "Realistic salary benchmarks by country and industry role — so you know what to expect before you apply.",
  },
};

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = RESOURCE_META[slug] ?? {
    title: "Resource",
    description: "This resource page is being prepared and will be available shortly.",
  };

  return <ComingSoon page={meta.title} description={meta.description} />;
}

export async function generateStaticParams() {
  return Object.keys(RESOURCE_META).map((slug) => ({ slug }));
}
