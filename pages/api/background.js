const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Bulacan State University",
        degree: "BS, In Information Technology",
        detail:
          "Bachelor of Science in Information Technology - Sarmiento Campus",
        year: "2015-2019",
      },
      {
        id: 1,
        title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
        degree: "Udemy Online Course by Maximilian Schwarzmüllerx",
        detail: "Completed Udemy Online Courses academind ",
        year: "2022-2023",
      },
      {
        id: 2,
        title: "DICT Training on Web Development",
        degree:
          "Course by Department of Information and Communications Technology",
        detail: "Completed DICT Training on Web Development for developers",
        year: "2022-2023",
      },
      {
        id: 3,
        title: "Cybersecurity Competency Framework training via Zoom",
        degree:
          "Online Course by Department of Information and Communications Technology",
        detail:
          "Completed Online Course by Department of Information and Communications Technology",
        year: "2022-2023",
      },
      {
        id: 3,
        title:
          "Explore a Career in IT Support: Learning Fundamentals of IT Support",
        degree: "Learning Fundamentals of IT Support",
        detail:
          "Completed Explore a Career in IT Support: Learning Fundamentals of IT Support",
        year: "2021-2022",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Department of Information and Communications Technology",
        role: "Frontend Developer",
        url: "https://dict.gov.ph/",
        desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "02/2022 - 02/2024",
        location: "C.P Garcia Quezon City, Philippines",
      },
      {
        id: 2,
        title: "Tecsco Global Solutions Incorporated",
        role: "IT Desktop Support",
        url: "no website",
        desc: "IT Desktop Support instilledstrong project management skills.",
        year: "02/2023 - Present",
        location: "Pasay City, Philippines",
      },
      {
        id: 3,
        title: "Grace General Hospital",
        role: "IT Support Trainee",
        url: "no website",
        desc: "As a Trainee I learned how to support to fix computers and help everyday task as IT Support",
        year: "09/2020 - 02/2021",
        location: "Bulacan Philippines",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
