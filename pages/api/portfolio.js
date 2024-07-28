const portfolio = [
  {
    id: 0,
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
    id: 0,
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
    id: 0,
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
    id: 0,
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
    id: 0,
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

  // {
  //     id: 2,
  //     projectName: "Culyte",
  //     url: "https://culyte.com",
  //     image: "projects/culyte.png",
  //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //     technologiesUsed: [
  //         {
  //             tech: "ReactJS"
  //         },
  //         {
  //             tech: "NodeJS"
  //         },
  //         {
  //             tech: "Ant Design"
  //         },
  //         {
  //             tech: "TailwindCSS"
  //         },
  //     ]
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
