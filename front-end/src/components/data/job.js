import appleLogo from "../../assets/image/com-apple.svg";
import adobeLogo from "../../assets/image/com-adobe.svg";
import broadbandLogo from "../../assets/image/com-broadband.svg";
import ciscoLogo from "../../assets/image/com-cisco.svg";
import metaLogo from "../../assets/image/com-meta.svg";
import microsoftLogo from "../../assets/image/com-microsoft.svg";
import oracleLogo from "../../assets/image/com-oracle.svg";
import salesforceLogo from "../../assets/image/com-salesforce.svg";
import sapLogo from "../../assets/image/com-sap.svg";
import teslaLogo from "../../assets/image/com-tesla.svg";
import uberLogo from "../../assets/image/com-uber.svg";
import amazonLogo from "../../assets/image/Amazon-Logo 1.svg";

const job_data = [
  {
    id: 1,
    title: "Mobile Developer",
    date: "Jan 2nd, 2025",
    deadline: "Feb 2nd, 2025",
    company: "Apple",
    category: "developer",
    vacancy: "2",
    requirements: ["Flutter", "React Native", "Kotlin"],
    Salary: "20000",
    type: "Remote",
    level: "Senior Level",
    experience: "3+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: appleLogo,
    description:
      "A mobile developer is a software professional who creates applications for mobile devices, such as smartphones and tablets. They work with clients to understand the functionality and appearance of the app, then use programming languages to create the app. Mobile developers may also create mobile versions of existing web or computer-based apps.",
    color: "#FCE49A",
  },
  {
    id: 2,
    title: "Database Administrator",
    date: "Jan 20th, 2025",
    deadline: "Feb 2nd, 2025",
    company: "Microsoft",
    category: "database",
    vacancy: "4",
    requirements: ["Database design", "Analytical skill", "Communication"],
    Salary: "150000",
    type: "Fullt-time",
    level: "Senior Level",
    experience: "2+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: microsoftLogo,
    description:
      "A database administrator (DBA) is an IT professional who manages an organization's database system. DBAs are responsible for ensuring that data is stored and retrieved correctly, and that the database is secure and performs well. They also work with developers to design new features and troubleshoot issues.",
    color: "#E0F4FF",
  },
  {
    id: 3,
    title: "Project Manager",
    date: "Jan 20th, 2025",
    deadline: "Feb 2nd, 2025",
    company: "Amazon",
    category: "management",
    vacancy: "10",
    requirements: ["Communication", "Leadership", "Risk Management"],
    Salary: "20000",
    type: "Fullt-time",
    level: "Entry Level",
    experience: "1+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: amazonLogo,
    description:
      "A project manager (PM) is a professional who plans, organizes, and executes projects for an organization.",
    color: "#D4F5EC",
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    date: "Jan 11th, 2025",
    deadline: "Feb 14th, 2025",
    company: "Meta",
    category: "security",
    vacancy: "4",
    requirements: ["Cloud security", "Professional certification", "Strong Analytical Skill"],
    Salary: "25000",
    type: "Remote",
    level: "Senior Level",
    experience: "4+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: metaLogo,
    description:
      "A cybersecurity professional is responsible for protecting an organization's IT infrastructure, networks, data, and edge devices from cyber threats.",
    color: "#FAE1F4",
  },
  {
    id: 5,
    title: "Software Engineer",
    date: "Jan 11th, 2025",
    deadline: "Feb 14th, 2025",
    company: "Tesla",
    category: "Engineer",
    vacancy: "2",
    requirements: ["Python", "C++", "Java"],
    Salary: "30000",
    type: "Fullt-time",
    level: "Senior Level",
    experience: "4+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: teslaLogo,
    description:
      "Software engineers apply the principles of engineering to develop computer applications. They often collaborate with developers and other engineers to create software programs. Their responsibilities also include recommending upgrades for existing systems and documenting an application or system in detail to write operating instructions.",
    color: "#E3DCFB",
  },
  {
    id: 6,
    title: "Network Engineer",
    date: "Jan 9th, 2025",
    deadline: "Feb 10th, 2025",
    company: "Broadband",
    category: "Engineer",
    vacancy: "2",
    requirements: ["Network design", "Network security", "Communication skill"],
    Salary: "30000",
    type: "Fullt-time",
    level: "Senior Level",
    experience: "4+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: broadbandLogo,
    description:
      "Network engineers work as part of an organization's IT department. They're responsible for ensuring the efficiency of their company's network hardware and computer systems. These employees install new hardware, run diagnostics and complete routine software updates. They also take preemptive measures to protect systems against malware, viruses and other potential threats to network security.",
    color: "#EDF0F5",
  },
  {
    id: 7,
    title: "Cloud Engineer",
    date: "Feb 20th, 2025",
    deadline: "March 10th, 2025",
    company: "Oracle",
    category: "Engineer",
    vacancy: "2",
    requirements: ["Python", "SQL", "JAVA"],
    Salary: "40000",
    type: "Part-time",
    level: "Senior Level",
    experience: "4+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: oracleLogo,
    description:
      "Cloud engineers assess a company's technical infrastructures and migrate certain processes and functions to a cloud-based system. They work with technical teams to determine and implement cloud solutions and solve or troubleshoot issues with cloud-based processes. Other duties of cloud engineers include planning and designing cloud-based applications, software and web services.",
    color: "#FCE49A",
  },
  {
    id: 8,
    title: "3D Graphic designer",
    date: "Jan 3rd, 2025",
    deadline: "Feb 10th, 2025",
    company: "Tesla",
    category: "graphics",
    vacancy: "5",
    requirements: ["Illustration Design", "3D Modeling", "Adobe Products"],
    Salary: "100000",
    type: "Remote",
    level: "Entry Level",
    experience: "1+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: teslaLogo,
    description:
      "A graphic designer is a creative professional who uses art and technology to create visual concepts that communicate ideas. They work on a variety of projects, such as designing logos, websites, advertisements, and brochures.",
    color: "#D4F5EC",
  },
  {
    id: 9,
    title: "Sales Engineer",
    date: "Jan 3rd, 2025",
    deadline: "Feb 10th, 2025",
    company: "Salesforce",
    category: "Engineer",
    vacancy: "5",
    requirements: ["Risk Analysis", "Project Management"],
    Salary: "20000",
    type: "Remote",
    level: "Entry Level",
    experience: "1+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: salesforceLogo,
    description:
      "Sales engineers sell scientifically advanced products to customers to generate revenue for an organization. They use their extensive knowledge of the technical specifications, value and advantages of a product or service to promote it to audiences. Some duties of these professionals include conducting cold-calling and networking to generate leads and delivering presentations and demonstrations of software to clients.",
    color: "#FAE1F4",
  },
  {
    id: 10,
    title: "Project Manager",
    date: "Jan 20th, 2025",
    deadline: "Feb 2nd, 2025",
    company: "Cisco",
    category: "management",
    vacancy: "10",
    requirements: ["Communication", "Leadership", "Risk Management"],
    Salary: "700000",
    type: "Fullt-time",
    level: "Entry Level",
    experience: "1+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: ciscoLogo,
    description:
      "A project manager (PM) is a professional who plans, organizes, and executes projects for an organization.",
    color: "#E3DCFB",
  },
  {
    id: 11,
    title: "Full Stack Web Developer",
    date: "Jan 20th, 2025",
    deadline: "Feb 2nd, 2025",
    company: "SAP",
    category: "developer",
    vacancy: "10",
    requirements: ["React", "Node JS"],
    Salary: "20000",
    type: "Remote",
    level: "Senior Level",
    experience: "3+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: sapLogo,
    description:
      "Full stack developers are responsible for the entire development process, from planning to final creation. They need to be proficient in a variety of programming languages and database management systems, and have a good understanding of user experience and security best practices. They also need to have soft skills like collaboration, communication, and planning.",
    color: "#FCE49A",
  },
  {
    id: 12,
    title: "Social Media Manager",
    date: "April 20th, 2025",
    deadline: "June 2nd, 2025",
    company: "Uber",
    category: "graphics",
    vacancy: "10",
    requirements: ["Writing", "Creativity", "Design skills"],
    Salary: "50000",
    type: "Remote",
    level: "Entry Level",
    experience: "1+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: uberLogo,
    description:
      "A social media manager is responsible for managing a company's online presence and social media accounts. They create and publish content, engage with customers, and analyze data to improve a company's social media strategy.",
    color: "#EDF0F5",
  },
  {
    id: 13,
    title: "Graphic designer",
    date: "Jan 9th, 2025",
    deadline: "Feb 2nd, 2025",
    company: "Apple",
    category: "graphics",
    vacancy: "2",
    requirements: ["Photoshop", "Canva", "Figma"],
    Salary: "1,50000",
    type: "Remote",
    level: "Senior Level",
    experience: "3+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: adobeLogo,
    description:
      "A graphic designer is a creative professional who uses art and technology to create visual concepts that communicate ideas. They work on a variety of projects, such as designing logos, websites, advertisements, and brochures.",
    color: "#FCE49A",
  },
  {
    id: 14,
    title: "IT Executive",
    date: "Jan 30th, 2025",
    deadline: "Feb 1st, 2025",
    company: "Microsoft",
    category: "developer",
    vacancy: "2",
    requirements: ["Vendor Management", "Collaboration"],
    Salary: "40000",
    type: "Fullt-time",
    level: "Senior Level",
    experience: "2+ YOE",
    apply: "Apply",
    details: "Details",
    imgURL: microsoftLogo,
    description:
      "An IT executive, or Information Technology executive, manages an organization's IT needs and systems. They are responsible for the technological infrastructure of the company",
    color: "#FCE49A",
  },
 
];

export default job_data;
