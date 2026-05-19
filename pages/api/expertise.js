const expertise = [
  {
    id: 0,
    title: "Finance Innovation & Automation",
    desc: "I design and develop secure automation solutions that streamline finance, accounting, and planning workflows. My focus is reducing manual effort, improving operational efficiency, and helping teams make faster decisions through reliable systems and data-driven processes.",
  },
  {
    id: 1,
    title: "Microsoft 365 & Power Platform",
    desc: "I build business applications and automated workflows with Microsoft 365, Power Automate, Power Apps, Power BI, SharePoint, and related enterprise tooling. I turn process gaps into scalable solutions that teams can adopt confidently.",
  },
  {
    id: 2,
    title: "AI-driven Solutions",
    desc: "I explore and apply AI capabilities for intelligent automation, data processing enhancements, workflow optimization, and decision support. My goal is to build practical AI-enabled systems that solve real operational problems.",
  },
  {
    id: 3,
    title: "Cloud-based System Improvements",
    desc: "I use Microsoft Azure services to support secure, scalable applications and automation architecture. I am expanding my cloud engineering expertise with a focus on enterprise-scale financial operations.",
  },
  {
    id: 4,
    title: "Governance, Compliance & Reliability",
    desc: "I help maintain reliable financial applications while supporting compliance, governance, and operational controls. I build with security, maintainability, and business continuity in mind.",
  },
  {
    id: 5,
    title: "Cross-functional Collaboration",
    desc: "I work closely with Finance, Accounting, and Planning teams to identify inefficiencies, translate business needs into technical solutions, and support adoption through documentation, training, and technical assistance.",
  },
  {
    id: 6,
    title: "Web Application Development",
    desc: "My web development background remains part of my toolkit, helping me build user-friendly interfaces, APIs, dashboards, and internal tools that support automation and process improvement initiatives.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
