export const siteConfig = {
  name: "Alexander Kwan",
  title: "Full-Stack Software Engineer",
  description: "Portfolio website of Alexander Kwan",
  accentColor: "#1d4ed8",
  social: {
    email: "alexander.mkwan@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexander-kwan-15b9941b6/",
    github: "https://github.com/alexandermkwan",
  },
  aboutMe:
    "Full-Stack Software Engineer with experience architecting React/Django ecosystems and migrating complex legacy data for national firms. Specialized in bridging technical gaps between disparate data sources and business-critical ERP systems.",
  skills: ["Python", "TypeScript/JavaScript", "React", "Django", "PostgreSQL", "AWS"],
  projects: [
    {
      name: "Secret Santa frontend app",
      description:
        "Secret Santa frontend app",
      link: "https://github.com/alexandermkwan/secret-kwanzaa",
      skills: ["React", "React Query", "GCP", "Cryptography"],
    },
    {
      name: "Secret Santa backend app",
      description:
        "Secret Santa backend app",
      link: "https://github.com/alexandermkwan/kwanzaa_backend",
      skills: ["Django", "PostgreSQL", "GCP"],
    }
  ],
  experience: [
    {
      company: "SOCOTEC, USA",
      title: "Full-Stack Software Engineer",
      dateRange: "May 2023 - Present",
      bullets: [
        "Architected and launched a cross-platform (React/React Native) replacement for legacy inspection software, migrating 100+ active users to a custom-built Django ecosystem.",
        "Engineered a seamless data migration from MySQL to PostgreSQL and AWS S3, maintaining 100% data integrity while replicating complex legacy schemas via Django ORM.",
        "Spearheaded the development of an internal Python-based proposal tool. Reduced proposal generation time by 50% by automating the bridge between CRM data and Word templates using Jinja2 for 15+ users.",
        "Developed a RESTful ETL service using Django to bridge disparate data sources with the Deltek ERP; automated the migration of legacy data from acquired firms, eliminating redundant manual processes for national business units.",
        "Modernized Deltek ERP workflows through automated proposal follow-ups, increasing response rates and reclaiming bandwidth for the sales team.",
        "Designed a medallion architecture schema and ingestion pipeline in Python and PostgreSQL, sourcing from Deltek ERP and PostgreSQL databases to power 'Vision Hub' — an org-wide project management tool enabling PMs to track projects across phases, tasks, resource levels/cost pools, and employee allocations via timesheet data.",
        "Transformed previously inaccessible ERP data into actionable financial metrics — including POC, JTD Revenue, Previously Recognized Revenue, Current Period Revenue, Margin, WIP, and AR — giving project managers org-wide visibility into project financials for the first time."
      ],
    },
    {
      company: "SLS Consulting, LLC",
      title: "Software Engineer Intern",
      dateRange: "May 2022 - Apr 2023",
      bullets: [
        "Created Python scripts to transform finance data from Quickbooks and used PowerBI to visualize revenue comparison between 2021 and 2022, accounts receivable aging over 90 days, top expenses, and estimates",
        "Created excel template and application prototype using Flutter for haz-mat classification, centralizing classification efforts",
        "Customized Microsoft Dynamics 365 Sales to reflect SLS SLS principals’ and engineers’ needs, using triggers and entity business rules"
      ],
    },
    {
      company: "Worcester Polytechnic Institute",
      title: "CMS Assistant",
      dateRange: "Sept 2021 - May 2022",
      bullets: [
        "Utilised Drupal to build and update WPI web pages for faculty, staff and students by creating custom templates across the Drupal System.",
        "Completed 100+ service desk tickets to satisfy user requests and better the stability of our web pages.",
        "Implemented website widgets to boost functionality, improve the user experience, and promote WPI through effective search engine optimization."
      ],
    },
    {
      company: "Reify Health",
      title: "Professional Services Intern",
      dateRange: "Jun 2021 - Aug 2021",
      bullets: [
        "Optimized SQL queries to reconcile patient enrollment data, reducing manual discrepancies between database records and Excel reports",
        "Implemented advanced lookup functions in patient enrollment reports using Excel index match functions.",
        "Respond to and fulfil Jira tickets submitted by clinical trial associates and leads"
      ],
    },
  ],
  education: [
    {
      school: "Worcester Polytechnic Institute",
      degree: "Bachelor of Science in Computer Science, Minor in Data Science",
      dateRange: "2019 - 2023",
      achievements: [
      ],
    }
  ],
};
