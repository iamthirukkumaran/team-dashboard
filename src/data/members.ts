export interface Member {
  id: number;
  name: string;
  role: string;
  status: "Active" | "Inactive";
  email: string;
  bio: string;
  projects: string[];
  avatar?: string;
  joinDate: string;
  location: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Developer",
    status: "Active",
    email: "alice@unifiedweb.com",
    bio: "Frontend developer with 5+ years of experience specializing in React and TypeScript. Passionate about creating intuitive user experiences and clean, maintainable code.",
    projects: ["Project Alpha", "Project Beta", "Mobile App Redesign"],
    joinDate: "2021-03-15",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Bob Martin",
    role: "Designer",
    status: "Inactive",
    email: "bob@unifiedweb.com",
    bio: "UX/UI designer passionate about clean design and user-centered solutions. Expert in Figma, Adobe Creative Suite, and design systems.",
    projects: ["Project Gamma", "Brand Redesign"],
    joinDate: "2020-08-22",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Charlie Smith",
    role: "Manager",
    status: "Active",
    email: "charlie@unifiedweb.com",
    bio: "Experienced project manager ensuring smooth delivery and team coordination. Certified Scrum Master with expertise in agile methodologies.",
    projects: ["Project Delta", "Project Epsilon", "Team Optimization"],
    joinDate: "2019-11-10",
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "Diana Chen",
    role: "Developer",
    status: "Active",
    email: "diana@unifiedweb.com",
    bio: "Full-stack developer with strong backend expertise in Node.js and Python. Loves solving complex technical challenges and mentoring junior developers.",
    projects: ["API Modernization", "Database Migration", "Project Alpha"],
    joinDate: "2022-01-20",
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Ethan Rodriguez",
    role: "Designer",
    status: "Active",
    email: "ethan@unifiedweb.com",
    bio: "Creative designer specializing in motion graphics and interactive experiences. Brings fresh perspectives to every project with innovative design solutions.",
    projects: ["Animation Library", "Project Gamma", "Brand Guidelines"],
    joinDate: "2022-06-05",
    location: "Los Angeles, CA",
  },
  {
    id: 6,
    name: "Fiona Williams",
    role: "Developer",
    status: "Active",
    email: "fiona@unifiedweb.com",
    bio: "DevOps engineer focused on cloud infrastructure and automated deployment pipelines. AWS certified with expertise in Docker and Kubernetes.",
    projects: ["Infrastructure Upgrade", "CI/CD Pipeline", "Security Audit"],
    joinDate: "2021-09-18",
    location: "Denver, CO",
  },
  {
    id: 7,
    name: "George Thompson",
    role: "Manager",
    status: "Inactive",
    email: "george@unifiedweb.com",
    bio: "Technical lead with 10+ years managing development teams. Specializes in scaling engineering organizations and implementing best practices.",
    projects: ["Team Structure Redesign", "Process Optimization"],
    joinDate: "2018-04-12",
    location: "Boston, MA",
  },
  {
    id: 8,
    name: "Hannah Davis",
    role: "Designer",
    status: "Active",
    email: "hannah@unifiedweb.com",
    bio: "Senior UX researcher passionate about user behavior and data-driven design decisions. Expert in usability testing and design validation.",
    projects: ["User Research Study", "Design System V2", "Accessibility Audit"],
    joinDate: "2021-12-03",
    location: "Portland, OR",
  },
  {
    id: 9,
    name: "Thirukkumaran",
    role: "Frontend Developer",
    status: "Active",
    email: "kumaranthiru478@gmail.com",
    bio: "Frontend developer with 2+ years of experience specializing in React and TypeScript. Passionate about creating intuitive user experiences and clean, maintainable code.",
    projects: ["Electricity Alert System","Ball catcher using p5.js","Healthcare DashBoard"],
    joinDate: "2025-09-23",
    location: "TamilNadu, IN",
  },
];

export const roles = ["All Roles", "Developer", "Designer", "Manager"];