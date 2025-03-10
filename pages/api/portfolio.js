const portfolio = [
  {
    id: 0,
    projectName: "ICHARGE",
    url: "https://chr.gg/",
    image: "projects/chr.jpg",
    projectDetail:
      "The icharge offers a one-stop self-service mobile power bank rental service, providing a solution for charging your mobile devices while on the go.",
    technologiesUsed: [
      {
        tech: "Vue.js",
      },
      {
        tech: "React",
      },
      {
        tech: "Aos",
      },

      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 1,
    projectName: "BIR WEBSITE(Upcoming)",
    url: "https://drive.google.com/file/d/1ZhDQdaYRvMOtYbI8eYQXo32usDt467P0/view",
    image: "projects/birfe.png",
    projectDetail:
      "The Bureau of Internal Revenue (BIR) is a government agency in the Philippines responsible for collecting national taxes and enforcing tax laws. It oversees the assessment and collection of income taxes, value-added taxes (VAT), and other forms of taxation.",
    technologiesUsed: [
      {
        tech: "NEXTJS",
      },
      {
        tech: "RestAPI",
      },
      {
        tech: "shadcn UI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },

  {
    id: 2,
    projectName: "Philippine Business Hub",
    url: "https://business.gov.ph/home",
    image: "projects/pbh.png",
    projectDetail:
      "The Philippine Business Hub is a platform where citizens and business owners can access the forms, information and requirements they need for their business-related transactions.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },

      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 3,
    projectName: "GOVPH",
    url: "https://drive.google.com/file/d/1khKUYrxflhwu254YItW6RUmcXpBS7n6x/view?usp=sharing",
    image: "projects/govph.png",
    projectDetail:
      "The domain govph is the official online presence of the Philippine government. Websites under this domain serve as the digital gateways for various government agencies and departments, providing a centralized platform for accessing government services, information, and updates. These websites cover a wide range of functions, from public announcements and policy updates to online services like business registrations, tax payments, and more",
    technologiesUsed: [
      {
        tech: "Nextjs",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Shadcn UI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 4,
    projectName: "Egov Website",
    url: "https://e.gov.ph/",
    image: "projects/egov.png",
    projectDetail:
      "The eGov PH, also known as the e-Government Philippines, is a mobile application that simplifies transactions between the government and citizens.",
    technologiesUsed: [
      {
        tech: "Nextjs",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Headless UI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 5,
    projectName: "Philhealth",
    url: "https://philhealth.e.gov.ph/home",
    image: "projects/philhealth.png",
    projectDetail:
      "Members can access their membership details, check benefit packages, and verify eligibility for claims. Providers can also use this portal to check benefit availment eligibility",
    technologiesUsed: [
      {
        tech: "Nextjs",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Headless UI",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
